var express = require('express'); //make express available
var app = express(); //invoke express
var server = require('http').Server( app ) // start a server and add express to the server
var io = require('socket.io')(server) // add socket.io and attach it to the sertver.

//serve out any static files in our public HTML folder
app.use(express.static('public'))

//do something when someone connects to our page.
io.on('connection', function(socket){
  console.log(socket.id); // log out the unique ID of each person who connects

// this section is a bit of an information 'relay' it takes the incoming data, replicates it and sends it out to everyone who is connected.
//look for an incoming addEmoji message from the client
  socket.on('addEmoji', function(data){
    io.emit('massSendEmoji', data) //send the massSendEmoji message out to all of the connected clients.
  })

})

//makes the app listen for requests on port 3000
let port = process.env.PORT || 3000
server.listen(port, function(){
  console.log("app listening on port: " + port)
})
