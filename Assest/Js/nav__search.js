const search__icon = document.querySelector(".search__icon")
let searching  = true;
const navbar__input = document.querySelector("#search__input")
const navSearch = document.querySelector(".navbar__search")

function submit(){
    if(searching){
        navSearch.classList.add("show__search");
        navSearch.classList.remove("close__search")
        searching =false;
        navbar__input.focus()
    }else {
        navSearch.classList.add("close__search");
        navSearch.classList.remove("show__search")
        searching=true;
    }
}
search__icon.addEventListener("click",submit)

navSearch.addEventListener("keydown",(e)=>{
    if(e.keyCode ===13){
        submit()
        e.preventDefault();
        // appear =false;
        // submit();
    }   
})

