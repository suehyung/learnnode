var fs = require('fs')
var file = process.argv[2]
var lines

function countNewLines(callback) {
  fs.readFile(file, 'utf8', function doneReading(err, fileContents) {
    if (err) {
      return console.log(err)
    }
    lines = fileContents.split('\n').length - 1
    callback()
  })
}

function returnCount() {
  console.log(lines)
}

countNewLines(returnCount)