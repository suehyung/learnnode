var http = require('http')
var bl = require('bl')

var queue = []
var count = 0

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) { 
      if (err) {
        return console.error(err)
      }

      queue[index] = data.toString()
      count++
      
      if (count === 3) {
        queue.forEach(function (result) {
          console.log(result)
        })
      }
    }))
  })
}

for (var i = 0; i < 3; i++) {
  httpGet(i)
}