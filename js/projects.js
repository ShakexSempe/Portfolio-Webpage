const projects = [
    {
        id: 1,
        title: "tribute page",
        link: "https://shakexsempe.github.io/lewis-hamilton-tribute-page/",
        img: "../img/lewis.bmp",
        head: "FreeCodeCamp Responsive Web Design Project #1",
        desc:`<strike>Six</strike> Seven time Formula One World Champion Lewis Hamilton tribute
        page`,
        alt: 'lewis hamilton',
    },
    {
        id: 2,
        title: "Planet Animation",
        link: "https://shakexsempe.github.io/Planet-Animation/",
        img: "../img/planets.bmp",
        head: "Advanced CSS3 Tutorial",
        desc: "CSS animations and positioning tutorial project",
        alt: 'earth moon',
    },
];

const allProjects = document.querySelector('.all-projects');

window.addEventListener('DOMContentLoaded', () => {
    displayProjects(projects);
});

displayProjects = (projectItems) => {
    let displayProject = projectItems.map( project => {
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
          <ul class="tech-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
          </ul>
        </div>
        <div class="project-img">
          <img src=${project.img} alt=${project.alt} />
          
        </div>
      </div>`
    });
    displayProject.join("");
    allProjects.innerHTML = displayProject;

}