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
        tech: "css",
    },
    {
        id: 2,
        title: "Planet Animation",
        link: "https://shakexsempe.github.io/Planet-Animation/",
        img: "img/planets.bmp",
        head: "Advanced CSS3 Tutorial",
        desc: "CSS animations and positioning tutorial project",
        alt: 'earth moon',
        tech: 'css3',

    },
    {
        id: 3,
        title: "Thato Technical Drawings",
        link: "https://shakexsempe.github.io/thato-tech-drawings/",
        img: "img/thato.bmp",
        head: "Technical Drawings Lecturer Website",
        desc: "CSS animations and positioning tutorial project",
        alt: 'technical drawing',
        tech: 'scss',

    },
    {
        id: 4,
        title: "Valoir &trade;",
        link: "https://valoir.netlify.app/",
        img: "img/valoir.bmp",
        head: "CSS 3 showcase project",
        desc: "Sticky Parallax scrolling effect project",
        alt: 'img',
        tech: 'scss',

    },
    {
        id: 5,
        title: "Munch Up&trade;",
        link: "https://shakexsempe.github.io/munch-up/",
        img: "img/munch-logo.jpg",
        head: "Bakery & cupcake shop webpage",
        desc: "Small business website for a local cake & cupcake shop",
        alt: 'cakes',
        tech: 'scss',

    },
    {
        id: 6,
        title: "javascript projects",
        link: "https://shakexsempe.github.io/javascript-projects-portfolio/",
        img: "img/projects.bmp",
        head: "javascript portfolio page",
        desc: "page featuring links to javascript tutorial repositories",
        alt: 'javascript',
        tech: 'javascript',

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
                <p>${project.tech}<p>
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
