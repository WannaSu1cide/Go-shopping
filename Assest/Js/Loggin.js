const loggin__email = document.querySelector(".Loggin__Email");
const loggin__password = document.querySelector(".loggin__password");
const btn  = document.querySelector(".loggin__submit")
const email__Error = document.querySelector(".control__loggin .small")
const password__Error = document.querySelector(".small2")
const user = localStorage.getItem("user");    
const json = JSON.parse(user);

        var Email = json.map(function(x){
                return x.email;
            })    
        var passwordInLocal =json.map(function(pass){
                return pass.password.trim();
        })
        function showLogginError(){        
        for (let i=0;i<=Email.length;i++){
        if(loggin__email.value !== Email[i]){
                email__Error.innerHTML = "Wrong message";
                loggin__email.value = "";
                return false;
        }else {
                email__Error.style.color = "lightgreen"
                email__Error.innerHTML = "Success";
                return true;
        }
}}
        function checkPasswordWrong(){
                for(let i=0;i<= json.length;i++){
                if(loggin__password.value !== passwordInLocal[i]){
                    password__Error.innerHTML = "Wrong Password";
               
                    loggin__password.value = "";
                 return false;
                
        }else {
                password__Error.style.color = "lightgreen"
                password__Error.innerHTML = "Success";
               return true;
        }

        }}


        function checkSuccessAll(){
                if(checkPasswordWrong() === true && showLogginError() === true){
                       window.location.href ="/view/Page.html"
                }else {
                        console.log("fail")
                }
        }
btn.addEventListener("click",()=>{
        showLogginError();
        checkPasswordWrong();
        checkSuccessAll();

   
})