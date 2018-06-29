var http = require('http')
var concat-stream = require('concat-stream')
var url = process.argv[2]

http.get(url, (response) => {
  response.pipe(concatStream(function (data) { /* ... */ }))
  data.toString()
  response.on('data', og)
  response.on('error', console.error)
})



collect all data, not just first
then write integer (# of char recd)
then string of char recd