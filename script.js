function play(){
    var audio = document.getElementById("audio");
    audio.loop = true;
    var rate = (document.getElementById("tempo").value / 103);
    audio.playbackRate = rate;
    audio.play();
              }