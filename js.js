


function token(){
    window.location.href = "https://t.me/blum/app?startapp=memepadjetton_FPIBANK_v5hyX-ref_bgzfOjNzqR";
}

function channel(){
    window.location.href = "https://t.me/fpibank";
}

function site(){
    window.location.href = "https://fpibank.com/";
}


let balance = 11100;
let balanceHTML = document.getElementById("balance");
balanceHTML.style.fontSize = "40px";
function updateBalance(){
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


let energy = 100;
let energyHTML = document.getElementById("energyBar");

function updateEnergy(){

    if(energy < 4){
        energyHTML.style.width = `${4}%`;
    }
    else{
        energyHTML.style.width = `${energy}%`;
    }
}
updateEnergy();


let reloadEnergy;

let isReloading = false;

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
            }, 60000);
        }
    }
}
