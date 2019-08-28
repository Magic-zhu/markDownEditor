class Parser{
    constructor(){
        this.originValue = "";
        this.tempValue ='';
        this.lineValue ='';
        this.title_reg = /#+\/n/g;
        this.df = this.debounce(()=>{
            let childArr =[]; //匹配到的字符串数组
            let indexArr =[]; //索引数组
            this.tempValue = this.originValue;
            childArr = this.originValue.match(this.title_reg)||[];
            childArr = [...new Set(childArr)];
            for(let i=0;i<childArr.length;i++){
                let reg = new RegExp(childArr[i],"gm")
                this.tempValue = this.tempValue.replace(reg,`<span style="color:red">${childArr[i]}</span>`);
            }
            console.log(this.tempValue);
        },200)
    }
    render(value){
        this.originValue = value;
        this.format();
    }
    format(){
       this.df();
    }
    debounce(fn,wait){
        var timeout = null;
        return function () {
            if(timeout){
                clearTimeout(timeout);
                timeout = null;
            }else {
                timeout = setTimeout(()=>{
                    fn.apply(this,arguments);
                    timeout = null;
                }, wait);
            }
        }
    }
    //自动替换
    replace(){

    }
}
module.exports = new Parser();
