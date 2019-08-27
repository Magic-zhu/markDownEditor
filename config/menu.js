const { app } = require('electron');
const {openFileDir,openFile}  =  require("../api/file");
const template = [
    {
        label:app.getName(),
            submenu: [
            { role: 'about' },
            { type: 'separator' },
            // { role: 'services' },
            // { type: 'separator' },
            // { role: 'hide' },
            // { role: 'hideothers' },
            // { role: 'unhide' },
            // { type: 'separator' },
            { role: 'quit' }
        ]
    },
    {
        label:"文件",
        submenu:[
            {click:(item,win)=>{
                openFileDir(win);
            },
            label:"打开文件夹",
            accelerator: 'CmdOrCtrl+P'
            },
            {
                click:(item,win)=>{
                    openFile(win);
                },
                label:"打开文件",
                accelerator: 'CmdOrCtrl+O'
            }
        ]
    },
    {
        label:"编辑",
        submenu:[
            { role: 'undo' },
            { role: 'redo' },
            { role: 'cut' },
            { role: 'copy' },
            { role: 'paste' },
        ]
    }
]
module.exports = template