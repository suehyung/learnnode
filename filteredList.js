var fs = require('fs')
const path = require('path')
var directory = process.argv[2]
var extFilter = '.' + process.argv[3]

function filterDir() {
  fs.readdir(directory, function (err, fileList) {
    if (err) {
      return console.log(err)
    }

    fileList.foreach(function (val) {
      if (path.extname(val) === extFilter) {
        console.log(val)
      }
    })
  })
}

filterDir()