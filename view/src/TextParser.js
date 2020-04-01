class TextParser {
  constructor () {
    this.titleReg = /#+\s.*/
    this.listReg = /\-\s.*/
    this.quote = />\s.*/
    this.code = /```/
  }

  match (string) {
    let title = string.match(this.titleReg)
    if (title) return 'title'
    let list = string.match(this.listReg)
    if (list) return 'list'
    let quote = string.match(this.quote)
    if (quote) return 'quote'
    let code = string.match(this.code)
    if (code) return 'code'
    return false
  }
}

module.exports = new TextParser()
