/*
 * @Description: In User Settings Edit
 * @Author:magic-zhu
 * @Date: 2019-08-27 11:44:56
 * @LastEditTime: 2019-08-30 18:21:38
 * @LastEditors: Please set LastEditors
 */
class Parser{
    constructor(){
        this.originValue = "";
        this.tempValue ='';
        this.lineValue ='';
        this.title_reg = /#+/g;
    }
    render(value){
        this.originValue = value;
       return this.format();
    }
    format(){
            let tempArr =[];  //临时
            this.tempValue = this.originValue;
            //处理换行符
            tempArr = this.tempValue.split("\n");
            if(tempArr.length!=0){
                this.tempValue="";
                for(let i=0;i<tempArr.length;i++){
                    this.tempValue+=`<p>${tempArr[i]}</p>`
                }
            }
            //处理###这样的标题
            let childArr =[];  //匹配到的字符串数组
            childArr = this.originValue.match(this.title_reg)||[];
            if (childArr.length!=0){
                childArr = [...new Set(childArr)];
                for(let i=0;i<childArr.length;i++){
                    let reg = new RegExp(childArr[i],"gm");
                    this.tempValue = this.tempValue.replace(reg,`<span style="color:red">${childArr[i]}</span>`);
                }
            }
            return `<div>${this.tempValue}</div>`
    }
}
module.exports = new Parser();
