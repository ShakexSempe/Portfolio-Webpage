// ********** VARIABLES ************

// NAV LINKS
const linksContainer = document.querySelector('.links-container');
const scrollLinks = document.querySelectorAll('.scroll-link');
const navbar = document.getElementById('navbar');
const navItems = document.querySelectorAll('.header .nav-list ul li');
const topLink = document.querySelector('.top-link');

// HAMBURGER MENU
const hamburger = document.querySelector('.header #navbar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header #navbar .nav-list .links-container');
const menu_item = document.querySelectorAll('.header #navbar .nav-list ul li a');
const header = document.querySelector('header');
const navLogo = document.querySelector('.header #navbar #nav-logo');
// ABOUT SECTION
const readBtn = document.getElementById('readBtn');
let article = document.querySelector('.about-article');
  article.classList.remove('active');
// DATE
const date = document.querySelector('.date');
console.log(date);
// INTERSECTION OBSERVER
const brand = document.querySelector('.brand');
const sectionOne = document.querySelector('.welcome-section');
const sectionOneOptions = {
    rootMargin: "-300px 0px 0px 0px"
};

// ********** END OF VARIABLES ************

// ********** INTERSECTION OBSERVER ************
const sectionOneObserver = new IntersectionObserver(
  function(
      entries, sectionOneObserver
  ) {
      entries.forEach(entry => {
          if(!entry.isIntersecting) {
              // header.style.backgroundColor = "red";
              header.classList.add("header-io");
              hamburger.classList.remove("no-pulse");
          } else {
              header.classList.remove("header-io");
              hamburger.classList.add("no-pulse");
            
          }
      });
  }, sectionOneOptions
);

sectionOneObserver.observe(sectionOne);


// BACK TO TOP
document.addEventListener("scroll", () => {
  // scroll variables
const scroll_position = window.scrollY;
const scrollHeight = window.pageYOffset;
// top-link ()
  if(scrollHeight > 200) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  };
});
// end of background and back-to-top link

// HAMBURGER SELECT
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
  if(!header.classList.contains("header-io")){
    header.classList.add("header-io");
  }
});
// end of hamburger select
// SCROLL TO LINK
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
//  REMOVE HAMBURGER AFTER CLICK 
menu_item.forEach((item) => {
  item.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
  });
});
// NAV LOGO CLICK
navLogo.addEventListener("click", () => {
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
})
//  end of remove hamburger after click 
//  PROGRESS BAR
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

//  SKILLS DROPDOWN
/*  When the user clicks on the button,
toggle between hiding and showing the dropdown content */
dropdown = () => {
  document.getElementById("myDropdown").classList.toggle("show");
}
const dropbtn = document.querySelector('.dropbtn');
dropbtn.addEventListener("click", () => {
  dropbtn.classList.toggle("active");
})
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