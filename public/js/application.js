$(document).ready(function() {
	// Este código corre después de que `document` fue cargado(loaded) 
	// completamente. 
	// Esto garantiza que si amarramos(bind) una función a un elemento 
	// de HTML este exista ya en la página. 
 
  $( "#myform" ).submit(function( event ) {
    // if ( $( "#valor_user" ).val() === "bye tqm bye tqm bye tqm" ) {
      
    // }
    event.preventDefault();
    // console.log("Test")
    new_value_user = $("#valor_user").val();
    // console.log(new_value_user)

    $.post('/abuelita', {
      user_input: new_value_user
    },
      function(data) {
         $("#new_window").html("Tu abuelita dice" + data)
      });
  });
});
