const projects = [
    {
        id: 1,
        title: "tribute page",
        link: "https://shakexsempe.github.io/lewis-hamilton-tribute-page/",
        img: "img/lewis.bmp",
        head: "FreeCodeCamp Responsive Web Design Project #1",
        desc:`<strike>Six</strike> Seven time Formula One World Champion Lewis Hamilton tribute
        page`,
        alt: 'lewis hamilton',
    },
    {
        id: 2,
        title: "Planet Animation",
        link: "https://shakexsempe.github.io/Planet-Animation/",
        img: "img/planets.bmp",
        head: "Advanced CSS3 Tutorial",
        desc: "CSS animations and positioning tutorial project",
        alt: 'earth moon',
    },
    {
        id: 3,
        title: "Thato Technical Drawings",
        link: "https://shakexsempe.github.io/thato-tech-drawings/",
        img: "img/thato.bmp",
        head: "Technical Drawings Lecturer Website",
        desc: "CSS animations and positioning tutorial project",
        alt: 'technical drawing',
    },
    {
        id: 4,
        title: "Valoir &trade;",
        link: "https://shakexsempe.github.io/valoir.netlify.app/",
        img: "img/valoir.bmp",
        head: "CSS 3 showcase project",
        desc: "Sticky Parallax scrolling effect project",
        alt: 'img',
    },
    {
        id: 5,
        title: "Munch Up&trade;",
        link: "https://shakexsempe.github.io/munch-up/",
        img: "img/munch-logo.jpg",
        head: "Bakery & cupcake shop webpage",
        desc: "Small business website for a local cake & cupcake shop",
        alt: 'cakes',
    },
    {
        id: 6,
        title: "javascript projects",
        link: "https://shakexsempe.github.io/javascript-projects-portfolio/",
        img: "img/projects.bmp",
        head: "javascript portfolio page",
        desc: "page featuring links to javascript tutorial repositories",
        alt: 'javascript',
    },

];

const allProjects = document.querySelector('.all-projects');

window.addEventListener('DOMContentLoaded', () => {
    displayProjects(projects);
});

