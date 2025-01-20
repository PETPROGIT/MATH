


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
    window.location.href = "https://t.me/share/url?url=&text=Привет!+🙂+Скорее+переходи+по+ссылке+и+присоединяйся+к+ФПИ+банку:+https://t.me/FPITAP_bot?startapp";
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
    }, 2000);
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
            }, 2000);
        }
    }
}
