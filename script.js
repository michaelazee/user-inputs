 $(document).ready(function() {

    $("#castrecording-submit").click(function(){
    var castRecordingString = $("#cast-recording").val();
    var castRecording = parseInt(castRecordingString);

    if ( castRecording > 10 ) {
      $("#castrecording-form").hide();
      $("#answer").text("Broadway, Here I Come!");
      $("#broadway-img").attr("src", "https://media.giphy.com/media/QNUT5FSrWPtf7GqD5J/giphy.gif");
      
    } else {
      $("#answer").text("You can't sit with us :/");
      $("#meangirls-img").attr("src", "https://cdn.vox-cdn.com/thumbor/MxOSpO68_0Rz9kqzmBVTOQA8ghc=/0x0:1600x1028/1200x0/filters:focal(0x0:1600x1028):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10626485/MeanGirlsBway2539r_preview.jpeg");
    }
  });

});
