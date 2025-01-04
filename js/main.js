


let telegram = window.Telegram.WebApp;
telegram.expand();
const username = telegram.initDataUnsafe.username;
if(username != undefined){
    document.getElementById("userName").textContent = username;
}
else{
    document.getElementById("userName").textContent = "NEWUSER";
}

document.getElementById("userPhoto").src = telegram.initDataUnsafe.photo_url;	


document.querySelector(".tg").textContent = telegram.initDataUnsafe;

let balance = 990;

const balanceHTML = document.getElementById("balanceHTML");

balanceHTML.style.fontSize = "54px";
balanceHTML.style.fontWeight = "900";
balanceHTML.style.fontFamily = "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-seri";

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