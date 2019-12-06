let lastTap = 0;
var rate = (document.getElementById("tempo").value / 103);

function play() {
    event.preventDefault();
    var audio = document.getElementById("audio");
    audio.loop = true;
    audio.playbackRate = rate;
    audio.play();
}

function tap() {
    event.preventDefault();
    var d = new Date();
    var t = d.getTime();
    if(t - lastTap < 3000) {
        let tempo = ((1000/(t-lastTap))*60);
        rate = tempo/103;
        document.getElementById("tappedTempo").innerHTML = "The tapped tempo is now " + tempo;
        audio.playbackRate = rate;
        audio.play();
    }
    lastTap = t;
}
