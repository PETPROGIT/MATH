
const message = document.getElementById("messageModal");

let condition = 0;
function showMessage(){
    if(condition == 0){
        condition = 1;
        message.style.visibility = "visible";
        message.style.opacity = "1";
        setTimeout(() => {
            message.style.opacity = "0";
            message.style.visibility = "hidden";
            condition = 0;
        }, 1200);
    }
    else{
        return false;
    }
}