





let energy = 2;

const energyProgressBar = document.getElementById("progress");
const energyBar = document.getElementById("EnergyBar");


function energyCheck(){
    if(energy == 3){
        energyProgressBar.style.width = "100%";
    }
    else if(energy == 2){
        energyProgressBar.style.width = "66%";
    }
    else if(energy == 1){
        energyProgressBar.style.width = "33%";
    }
    else{
        energyProgressBar.style.width = "0%";
    }
}
energyProgressBar.style.transition = 'none';

energyCheck();


var music = new Audio('Dancing Cow - Dancing Polish Cow.mp3');


const playButtom = document.getElementById("startMining");
const volumeBtn = document.getElementById("volume");

function stopDancing(){
    playButtom.classList.remove("mining");
    volumeBtn.classList.remove("mining");
    playButtom.innerHTML = '<span class="material-symbols-outlined arrF" style="margin-right: 20px;">arrow_forward</span>Start dancing<span class="material-symbols-outlined arrB" style="margin-left: 20px;">arrow_back</span>';
    music.pause();
    document.getElementById("p").src = "d7b48b764442426281d66d511819181fe2pTkDIOtCCuRNGj-1.png";
    music = new Audio('Dancing Cow - Dancing Polish Cow.mp3');
    clearInterval(mining);
    playStop = false;
    balanceHTML.style.animation = "none";
    energyProgressBar.style.transition = 'none';
    energyCheck();
}



let mining;
let playStop = false;
function play(){
    if(playStop == false && energy != 0){

        music.play();
        volumeBtn.innerHTML = '<span class="material-symbols-outlined">volume_up</span>';



        setTimeout(() => {
            playButtom.classList.add("mining");
            volumeBtn.classList.add("mining");
            playButtom.innerHTML = '<span class="material-symbols-outlined arrF" style="margin-right: 12px;">arrow_forward</span>Stop dancing<span class="material-symbols-outlined arrB" style="margin-left: 12px;">arrow_back</span>';
            document.getElementById("p").src = "img/polish-dancing-cow-dancing.gif";
            balanceHTML.style.animation = "miningAnimation 1s linear infinite";

            energy--;
            energyCheck();

        }, 400);
        setTimeout(() => {
            music.pause();
            document.getElementById("p").src = "d7b48b764442426281d66d511819181fe2pTkDIOtCCuRNGj-1.png";
            music = new Audio('Dancing Cow - Dancing Polish Cow.mp3');
            clearInterval(mining);
            stopDancing();
        }, 243000);
        mining = setInterval(() => {
            balance+=1;
            updateBalance();
        }, 950);
        playStop = true;
    }
    else{
        stopDancing();
    }

}


let vol = true;
function volumeMusic(){
    if(vol == true){
        music.volume = '0';
        vol = false;
        volumeBtn.innerHTML = '<span class="material-symbols-outlined">volume_off</span>';
    }
    else{
        music.volume = '1';
        vol = true;
        volumeBtn.innerHTML = '<span class="material-symbols-outlined">volume_up</span>';
    }
}