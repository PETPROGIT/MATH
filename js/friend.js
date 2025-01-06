
const inviteLink = "https://t.me/share/url?url=&text=HELLO!";


let friendsModal = document.getElementById("friendsModal").classList;
let wind = document.getElementById("friendsWind").classList;

let curretСonditin = false;
function showIniteFriendsWind(){
    if(curretСonditin == false){
        friendsModal.add("open");
        wind.add("open");
        curretСonditin = true;
    }
    else{
        friendsModal.remove("open");
        wind.remove("open");
        curretСonditin = false;
    }
}



function copyLink(){
    navigator.clipboard.writeText(inviteLink);
    showIniteFriendsWind();
}



function shareLink(){
    window.location.href = inviteLink;
}

