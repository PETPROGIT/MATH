var audio = new Audio('dreanOn.mp3');
let progress;
let playing = false;
let progressBar = 0;
function play(){
    if(playing == false){
        audio.play();
        peogress = setInterval(() => {
            progressBar+=100/audio.duration;
            console.log(progressBar);
            document.getElementById("progress").style.width = `${progressBar}%`;
        }, 1000);
        document.getElementById("playBtn").textContent = "pause";
        playing = true;
    }
    else{
        document.getElementById("playBtn").textContent = "play_arrow";
        clearInterval(progress);
        audio.pause();
        playing = false;
    }


}