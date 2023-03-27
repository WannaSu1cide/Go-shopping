
const menu = document.querySelector(".menu")
const sidebar =document.querySelector(".sidebar")
const sidebar__content = document.querySelectorAll(".sidebar__content")



//click logo to comeback the Homepage
const logo = document.querySelector("#logo");
logo.addEventListener("click",()=>{
    window.location.href = "/view/Page.html"
})

menu.addEventListener("click",()=>{
    changeTheClassWhenCLickAgain(sidebar,"show__menu","close__menu")
    sidebar__content.forEach(element => {
        element.classList.toggle("show__sidebar__content")
        
    });
})



//Click the menu icon and its show the sidebar
