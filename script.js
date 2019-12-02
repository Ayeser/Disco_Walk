let lastTap = 0;

function play() {
    var audio = document.getElementById("audio");
    audio.loop = true;
    var rate = (document.getElementById("tempo").value / 103);
    audio.playbackRate = rate;
    audio.play();
}

function tap() {
    var d = new Date();
    var t = d.getTime();
    if(t - lastTap < 3000) {
        let tempo = ((1000/(t-lastTap))*60);
        document.getElementById("tappedTempo").innerHTML = "The tapped tempo is now " + tempo;
        audio.play();
    }
    lastTap = t;
}
