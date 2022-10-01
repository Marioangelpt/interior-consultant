const menu = document.getElementsByClassName("menu")[0]

const nav = document.getElementsByClassName("menu__vertical")[0]

const close = document.getElementsByClassName("close")[0]

menu.addEventListener("click", ()=>{
    nav.classList.toggle("active")
    nav.style.opacity = 0
    setTimeout(()=>{
	nav.style.opacity = 1;
    }, 100)
})

close.addEventListener("click",()=>{
    setTimeout(()=>{
	nav.style.opacity = 0;
	console.log("hello")
    },100)
    setTimeout(()=>{
	nav.classList.toggle("active")
    }, 200)
})
