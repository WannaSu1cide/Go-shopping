const infoImg  =document.querySelector("#info__img");
const infoTable =document.querySelector(".info__table")
const body = document.querySelector(".body");
let username = document.querySelector(".table__username");
const emailUser = document.querySelector(".userEmail")
const loggout = document.querySelector(".logout");

loggout.onclick = function (){
    window.location.href = "/index.html"
}   

let user = localStorage.getItem("user");
let UserJson = JSON.parse(user);
username.innerHTML = UserJson[0]["username"]
emailUser.innerHTML = UserJson[0]["email"]
function changeTheClassWhenCLickAgain(input, classList, removeclassList) {
    if (input.classList.contains(classList)) {
      input.classList.remove(classList);
      input.classList.add(removeclassList);
    } else {
      input.classList.add(classList);
      input.classList.remove(removeclassList);
    }
}
  infoImg.addEventListener("click", function() {
   changeTheClassWhenCLickAgain(infoTable, "show__table__info", "close__table__info");
}
  );
 //Click body to close the table
body.addEventListener("click",()=>{
        if(infoTable.classList.contains("show__table__info")){
            infoTable.classList.remove("show__table__info")
        }
}
)
    