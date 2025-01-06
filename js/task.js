


const statusButtons = document.querySelectorAll(".statusTaskBtn");

statusButtons.forEach(btn => {
    btn.addEventListener("click", (event)=>{
        let id = event.target.id;
        
        if(id == "task1"){
            tg.addToHomeScreen();
            event.target.textContent = "ok";
        }

        else if(id == "task2"){
            event.target.textContent = "ok";

        }
        
        else if(id == "task3"){
            event.target.textContent = "ok";

        }

    })
});
