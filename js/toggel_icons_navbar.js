let menuIcons=document.querySelector("#menu-icon")
let navlist=document.querySelector(".navlist")

menuIcons.onclick=()=>{
    menuIcons.classList.toggle("bx-x")
    navlist.classList.toggle("open")
}

window.onscroll=()=>{
    menuIcons.classList.remove("bx-x")
    navlist.classList.remove("open")
}
