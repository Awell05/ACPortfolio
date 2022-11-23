import './projects.css';
import flyguysc from './flyguysc.png';
import pokesc from './pokesc.png';

function Projects() {
return (
<div className="card">
  <div>
    <img src = {pokesc} className="cards" />
 <a className="project-title" href="https://github.com/Awell05/Flyguys" > Pokemon Game Center </a>
 <p className="project-para"> An interactive site to find your favorite pokemon. Created using Javascript.</p>
 </div>
 <div>
  <img src = {flyguysc} className="cards"/>
  <a className="project-title" href= "https://github.com/Awell05/PokeGameCenter"> FlyGuys</a>
  <p className="project-para"> A social app for drone enthusiast to link their drone images and post meetups to connect with other drone users. Created using javascript, handlebars, mySQL, express, and nodejs. </p>
  </div>
</div>
)
}

export default Projects;