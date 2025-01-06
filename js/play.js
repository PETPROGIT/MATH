





let energy = 3;

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

energyCheck();


var music = new Audio('Dancing Cow - Dancing Polish Cow.mp3');


const playButtom = document.getElementById("startMining");
const volumeBtn = document.getElementById("volume");

function stopDancing(){
    playButtom.classList.remove("mining");
    volumeBtn.classList.remove("mining");
    playButtom.innerHTML = 'Start mining<img src="img/on.png"  style="height: 36px; transform: rotate(180deg)">';
    music.pause();
    document.getElementById("p").src = "d7b48b764442426281d66d511819181fe2pTkDIOtCCuRNGj-1.png";
    music = new Audio('Dancing Cow - Dancing Polish Cow.mp3');
    clearInterval(mining);
    playStop = false;
    balanceHTML.style.animation = "none";
    energyProgressBar.style.transition = 'none';
    energyCheck();

    tg.disableClosingConfirmation();
}




let mining;
let playStop = false;
function play(){
    if(playStop == false && energy != 0){

        tg.enableClosingConfirmation();


        music.play();
        volumeBtn.innerHTML = '<span class="material-symbols-outlined">volume_up</span>';
        energyProgressBar.style.transition = 'all 243s';



        setTimeout(() => {
            playButtom.classList.add("mining");
            volumeBtn.classList.add("mining");
            playButtom.innerHTML = 'Stop mining<img src="img/on.png"  style="height: 36px; transform: rotate(0deg);">';
            document.getElementById("p").src = "polish-dancing-cow-dancing.gif";
            balanceHTML.style.animation = "miningAnimation 1s linear infinite";

            energy--;
            energyCheck();
            balanceHTML.style.animation = "balanceMining .95s infinite";

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