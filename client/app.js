//client side JS code file
// //alert('hello from the JS file'); //test if javascript file is linked correctly
var socket = io(); //send & receive messages from browser -> reference to SocketIO library

$('form').submit(function () {
  
  var name = $('#one').val();
  //socket.emit('message',name);

  var text = $('#two').val();
  //alert(text); //replace alert with socket.emit('message',text);
  socket.emit('message', name + " says: " + text);
  $('#two').val('');//clears out chat box after msg is sent
  return false;
});


//puts message into tag of ordered list
socket.on('message', function (msg) {
  var incomingMessage = $('<li>').text(msg);
  $('#messages').append(incomingMessage);
});

