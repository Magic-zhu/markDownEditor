const electron = require('electron');
const template = require('./config/menu');
const fs = require('fs');
const {app, BrowserWindow, Menu, ipcMain} = require('electron');
const {openFile} = require("./api/file");
//设置菜单
const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);


//创建窗口
function createWindow() {
    // 创建浏览器窗口
    var win = new BrowserWindow({
        width: 1334, 
        height: 780, 
        webPreferences: {
            nodeIntegration: true
        },
        resizable:false,
    })
    // 然后加载 app 的 index.html.
    win.loadFile('./index.html');
    // 打开调试工具
    // win.webContents.openDevTools();
    //获取文件数据
    ipcMain.on("getFileData",(event, path)=>{
        fs.readFile(path,(err,data)=>{
            if(err){
                throw err
            }else{
                win.webContents.send("filedata",{data:data.toString(),path})
            }
        })
    })
    //保存文件
    ipcMain.on("saveFile",(e,data)=>{
        fs.writeFile(data.path, data.fileContent, (err) => {
            if (err) throw err;
            win.webContents.send("saveSuccess",1);
        });
    })
}

app.on('ready', createWindow);