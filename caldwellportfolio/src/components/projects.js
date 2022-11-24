import './projects.css';
import flyguysc from './flyguysc.png';
import pokesc from './pokesc.png';

function Projects() {
  return (
    <div>
  <h1 className="project-header"> Projects </h1>
<div className="card">
  <div>
    <img src = {pokesc} className="cards" /><br></br>
 <a className="project-title" href="https://github.com/Awell05/Flyguys" > Pokemon Game Center </a>

 </div>
 <div>
  <img src = {flyguysc} className="cards"/><br></br>
  <a className="project-title" href= "https://github.com/Awell05/PokeGameCenter"> FlyGuys</a>
 
  </div>
</div>
</div>
  )
}

export default Projects;