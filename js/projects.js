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
        alt: 'free-code-camp profile',
        tech: `<li>#ResponsiveWebDesign</li>`,
        imgTech: `<li>html5</li>
                <li>SASS</li>`,
    },
    {
        id: 2,
        title: "React - Landing Page",
        link: "https://shakex-react-landing-page.netlify.app/",
        img: "img/react-landing-min.png",
        head: "Shakex Sempe landing page",
        desc: "react fundamentals tutorial project",
        alt: 'react landing page',
        tech: `<li>#react_js</li>
                <li>#css</li>
                <li>#cssTransitions</li>`,
    },
    {
        id: 3,
        title: "Thato Technical Drawings",
        link: "https://thato-technical-drawings.netlify.app/",
        img: "img/thato-min.png",
        head: "Technical Drawings Lecturer Website",
        desc: "Single page webpage made with Sass serves a link to a Youtube channel for technical drawing students and professionals.",
        alt: 'technical drawings tutorials',
        tech: `<li>#scss</li>
                <li>#mixins</li>
                <li>#_partials</li>`,
        imgTech: `<li>html5</li>
                <li>sass</li>
                <li>javascript</li>`,
    },
    {
        id: 4,
        title: "Munch Up&trade;",
        link: "https://munch-up.netlify.app/",
        img: "img/munch-logo-min.png",
        head: "Bakery & cupcake shop webpage",
        desc: "Single page website for a cake & cupcake bakery.",
        alt: 'bakery and cupcake shop',
        tech: `<li>#scss</li>
                <li>#mxins</li>
                <li>#_partials</li>`, 
        imgTech: `<li>html5</li>
                <li>sass</li>
                <li>javascript</li>`,    
    },
    {
        id: 5,
        title: "javascript portfolio",
        link: "https://javascript-portfolio-boitumelo-sempe.netlify.app/",
        img: "img/js-min.png",
        head: "javascript projects portfolio",
        desc: "page featuring links to my javascript tutorial repositories",
        alt: 'boitumelo shakes sempe javascript portfolio',
        tech: `<li>#vanillaJavascript</li>
                <li>#es6</li>
                <li>#algorithms</li>`,
        imgTech: `<li>javascript</li>`,
    },
    {
        id: 6,
        title: "front end mentor portfolio",
        link: "https://front-end-mentor-portfolio.netlify.app/",
        img: "img/fem.png",
        head: "front end web development projects",
        desc: "links to the various projects build from the figma sketches presented by the front end mentor platform",
        alt: 'boitumelo shakex sempe front-end-mentor profile',
        tech: ` <li>orderSummaryPage</li>
                <li>#loopstudiosLandingPage</li>
                <li>#sunnySideLandingPage</li>
                <li>#calculatorApp</li>`,
        imgTech: `<li>html5</li>
                <li>javascript</li>
                <li>sass</li>`,
    },
    {
        id: 7,
        title: "Orich Trading & Projects&trade;",
        link: "https://shakexsempe.github.io/orich-trading/",
        img: "img/orich-min.png",
        head: "Local bussiness website",
        desc: "Full website",
        alt: 'Orich Trading & Projects logo',
        tech: `<li>#HTML5</li>
                <li>#Sass</li>
                <li>#form-js</li>`,
        imgTech: `<li>scroll-js</li>`,
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
