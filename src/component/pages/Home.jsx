import { NavLink } from "react-router-dom";
import icon from "../../assets/developer.png"
import rahulgurjar from "../../assets/RahulGurjarResume.pdf";
import { useIsMobile } from "../hooks/isMobileHook.jsx";

const add = {
  address: icon,
};
function Home() {
  const isMobile = useIsMobile();
  return (
    <div className="rightside " id="home">
      <div className="Home">
        <div className="left">
          <h2>Hi there,👋</h2>
          <h1>
            My name is <span>Rahul gurjar</span> <br />I am a Full-Stack
            Developer
          </h1>
          <div>
            <button id="getInTouch">
              <li>
                {isMobile ? (
                  <a href="#project">projects</a>
                ) : (
                  <NavLink to="/project">Projects</NavLink>
                )}
              </li>
            </button>
            <button id="ResumeDownload">
              <a href={rahulgurjar} download="Rahul_Gurjar_Resume">
                Download Resume
              </a>
            </button>
          </div>
        </div>
        <div className="right">
          <img src={add.address} className="devloper" alt="devloper rahul" />
        </div>
      </div>
    </div>
  );
}
export default Home;
