


const statusButtons = document.querySelectorAll(".statusTaskBtn");

const listUrls = ["https://t.me/durov", "https://t.me/toncoin"];
const listIds = ["DuRovesChannel", "TONCommunity"];
const listStatus = ["1", "1"];

statusButtons.forEach(btn => {
    btn.addEventListener("click", (event)=>{
        let id = ((event.target.id).toString());
        let index = listIds.indexOf(id);
        if(listStatus[index] == "1"){
            window.location.href = listUrls[index];
            event.target.style.color = "white";
            event.target.style.backgroundColor = "rgb(11, 164, 16)";
            event.target.textContent = "Claim";
            setTimeout(() => {
                listStatus[index] = "2";
            }, 100);
        }
        if(listStatus[index] == "2"){
            event.target.style.backgroundColor = "rgb(30, 30, 30)";
            event.target.style.color = "white";
            event.target.style.border = "1px solid rgb(60, 60, 60)";
            balance+=100;
            updateBalance();
            event.target.innerHTML = "<img src='img/done.png' style='width: 22px; opacity: .5;'>";
            
            listStatus[index] = "3";
        }
        if(listStatus[index] == "3"){
            return false;
        }

    })
});




var music = new Audio('Dancing Cow - Dancing Polish Cow.mp3');

const playButtom = document.getElementById("startMining");
const volumeBtn = document.getElementById("volume");



let mining;
let playStop = false;
function play(){
    if(playStop == false){
        music.play();
        volumeBtn.innerHTML = '<span class="material-symbols-outlined">volume_up</span>';
        setTimeout(() => {
            playButtom.classList.add("mining");
            volumeBtn.classList.add("mining");
            playButtom.innerHTML = '<span class="material-symbols-outlined arrF" style="margin-right: 15px;">arrow_forward</span>Stop dancing<span class="material-symbols-outlined arrB" style="margin-left: 15px;">arrow_back</span>';
            document.getElementById("p").src = "img/polish-dancing-cow-dancing.gif";
    
        }, 400);
        setTimeout(() => {
            music.pause();
            document.getElementById("p").src = "d7b48b764442426281d66d511819181fe2pTkDIOtCCuRNGj-1.png";
            music = new Audio('Dancing Cow - Dancing Polish Cow.mp3');
            clearInterval(mining);
        }, 243000);
        mining = setInterval(() => {
            balance+=1;
            updateBalance();
        }, 950);
        playStop = true;
    }
    else{
        playButtom.classList.remove("mining");
        volumeBtn.classList.remove("mining");
        playButtom.innerHTML = '<span class="material-symbols-outlined arrF" style="margin-right: 20px;">arrow_forward</span>Start dancing<span class="material-symbols-outlined arrB" style="margin-left: 20px;">arrow_back</span>';
        music.pause();
        document.getElementById("p").src = "d7b48b764442426281d66d511819181fe2pTkDIOtCCuRNGj-1.png";
        music = new Audio('Dancing Cow - Dancing Polish Cow.mp3');
        clearInterval(mining);
        playStop = false;

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