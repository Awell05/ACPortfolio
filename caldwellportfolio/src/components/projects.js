import './projects.css';
import flyguysc from './flyguysc.png';
import pokesc from './pokesc.png';

function Projects() {
return (
<div className="card">
  <div>
    <img src = {pokesc} className="cards" />
 <a href="https://github.com/Awell05/Flyguys" > Pokemon Game Center </a>
 <p> An interactive site to find your favorite pokemon. Created using vanila Javascript.</p>
 </div>
 <div>
  <img src = {flyguysc} className="cards"/>
  <a href= "https://github.com/Awell05/PokeGameCenter"> FlyGuys</a>
  <p> A social app for drone enthusiast to link their drone images and post meetups to connect with other drone users. This web application uses vanilla javascript, handlebars, mySQL, express, and nodejs. </p>
  </div>
</div>
)
}

export default Projects;