const infoImg  =document.querySelector("#info__img");
const infoTable =document.querySelector(".info__table")
infoImg.addEventListener("click",()=>{
    infoTable.classList.toggle("show__table__info")
})