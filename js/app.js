// ********** VARIABLES ************

// navbar links
const linksContainer = document.querySelector('.links-container');
const scrollLinks = document.querySelectorAll('.scroll-link');
const navbar = document.getElementById('navbar');
//Hamburger Menu
const hamburger = document.querySelector('.header #navbar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header #navbar .nav-list .links-container');
const menu_item = document.querySelectorAll('.header #navbar .nav-list ul li a');
const header = document.querySelector('.header.container');
const navLogo = document.querySelector('.header #navbar #nav-logo');
// about section
const readBtn = document.getElementById('readBtn');
let article = document.querySelector('.about-article');
  article.classList.remove('active');
// date
const date = document.getElementById('date');

// ********** END OF VARIABLES ************

// ********** EVENT LISTENERS ************

// background and back-to-top link
document.addEventListener("scroll", () => {
  // scroll variables
const scroll_position = window.scrollY;
const scrollHeight = window.pageYOffset;
const topLink = document.querySelector('.top-link');
const brand = document.querySelector('.brand');
// background-color ()
// change navbar background color when screen scroll position < 30
// hidden brand logo which becomes visible when screen scroll position < 150
  if (scroll_position < 30) {
    header.style.backgroundColor = "#20262e";
    hamburger.classList.add("no-pulse");
  }
  if (scroll_position < 350) {
    brand.style.opacity = 0;
  } else {
    brand.style.opacity = 1;
    header.style.backgroundColor = "#29323c";
    hamburger.classList.remove("no-pulse");

  };
// top-link ()
  if(scrollHeight > 200) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  };
});
// end of background and back-to-top link

// hamburger select
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});
// end of hamburger select
// scroll to link
scrollLinks.forEach(link => {
  //prevent default
  link.addEventListener('click', e => {
    e.preventDefault();
    //navigate to specific spot
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    //calculate heights
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains('fixed-nav');
    // scroll to link with a offset to the height of the navbar
    let position = element.offsetTop - navHeight;

    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});
// end of scroll to link
//  remove hamburger after click 
menu_item.forEach((item) => {
  item.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
  });
});
// nav logo click
navLogo.addEventListener("click", () => {
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
})
//  end of remove hamburger after click 
//  remove sidebar after click on sidebar img 

//  end of remove sidebar after click on sidebar img
//  progress bar
//  When the user scrolls the page, execute myFunction
window.onscroll = function () {
  progressBar()
};
/*  end of progress bar*/

// ********** END OF EVENT LISTENERS ************

// ********** FUNCTIONS ************
// page progress bar
progressBar = () => {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
// end of page progress bar

//  skills dropdown
/*  When the user clicks on the button,
toggle between hiding and showing the dropdown content */
dropdown = () => {
  document.getElementById("myDropdown").classList.toggle("show");
}
//  Close the dropdown menu if the user clicks outside of it
// window.onclick = function (event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }
// end of skills dropdown

// read more
readBtn.addEventListener("click", ()=> {
  article.classList.toggle('active');
  readBtn.classList.toggle('open');
  // let body = document.querySelector('.about-body');
});

// ********** END OF FUNCTIONS ************

/*  set footer date*/
date.innerHTML = new Date().getFullYear();
/*  end of set footer date*/