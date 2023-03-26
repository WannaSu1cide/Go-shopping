const infoImg  =document.querySelector("#info__img");
const infoTable =document.querySelector(".info__table")
const body = document.querySelector(".body");
let appear =true
let 
//click logo to comeback the Homepage
const logo = document.querySelector("#logo");
logo.addEventListener("click",()=>{
    window.location.href = "/view/Page.html"
})
    //Click the info img and its show the setting table
infoImg.addEventListener("click",function  openInfoTable(){
    if(appear ===true){
    infoTable.classList.add("show__table__info");
    infoTable.classList.remove("close__table__info")
    appear=false;
    return true;
}else {
    infoTable.classList.add("close__table__info");
    infoTable.classList.remove("show__table__info");
    appear =true
    return false
}
})

 //Click body to close the table
body.addEventListener("click",()=>{
    if(infoTable.classList.contains("show__table__info")){
        infoTable.classList.add("close__table__info");
        infoTable.classList.remove("show__table__info");
        appear =true
    }
})

//Click the menu icon and its show the sidebar
