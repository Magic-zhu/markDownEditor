class TextParser {
    constructor() {
        this.titleReg = /#+\s.*/;
        this.listReg = /\-\s.*/;
    }
    match(string){
        let title = string.match(this.titleReg);
        if(title) return 'title';
        let list = string.match(this.listReg);
        if(list) return 'list';
        return false
    }
}
module.exports = new TextParser();
