var menuIcon = document.querySelector(".fa-bars-staggered");
var sidebar = document.querySelector(".sidebar");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
}