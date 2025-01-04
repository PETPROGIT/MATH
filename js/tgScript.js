let telegram = window.Telegram.WebApp;
telegram.expand();
telegram.disableVerticalSwipes();
const username = telegram.initDataUnsaf.user.username;
if(username != undefined){
    document.getElementById("userName").textContent = username;
}
else{
    document.getElementById("userName").textContent = "NEWUSER";
}

document.getElementById("userPhoto").src = telegram.initDataUnsafe.user.photo_url;	


document.querySelector(".tg").textContent = telegram.initDataUnsafe;
