var socket = io.connect();

socket.on('connect', function(data){
  console.log("we connected to the server as" + socket.id)
})


$('body').click(function(event) {

  console.log(event.clientX, event.clientY)

  $('<div>😎</div>').css({
    'position': 'absolute',
    'top': event.clientY,
    'left': event.clientX
  }).appendTo('body')

  var dataToSend = {
    'top': event.clientY,
    'left': event.clientX
  }

  socket.emit('addEmoji', dataToSend); // send the data up to the server

});

socket.on('massSendEmoji', function(data){

  $('<div>😘</div>').css({
    'position': 'absolute',
    'top': data.top,
    'left': data.left
  }).appendTo('body')

})

