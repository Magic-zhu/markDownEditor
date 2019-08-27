const { dialog} = require('electron');
const fs = require('fs');
const path = require('path');
const { app } = require('electron');
/**
 * 打开文件夹
 * @param {*} win - 窗口实例
 */
function openFileDir(win){
    dialog.showOpenDialog({properties:['openDirectory']},(files)=>{
        if(files){
            let oriPath = files[0];
            let result = fs.readdirSync(files[0]);
            if(result){
                win.webContents.send("filetree",fileTreeParse(result,oriPath));
            }
        }
    })
}
/**
 * 打开文件
 * @param {*} win - 窗口实例
 */
function openFile(win){
    dialog.showOpenDialog({properties:['openFile']},(files)=>{
        if(files){
            fs.readFile(files[0],(err,data)=>{
                if(err){
                    throw err
                }else{  
                    app.addRecentDocument(files[0]);
                    win.webContents.send("filedata",{data:data.toString(),path:files[0]})
                }
            })
        }
    })
}

/**
 * 解析文件夹 生成文件树
 * @param files - 文件夹内的内容
 */
function fileTreeParse(files,oriPath){
    var tree =[];
    MapChildren(files,tree,oriPath);
    return tree
}

/**
 * 遍历某个节点
 * @param child
 */
function MapChildren(files,tree,oriPath){
    for(let i = 0; i<files.length;i++){
        let states = fs.statSync(path.join(oriPath,files[i]));
        tree.push({label:files[i],children:[],filepath:path.join(oriPath,files[i]),isDir:true})
        if(states.isDirectory()){
            let result = fs.readdirSync(path.join(oriPath,files[i]));
            let prePath = path.join(oriPath,files[i]);
            MapChildren(result,tree[i].children,prePath);
        }else{
            tree[i].isDir=false;
        }
    }
}
/**
 * 新建文件
 */
function createNewFile(mainPath){
    //读取当前目录 判断是否有重名
    
    fs.writeFileSync()
}

/**
 * 删除文件
 * @param {*} params 
 */
function deleteFile(params) {
    
}

function renameFile(){

}

module.exports ={openFileDir,openFile}