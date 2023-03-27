const body = document.querySelector("body")
const menu = document.querySelector(".menu")
const sidebar =document.querySelector(".sidebar")
const sidebar__content = document.querySelectorAll(".sidebar__content")



body.addEventListener("click",()=>{
    if(sidebar.classList.contains("show__menu")){
        sidebar.classList.remove("show__menu");
    }
})


menu.addEventListener("click",()=>{
    changeTheClassWhenCLickAgain(sidebar,"show__menu","close__menu")
    sidebar__content.forEach(element => {
        element.classList.toggle("show__sidebar__content")
        
    });
})

