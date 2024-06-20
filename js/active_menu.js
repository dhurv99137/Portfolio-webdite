let menuLi = document.querySelectorAll("header ul li a"); 
let section = document.querySelectorAll("section");

function activeMenu() {
    let lem = section.length;
    while (--lem && window.scrollY + 97 < section[lem].offsetTop) { }
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[lem].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);
