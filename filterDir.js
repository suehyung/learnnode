var filterModule = require('./filterModule')

function returnList(err, list) {
  if (err) {
    return console.error('Error:', err)
  }

  list.forEach(function (file) {
		console.log(file)
	})
}

filterModule(process.argv[2], process.argv[3], returnList)