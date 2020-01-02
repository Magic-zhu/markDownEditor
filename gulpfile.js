const {watch, series} = require('gulp')

function defaultTask (cb) {
  // place code for your default task here
  cb()
}

function restart () {

}

watch('body/*', restart)
exports.default = defaultTask