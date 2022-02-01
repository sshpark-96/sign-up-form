import "./css/default.css";
import "./css/index.css";
import image from "./img/Not Sketchy-logos_white.png"

console.log("Hello World");

document.querySelector(".logo").setAttribute("src", image);

document.querySelectorAll('.pwd').forEach(pwd =>{
    pwd.addEventListener('keyup', ()=>{
        if(document.querySelector("#confirm_pwd").value == ""){
            document.querySelector("#match_confirm").innerHTML = "";
            document.querySelector("#confirm_pwd").setCustomValidity("")
        }
        else if(document.querySelector("#user_pwd").value === document.querySelector("#confirm_pwd").value){
            document.querySelector("#match_confirm").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>';
            document.querySelector("#confirm_pwd").setCustomValidity("")
        } else {
            document.querySelector("#match_confirm").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>';
            document.querySelector("#confirm_pwd").setCustomValidity("Passwords do not match. Please check again.")
        }
    });
});
    
