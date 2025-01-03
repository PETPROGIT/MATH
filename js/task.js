


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
