import { useParams } from 'react-router-dom';
import BtnGitHub from '../../components/btnGitHub/BtnGitHub.js';
import { projects } from '../../helpers/projectsList.js';

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects[id];

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>
          <img
            src={project.imgBig}
            alt={project.title}
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>Skills: {project.skills}</p>
          </div>

          {project.gitHubLink && <BtnGitHub link="http://github.com" />}
        </div>
      </div>
    </main>
  );
};

export default ProjectPage;
