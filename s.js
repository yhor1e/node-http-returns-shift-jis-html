// content of index.js
const http = require('http')
const fs = require('fs')
const port = 3000

const requestHandler = (request, res) => {
  console.log(request.url)
  //  res.end('Hello Node.js Server!')

  fs.createReadStream('./public/shift-jis.html')
    .pipe(res);
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
