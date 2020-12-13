//Hamburger Menu
const hamburger = document.querySelector('.header #navbar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header #navbar .nav-list ul');
const menu_item = document.querySelectorAll('.header #navbar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

//nav transparency on scroll
document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 100) {
        header.style.backgroundColor = "#29323c";
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

//remove hamburger after 
menu_item.forEach((item) =>{
    item.addEventListener('click', ()=> {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

//progress bar
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
/*end of progress bar*/