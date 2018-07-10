var http = require('http')
var url = require('url')

function parsetime (time) {
  return {
    hour: time.getHours(), 
    minute: time.getMinutes(), 
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return {
    unixtime: time.getTime()
  }
}

var server = http.createServer(function (req, res) {
  var queryString = url.parse(req.url, true)
  var isoDate = new Date(queryString.query.iso)

  if (queryString.pathname === '/api/parsetime') {
    var reply = parsetime(isoDate)
  } else if (queryString.pathname === '/api/unixtime') {  
    var reply = unixtime(isoDate)
  }
  
  if (reply) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    return res.end(JSON.stringify(reply))
  } else {
    res.writeHead(404)
    res.end()
  }
})

server.listen(process.argv[2])