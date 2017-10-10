var express = require('express'); //make express available
var app = express(); //invoke express
var server = require('http').Server( app ) // start the express server instance
var bodyParser = require('body-parser');
var jsonfile = require('jsonfile')
const uuidv4 = require('uuid/v4');
// app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//serve out any static files in our public HTML folder
app.use(express.static('public'))

var storageFile = "storage.json"

app.post( '/', function(req,res){

    jsonfile.readFile(storageFile, function(err, obj) {
      req.body.timestamp = Date.now()
      req.body.uuid = uuidv4(); // -> '110ec58a-a0f2-4ac4-8393-c866d813b8d1'
      obj.entries.push(req.body)

      jsonfile.writeFile(storageFile, obj, function (err) {
        console.error(err)
        res.status(200).send('success writing to DB')
      })

    })

})

app.get('/fetch', function(req,res){

  var rand;
  jsonfile.readFile(storageFile, function(err, obj) {
    // console.dir(obj)
     rand = obj.entries[Math.floor(Math.random()*obj.entries.length)]
     res.send(rand)

  })

})



//makes the app listen for requests on port 3000
server.listen(3000, function(){
  console.log("app listening on port 3000!")
})


