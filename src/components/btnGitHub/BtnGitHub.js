import gthicon from './gitHub-black.svg';
import './btnGitHub.css';

const BtnGitHub = ({ link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-outline"
    >
      <img src={gthicon} alt="3" />
      GitHub repo
    </a>
  );
};

export default BtnGitHub;
