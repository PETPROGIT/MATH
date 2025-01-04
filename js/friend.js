
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
        document.getElementById("copyLinkBtn").innerHTML = 'Copy link<span class="material-symbols-outlined" style="font-size: 30px;">content_copy</span>';

        curretСonditin = false;
    }
}



function copyLink(){
    navigator.clipboard.writeText(inviteLink);    
    document.getElementById("copyLinkBtn").innerHTML = "Link copied <span class='material-symbols-outlined' style='font-size: 28px;'>done_all</span>";

}



function shareLink(){
    window.location.href = inviteLink;
}

