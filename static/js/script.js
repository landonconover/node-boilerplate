/* Author: YOUR NAME HERE
*/

$(document).ready(function() {   

  var socket = io.connect();

  $('#sender').bind('click', function() {
   socket.emit('message', 'Message Sent on ' + new Date());     
  });


  socket.on('app_message', function(data){
   $('#receiver').append('<li>' + data + '</li>');  
  });
});