const gulp = require('gulp');
const chalk = require('chalk');
var child = require('child_process');
var watcher = gulp.watch("./body/*");
watcher.on('change',function(e){
    console.log(chalk.green("文件更改,开始重启"));
    child.execSync("npm start");
    console.log(chalk.red("重启结束"));
})
console.log(chalk.green("文件监听中......"));