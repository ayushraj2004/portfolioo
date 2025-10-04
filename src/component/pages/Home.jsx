import { NavLink } from "react-router-dom";
import icon from "../../assets/developer.png"
import rahulgurjar from "../../assets/A-R.pdf.pdf";
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
            My Self <span>Ayush raj</span> <br />I am a AI/ML Engineer
          </h1>
          <div>
            <button id="getInTouch">
              <li>
                <a href="#project">projects</a>
              </li>
            </button>
            <button id="ResumeDownload">
              <a href={rahulgurjar} download="A-R.pdf">
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
