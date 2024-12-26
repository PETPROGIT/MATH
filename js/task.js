

const statusButtons = document.querySelectorAll(".statusTaskBtn");

const listUrls = ["https://t.me/durov", "https://t.me/toncoin"];
const listIds = ["DuRovesChannel", "TONCommunity"];

statusButtons.forEach(btn => {
    btn.addEventListener("click", (event)=>{
        let id = ((event.target.id).toString());
        let status = id[id.length - 1];
        if(status == "1"){
            let index = listIds.indexOf(id.slice(0, -2));
            window.location.href = listUrls[index];
        }

    })
});
