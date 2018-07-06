var http = require('http')
var concatStream = require('concat-stream')
var url = process.argv[2]

http.get(url, (response) => {
  response.pipe(concatStream(function (err, data) {
    if (err) {
      return console.error(err)
    }
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))
})
