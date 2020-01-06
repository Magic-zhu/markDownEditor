const { app } = require('electron');
const {openFileDir,openFile}  =  require("../api/file");
const template = [
    {
        label:app.getName(),
            submenu: [
            { role: 'about' },
            { type: 'separator' },
            { role: 'services' },
            { type: 'separator' },
            { role: 'hide' },
            { role: 'hideothers' },
            { role: 'unhide' },
            { type: 'separator' },
            { role: 'quit' }
        ]
    },
    {
        label:"file",
        submenu:[
            {click:(item,win)=>{
                openFileDir(win);
            },
            label:"openFolder",
            accelerator: 'CmdOrCtrl+P'
            },
            {
                click:(item,win)=>{
                    openFile(win);
                },
                label:"openFile",
                accelerator: 'CmdOrCtrl+O'
            }
        ]
    },
    {
        label:"edit",
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