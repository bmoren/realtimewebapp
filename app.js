var express = require('express'); //make express available
var app = express(); //invoke express
var server = require('http').Server( app ) // start the express server instance
var io = require('socket.io')(server) // use socket.io for real time connections aka. wesockets

//serve out any static files in our public HTML folder
app.use(express.static('public'))


var emojiHistory = [] //store some data, this will go away when the server crashes or reboots.

//do something when someone connects to our page.
io.on('connection', function(socket){
  console.log(socket.id); // log out the unique ID of each person who connects

// this section is a bit of an information 'relay' it takes the incoming data, replicates it and sends it out to everyone who is connected.
//look for an incoming addEmoji message from the client
  socket.on('addEmoji', function(data){
    emojiHistory.push(data) //add the data to our storage array.
    io.emit('massSendEmoji', data) //send the massSendEmoji message out to all of the connected clients.
  })

  io.emit('startingEmoji', emojiHistory) // send the entire emoji History down to the clients when they connect!

})

//makes the app listen for requests on port 3000
server.listen(3000, function(){
  console.log("app listening on port 3000!")
})
