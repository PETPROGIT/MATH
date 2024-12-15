


const pages = document.querySelectorAll(".navElement");

pages.forEach(element => {
    element.addEventListener("click", (event)=>{

        message.style.opacity = "0";


        
        document.getElementById("homeBtn").classList.remove("active");
        document.getElementById("taskBtn").classList.remove("active");
        document.getElementById("adventBtn").classList.remove("active");
        document.getElementById("shopBtn").classList.remove("active");
        document.getElementById("infoBtn").classList.remove("active");



        document.getElementById("homePage").style.display = "none";
        document.getElementById("infoPage").style.display = "none";
        
        document.getElementById(((event.target.id).toString()).slice(0, -1)).classList.add("active");
        document.getElementById(((event.target.id).toString()).slice(0, -4)+"Page").style.display = "block";
        
    })
});
