var http = require('http')
var concatStream = require('concat-stream')
var urls = [process.argv[2], process.argv[3], process.argv[4]]
var completedRequests = 0
var requestData = []

for (i in urls) {
  http.get(urls[i], (response) => {
    response.pipe(concatStream(function (err, data) {
      if (err) {
        return console.error(err)
      }
      completedRequests++
      requestData.push(data.toString())
    }))
  })
  if (completedRequests == urls.length) {
    for (i in requestData) {
      console.log(requestData[i])
    }
  }
}


