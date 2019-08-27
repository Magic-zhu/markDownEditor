class Parser{
    constructor(){
        this.originValue = "";
        this.tempValue ='';
        this.lineValue ='';
        this.title_reg = /#+/g;
        this.df = this.debounce(()=>{
            let childArr =[]; //匹配到的字符串数组
            let indexArr =[]; //索引数组
            childArr = this.originValue.match(this.title_reg);
            while (this.title_reg.exec(this.originValue) != null){
                let temp = this.title_reg.exec(this.originValue);
                indexArr.push(temp)
            }
            console.log(childArr,indexArr)
        },500)
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
