import ProjectCard from '../../components/ProgectCard/ProjectCard.jsx';
import { projects } from '../../helpers/projectsList.js';

import './ProjectsPage.css';

const ProjectsPage = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projects.map((project, index) => {
            return (
              <ProjectCard
                key={project.id}
                title={project.title}
                img={project.img}
                index={index}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default ProjectsPage;
