var urlToServer = "http://localhost:3000"


$('.submit').click(function(event) {

  console.log( $('#enteredText').val() )

  var text = $('#enteredText').val() //store it
  $('#enteredText').val("") //reset

  if(text){
    $.post( urlToServer, {"text":text})
    .done(function( data ) {
      console.log( data );
    });
  }else{
    console.error('no text!') 
  }



});


$('.fetch').click(function(event){

  $.get(urlToServer+"/fetch").done(function(data){

    console.log(data)

    $('.fetchedData').html(data.text)
  })


})



