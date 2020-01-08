class TextParser {
    constructor() {
        this.titleReg = /#+\s.*/
    }
    render(string,result) {
        string.replace(this.titleReg,`<span style='color:red'>${result}</span>`)
        return string
    }
    match(string){
        let resultArray = string.match(this.titleReg);
        console.log(resultArray)
        if(resultArray){
            return resultArray[0]
        }
        return false
    }
}
module.exports = new TextParser();
