// ********** VARIABLES ************
// projects array
const projects = [
    {
        id: 1,
        title: "freeCodeCamp Portfolio",
        link: "https://shakexsempe.github.io/FreeCodeCamp-portfolio/",
        img: "img/fcc.png",
        head: "FreeCodeCamp Responsive Projects Portfolio",
        desc: "",
        alt: 'freecodecamp',
        tech: `<li>#ResponsiveWebDesign</li>`,
        imgTech: `<li>html5</li>
                <li>SASS</li>`,
    },
    {
        id: 2,
        title: "Thato Technical Drawings",
        link: "https://shakexsempe.github.io/thato-tech-drawings/",
        img: "img/thato.png",
        head: "Technical Drawings Lecturer Website",
        desc: "Made with Scss, this single page webpage serves a link to a Youtube channel for technical drawing students and professionals.",
        alt: 'technical drawing',
        tech: `<li>#scss</li>
                <li>#mixins</li>
                <li>#_partials</li>`,
        imgTech: `<li>html5</li>
                <li>sass</li>
                <li>javascript</li>`,
    },
    {
        id: 3,
        title: "Munch Up&trade;",
        link: "https://shakexsempe.github.io/munch-up/",
        img: "img/munch-logo.png",
        head: "Bakery & cupcake shop webpage",
        desc: "Single page website for a cake & cupcake bakery.",
        alt: 'cakes',
        tech: `<li>#scss</li>
                <li>#mxins</li>
                <li>#_partials</li>`, 
        imgTech: `<li>html5</li>
                <li>sass</li>
                <li>javascript</li>`,    
    },
    {
        id: 4,
        title: "javascript portfolio",
        link: "https://shakexsempe.github.io/javascript-projects-portfolio/",
        img: "img/js.png",
        head: "javascript projects portfolio",
        desc: "page featuring links to my javascript tutorial repositories",
        alt: 'javascript',
        tech: `<li>#vanillaJavascript</li>
                <li>#es6</li>
                <li>#algorithms</li>`,
        imgTech: `<li>javascript</li>`,
    },
    {
        id: 5,
        title: "Valoir &trade;",
        link: "https://valoir.netlify.app/",
        img: "img/valoir.png",
        head: "CSS 3 showcase project",
        desc: "Sticky Parallax scrolling effect project",
        alt: 'img',
        tech: `<li>#parallax</li>
                <li>#css3</li>
                <li>#scss</li>`,
        imgTech: `<li>html5</li>
                <li>parallax</li>
                <li>sass</li>`,
    },
    {
        id: 6,
        title: "Planet Animation",
        link: "https://shakexsempe.github.io/Planet-Animation/",
        img: "img/planets.png",
        head: "Advanced CSS3 Tutorial",
        desc: "CSS animations and positioning tutorial project",
        alt: 'earth moon',
        tech: `<li>#animations</li>
                <li>#transitions</li>
                <li>#flexBox</li>`,
        imgTech: `<li>html5</li>
                <li>css3</li>`,
    },
    
];
// projects container
const allProjects = document.querySelector('.all-projects');

// ********** EVENT LISTENERS ************
window.addEventListener('DOMContentLoaded', () => {
    displayProjects(projects);
});

// ********** FUNCTIONS ************
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
            <img src=${project.img} alt="img" loading="lazy"/>
            <div class="project-img-desc">
                <ul>${project.imgTech}<ul>
            </div>
        </div>
        </div>`
    }); 
    displayProject = displayProject.join("");
    allProjects.innerHTML = displayProject;
}
