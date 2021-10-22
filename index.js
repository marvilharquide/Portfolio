
function bgChanger(){
    if(this.scrollY > this.innerHeight / 1.3){
        document.body.classList.add("bg-active");
    } else {
        document.body.classList.remove("bg-active");
    }
}

window.addEventListener("scroll", bgChanger);

function bgChanger2(){
    if(this.scrollY > this.innerHeight / 0.4){
        document.body.classList.add("bg-active-2");
    } else {
        document.body.classList.remove("bg-active-2");
    }
}

window.addEventListener("scroll", bgChanger2);



const navToggle = document.querySelector('.nav__toggle');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});