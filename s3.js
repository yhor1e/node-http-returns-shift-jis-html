// content of index.js
const http = require('http')
const fs = require('fs')
const stream = require('stream')
const port = 3000

const requestHandler = (request, res) => {
  console.log(request.url)

  fs.readFile('./public/shift-jis.html', 'utf-8', (err, data) => {
    const rs = new stream.Readable()
    rs.push(data)
    rs.push(null)
    rs.pipe(res)
  });
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
