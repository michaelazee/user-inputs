 $(document).ready(function() {

    $("#castrecording-submit").click(function(){
    var castRecordingString = $("#cast-recording").val();
    var castRecording = parseInt(castRecordingString);

    if ( castRecording > 10 ) {
      $("#answer").text("Broadway, Here I Come!");
      
    } else {
      $("#answer").text("You can't sit with us :/");
    }
  });

});
