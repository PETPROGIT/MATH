


function token(){
    window.location.href = "https://t.me/blum/app?startapp=memepadjetton_FPIBANK_v5hyX-ref_bgzfOjNzqR";
}

function channel(){
    window.location.href = "https://t.me/fpibank";
}

function site(){
    window.location.href = "https://fpibank.com/";
}

function inviteFriends(){
    window.location.href = "https://t.me/share/url?url=&text=Привет!+🙂+Скорее+переходи+по+ссылке+и+присоединяйся+к+розыгрышу+ФПИ+банок:+https://t.me/FPITAP_bot";
}


let balance = 0;


if(balance = localStorage.getItem("balance") == null){
    localStorage.setItem("balance", "0")
}
balance = localStorage.getItem("balance");



console.log(balance)

let balanceHTML = document.getElementById("balance");
balanceHTML.style.fontSize = "40px";


function updateBalance(){
    localStorage.setItem("balance", balance);
    balanceSTR = balance.toString();
    if(balance >= 1000){
        balanceSTR = (balance.toString())[0]+","+(balance.toString()).slice(1);
    }
    if(balance >= 10000){
        balanceSTR = (balance.toString()).slice(0, 2)+","+(balance.toString()).slice(2);
    }
    if(balance >= 100000){
        balanceSTR = (balance.toString()).slice(0, 3)+","+(balance.toString()).slice(3);
    }
    balanceHTML.textContent = balanceSTR;
}
updateBalance();


let reloadEnergy;
let isReloading = false;

let energy = 100;
if(localStorage.getItem("energy") == null){
    localStorage.setItem("energy", 100)
}
energy = localStorage.getItem("energy");
if(energy < 100){
    isReloading = true;
    reloadEnergy = setInterval(() => {
        if(energy >= 100){
            clearInterval(reloadEnergy);
            isReloading = false;
            return false;
        }
        energy=parseInt(energy)+2;
        updateEnergy();
    }, 1000);
}
let energyHTML = document.getElementById("energyBar");
function updateEnergy(){
    localStorage.setItem("energy", energy);
    if(energy < 4){
        energyHTML.style.width = `${4}%`;
    }
    else{
        energyHTML.style.width = `${energy}%`;
    }
}
updateEnergy();




function tap(){
    if(energy != 0){
        balance++;
        energy-=2;
        updateEnergy()
        updateBalance();
        if(!isReloading){
            isReloading = true;
            reloadEnergy = setInterval(() => {
                if(energy == 100){
                    clearInterval(reloadEnergy);
                    isReloading = false;
                    return false;
                }
                energy+=2;
                updateEnergy();
                console.log(energy);
            }, 3000);
        }
    }
}



let participant = false;


if(localStorage.getItem("participant") == null){
    localStorage.setItem("participant", false)
}
participant = localStorage.getItem("participant");

if(localStorage.getItem("participant") == "true"){
    document.getElementById("toFeelBtn").style.justifyContent = 'space-between'
    document.getElementById("toFeelBtn").innerHTML = 'Ты участвуешь <span class="material-symbols-outlined" style="font-size:28px;">priority</span>';
    document.getElementById("toFeelBtn").style.fontSize = '14px';
}



let RafflePageIsOpen = false;
function openRafflePage(){
    if(!RafflePageIsOpen){
        document.getElementById("main").style.display = "none";
        document.getElementById("bg").style.display = "none";

        document.getElementById("rafflePage").classList.add("open");
        RafflePageIsOpen = true;
    }
    else{
        document.getElementById("rafflePage").classList.remove("open");
        RafflePageIsOpen = false;
        document.getElementById("main").style.display = "block";
        document.getElementById("bg").style.display = "block";

    }
}


function participate(){
    if(localStorage.getItem("participant") == "true"){
        return;
    }
    else{
        localStorage.setItem("participant", true);
        document.getElementById("toFeelBtn").style.justifyContent = 'space-between'
        document.getElementById("toFeelBtn").innerHTML = 'Ты участвуешь <span class="material-symbols-outlined" style="font-size:28px;">priority</span>';
        document.getElementById("toFeelBtn").style.fontSize = '14px';
        let url2 = `https://api.telegram.org/bot7638284661:AAGQvLwLIQI3hJM84awVJrznJg6uXvdTGk8/sendMessage?chat_id=2122883671&text=---УЧАСТНИК:+@${userName}---`;
        fetch(url2);
    }
}
