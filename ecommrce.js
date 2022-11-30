
// // bar navigation
let links = document.querySelectorAll("ul li a")

links.forEach(function(ele){
    
    ele.addEventListener("click", function(){
        
        links.forEach(function(elee){
            elee.classList.remove("active")
        })
        ele.classList.add("active")
    })
    
})
// // media
let threeLine = document.getElementById("threeLine")
let nav = document.querySelector("header ul")

threeLine.addEventListener("click",function(){
    nav.style.cssText="right:0px;"
})

let x = document.getElementById("x")

x.addEventListener("click",function(){
    nav.style.cssText="right:-200px;"
})

