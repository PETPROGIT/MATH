let current = document.getElementById("current").style;
        
let offsets = [-32.8, -16.4, 0, 16.4, 32.8];

let nums = document.querySelectorAll(".emoji");

nums.forEach(btn =>{
    btn.addEventListener("click", (event)=>{
        nums.forEach(btn => {
            btn.classList.remove("active");
            btn.src = `emoji${btn.id}.png`;
        })

        current.marginLeft = `${offsets[parseInt(event.target.id)-1]}vh`;
        setTimeout(() => {
            event.target.src = `emoji${event.target.id}.gif`;
            event.target.classList.add("active");
        }, 150);
    })
})

document.getElementById("continueBtn").addEventListener("click", ()=>{
    document.getElementById("addNote").classList.add("show");
})

function start(){
    window.location.href = "music.html";
    setTimeout(() => {
        play();
    }, 200);
}