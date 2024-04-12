const navlinks=document.querySelectorAll(".navlinks")
navlinks.forEach(navlink=>{
    navlink.addEventListener("click",()=>{
        document.querySelector(".active")?.classList.remove("active");
        navlink.classList.add('active');
        
    })
})

const bar=document.getElementById("mobile");
const close=document.getElementById("close");
let nav=document.getElementById("navbar");
if(bar){
    bar.addEventListener("click",()=>{
       nav.classList.add("actives")
    })
}
if(close){
    close.addEventListener("click",()=>{
        nav.classList.remove("actives")
    })
}

