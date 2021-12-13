// ********** VARIABLES ************
// projects array
const projects = [
    {
        id: 1,
        title: "freeCodeCamp Portfolio",
        link: "https://freecodecamp-boitumelo-sempe-portfolio.netlify.app/",
        img: "img/fcc-min.png",
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
        link: "https://thato-technical-drawings.netlify.app/",
        img: "img/thato-min.png",
        head: "Technical Drawings Lecturer Website",
        desc: "Single page webpage made with Sass serves a link to a Youtube channel for technical drawing students and professionals.",
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
        link: "https://munch-up.netlify.app/",
        img: "img/munch-logo-min.png",
        head: "Bakery & cupcake shop webpage",
        desc: "Single page website for a cake & cupcake bakery.",
        alt: 'cakes cupcakes',
        tech: `<li>#scss</li>
                <li>#mxins</li>
                <li>#_partials</li>`, 
        imgTech: `<li>html5</li>
                <li>sass</li>
                <li>javascript</li>`,    
    },
    {
        id: 5,
        title: "front end mentor portfolio",
        link: "https://front-end-mentor-portfolio.netlify.app/",
        img: "img/fem.png",
        head: "front end web development projects",
        desc: "links to the various projects build from the figma sketches presented by the front end mentor platform",
        alt: 'img',
        tech: ` <li>orderSummaryPage</li>
                <li>#loopstudiosLandingPage</li>
                <li>#sunnySideLandingPage</li>
                <li>#calculatorApp</li>`,
        imgTech: `<li>html5</li>
                <li>javascript</li>
                <li>sass</li>`,
    },
    {
        id: 4,
        title: "javascript portfolio",
        link: "https://javascript-portfolio-boitumelo-sempe.netlify.app/",
        img: "img/js-min.png",
        head: "javascript projects portfolio",
        desc: "page featuring links to my javascript tutorial repositories",
        alt: 'javascript',
        tech: `<li>#vanillaJavascript</li>
                <li>#es6</li>
                <li>#algorithms</li>`,
        imgTech: `<li>javascript</li>`,
    },
    
    {
        id: 6,
        title: "Planet Animation",
        link: "https://shakexsempe.github.io/Planet-Animation/",
        img: "img/planets-min.png",
        head: "Advanced CSS3 Tutorial",
        desc: "CSS animations and positioning tutorial project",
        alt: 'earth moon',
        tech: `<li>#animations</li>
                <li>#transitions</li>
                <li>#flexBox</li>`,
        imgTech: `<li>html5</li>
                <li>css3</li>`,
    },
    {
        id: 5,
        title: "Syntex - Landing Page",
        link: "https://syntex.netlify.app/",
        img: "img/syntex-min.png",
        head: "React landing page",
        desc: "react fundamentals tutorial project",
        alt: 'img',
        tech: `<li>#react js</li>
                <li>#css</li>`,
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
            <a href=${project.link} title="view project" target="_blank">
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
            
        </div>
        </div>`
    }); 
    displayProject = displayProject.join("");
    allProjects.innerHTML = displayProject;
}
