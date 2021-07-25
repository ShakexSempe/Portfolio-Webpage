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
        tech: `<li>#appliedVisualDesign</li>
                <li>#css3</li>
                <li>#semantic markup</li>`,
    },
    {
        id: 2,
        title: "Thato Technical Drawings",
        link: "https://shakexsempe.github.io/thato-tech-drawings/",
        img: "img/thato.bmp",
        head: "Technical Drawings Lecturer Website",
        desc: "Made with Scss, this single page webpage serves a link to a Youtube channel for technical drawing students and professionals.",
        alt: 'technical drawing',
        tech: `<li>#scss</li>
                <li>#mixins</li>
                <li>#_partials</li>`,
    },
    {id: 3,
        title: "Munch Up&trade;",
        link: "https://shakexsempe.github.io/munch-up/",
        img: "img/munch-logo.jpg",
        head: "Bakery & cupcake shop webpage",
        desc: "Single page website for a cake & cupcake bakery.",
        alt: 'cakes',
        tech: `<li>#scss</li>
                <li>#mxins</li>
                <li>#_partials</li>`,     
    },
    {
        id: 4,
        title: "Valoir &trade;",
        link: "https://valoir.netlify.app/",
        img: "img/valoir.bmp",
        head: "CSS 3 showcase project",
        desc: "Sticky Parallax scrolling effect project",
        alt: 'img',
        tech: `<li>#parallax</li>
                <li>#css3</li>
                <li>scss</li>`,
    },
    {
        id: 5,
        title: "Planet Animation",
        link: "https://shakexsempe.github.io/Planet-Animation/",
        img: "img/planets.bmp",
        head: "Advanced CSS3 Tutorial",
        desc: "CSS animations and positioning tutorial project",
        alt: 'earth moon',
        tech: `<li>#animations</li>
                <li>#css3</li>
                <li>flexBox</li>`,
    },
    {
        id: 6,
        title: "javascript projects",
        link: "https://shakexsempe.github.io/javascript-projects-portfolio/",
        img: "img/projects.bmp",
        head: "javascript portfolio page",
        desc: "page featuring links to my javascript tutorial repositories",
        alt: 'javascript',
        tech: `<li>#vanillaJavascript</li>
                <li>#es6</li>
                <li>#algorithms</li>`,
    },
    {
        id: 7,
        title: "responsive cards",
        link: "https://shakexsempe.github.io/responsive-cards/",
        img: "img/cards.bmp",
        head: "Responsive Web Design",
        desc: "A mobile-first grid layout page featuring modern hatchbacks",
        alt: 'css3',
        tech: `<li>#responsiveWebDesign</li>
                <li>#data-set</li>
                <li>#cssGrid</li>`,
    },
];

const allProjects = document.querySelector('.all-projects');

window.addEventListener('DOMContentLoaded', () => {
    displayProjects(projects);
});

displayProjects = (projectsItems) => {
    let displayProject = projectsItems.map(project => {
        return `<div class="project-item">
        <div class="project-tile">
            <h1>${project.title}</h1>
            <a href=${project.link} target="_blank">
                <i class="fas fa-link"></i>
                <h2>${project.head}</h2>
                <p>
                    ${project.desc}
                </p>
            </a>
            <div class="tech-list">
                <ul>${project.tech}<ul>
            </div>
            </div>
            <div class="project-img">
            <img src=${project.img} alt="img" />
            </div>
        </div>`
    }); 
    displayProject = displayProject.join("");
    allProjects.innerHTML = displayProject;
}
