// ********** VARIABLES ************
// projects array
const projects = [
    {
        id: 1,
        title: "freeCodeCamp Portfolio",
        link: "https://freecodecamp-boitumelo-sempe-portfolio.netlify.app/",
        img: "img/fcc-min.png",
        head: "FreeCodeCamp Certificates",
        desc: `Responsive Web Design.<br/>Front End Development Libraries.`,
        alt: 'free-code-camp profile',
        tech: `<li>#ResponsiveWebDesign</li>`,
        imgTech: `<li>html5</li>
                <li>SASS</li>`,
    },
    {
        id: 5,
        title: "javascript portfolio",
        link: "https://javascript-portfolio-boitumelo-sempe.netlify.app/",
        img: "img/js-min.png",
        head: "vanilla javascript projects",
        desc: "Page featuring links to my javascript tutorial repositories presented by John Smilga",
        alt: 'boitumelo shakes sempe javascript portfolio',
        tech: `<li>#vanillaJavascript</li>
                <li>#es6</li>
                <li>#algorithms</li>`,
        imgTech: `<li>javascript</li>`,
    },
    {
        id: 6,
        title: "front end mentor",
        link: "https://front-end-mentor-portfolio.netlify.app/",
        img: "img/fem.png",
        head: "front end projects",
        desc: "Links to the various projects build from the figma sketches presented by the front end mentor platform",
        alt: 'boitumelo shakex sempe front-end-mentor profile',
        tech: ` <li>#orderSummaryPage</li>
                <li>#loopstudiosLandingPage</li>
                <li>#sunnySideLandingPage</li>
                <li>#calculatorApp</li>`,
        imgTech: `<li>html5</li>
                <li>javascript</li>
                <li>sass</li>`,
    },
    // {
    //     id: 2,
    //     title: "React - Landing Page",
    //     link: "https://shakex-react-landing-page.netlify.app/",
    //     img: "img/react-landing-min.png",
    //     head: "Shakex Sempe landing page",
    //     desc: "react fundamentals tutorial project",
    //     alt: 'react landing page',
    //     tech: `<li>#react_js</li>
    //             <li>#css</li>
    //             <li>#cssTransitions</li>`,
    // },
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
                <h2>${project.head}</h2>
                <p>
                    ${project.desc}
                </p>
                <i class="fas fa-link"></i>
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
