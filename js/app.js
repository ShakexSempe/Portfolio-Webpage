// ********** smooth scroll ************
// select links
const linksContainer = document.querySelector('.links-container');
const scrollLinks = document.querySelectorAll('.scroll-link');
const navbar = document.getElementById('navbar');

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

    let position = element.offsetTop - navHeight;


    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});

/* cta scroll to about */
// const cta = document.getElementById('cta-header');
// cta.addEventListener("click", (e) => {
//   const id = e.currentTarget.getAttribute('href').slice(1);
//   console.log(id)

//   const element = document.getElementById(id);
//   const navHeight = navbar.getBoundingClientRect().height;

//   let position = element.offsetTop - navHeight;
//   console.log(position)

//   window.scrollTo({
//     left: 0,
//     top: position,
// });


// });
/* end of cta scroll to about */


//Hamburger Menu
const hamburger = document.querySelector('.header #navbar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header #navbar .nav-list ul');
const menu_item = document.querySelectorAll('.header #navbar .nav-list ul li a');
const header = document.querySelector('.header.container');
const avi = document.querySelector('.header #navbar .nav-list .nav-avi img');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});

//nav transparency on scroll
document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  const topLink = document.querySelector('.top-link');
  const scrollHeight = window.pageYOffset;

  if (scroll_position > 100) {
    header.style.backgroundColor = "#29323c";
  } else {
    header.style.backgroundColor = 'transparent';
  };

  if (scrollHeight > 700) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});

//  remove hamburger after click 
menu_item.forEach((item) => {
  item.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
  });
});
//  end of remove hamburger after click 

//  remove sidebar after click on img 
avi.addEventListener("click", () => {
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
})
//  end of remove sidebar after click on img 


//  progress bar
//  When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction()
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
/*  end of progress bar*/




/*  skills dropdown*/
/*  When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

//  Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
/*  end of skills dropdown*/

/*  bootsrap scrollbar*/
$(function () {
  $("#content-1").mCustomScrollbar({
    theme: "dark-thin"
  });
});
/*  end of bootsrap scrollbar*/

/*  set footer date*/
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
/*  end of set footer date*/