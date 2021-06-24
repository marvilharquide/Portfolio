
function bgChanger(){
    if(this.scrollY > this.innerHeight / 3.5){
        document.body.classList.add("bg-active");
    } else {
        document.body.classList.remove("bg-active");
    }
}

window.addEventListener("scroll", bgChanger);

function bgChanger2(){
    if(this.scrollY > this.innerHeight / 0.5){
        document.body.classList.add("bg-active-2");
    } else {
        document.body.classList.remove("bg-active-2");
    }
}

window.addEventListener("scroll", bgChanger2);





