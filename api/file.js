const { dialog} = require('electron');
const fs = require('fs');
const path = require('path');
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
function openFile(win){
    dialog.showOpenDialog({properties:['openFile']},(files)=>{
        if(files){
            fs.readFile(files[0],(err,data)=>{
                if(err){
                    throw err
                }else{  
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
module.exports ={openFileDir,openFile}