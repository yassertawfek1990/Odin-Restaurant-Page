import './styles.css';
import home from './home.js'
import { menu } from './menu.js';
import { contact } from './contact.js';


home()
const buts = document.querySelectorAll("button")
buts.forEach(b=>{
    b.addEventListener("click",()=>{
        console.log(b.textContent)
        document.querySelector(".HomeMain").remove()
        b.textContent == "Home"? home():b.textContent == "Menu"?menu():contact()
    })
})
