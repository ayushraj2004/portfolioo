import ProjectCard from "../otherCompo/projectcard/projectBox";
import leftside from "../../assets/leftSide.png";
import comrade from "../../assets/comrade.png.png";
import courseSelling from "../../assets/courseSelling.png";
import password from "../../assets/password.png";
import fylo from "../../assets/fylo.png";
import EassyBank from "../../assets/EassyBank.png";

function Project() {
  const Allproject = [
    {
      name: "Stock Price Prediction using Time Series Data",
      about:
        "This project aims to predict stock prices using historical time series data.",
      tech: "REACTJS, NODEJS, EXPRESSJS, MONGODB, ML ALGO,NUMPY,PANDAS",
      url: "https://github.com/ayushraj2004/Stock-Price-Prediction",
      status: ``,
      backgroundImage: comrade,
    },
    {
      name: "Stock Price Prediction using Time Series Data",
      about:
        "This project aims to predict stock prices using historical time series data.",
      tech: "REACTJS, NODEJS, EXPRESSJS, MONGODB, ML ALGO,NUMPY,PANDAS",
      url: "https://github.com/ayushraj2004/Stock-Price-Prediction",
      status: ``,
      backgroundImage: comrade,
    },
    {
      name: "Hybrid-Generative-AI-Model",
      about:
        "Hybrid Generative AI Model Combining Variational Autoencoders and Generative Adversarial Networks  ",
      tech: "Python,PyTorch, TorchVision, Variational FPDF, Matplotlib, GAN  ",
      url: "https://github.com/ayushraj2004/Hybrid-Generative-AI-Model",
      status: "",
      backgroundImage: courseSelling,
    },
    {
      name: "Store Management System",
      about:
        "Retail Store Management System Overview The Retail Store Management System is a comprehensive solution",
      tech: "Node.js, Express.js Frontend: EJS, CSS, Bootstrap Database: MongoDB Data Visualization ",
      url: "https://github.com/ayushraj2004/Store-Management-System",
      backgroundImage: password,
    },
    {
      name: "Carent-ReactJs",
      about:
        "Carrent is a  langing page for a company  i made this page complete responsive for mobile devics",
      tech: "reactjs,css, html,javascript , MediaQuery",
      url: "https://acarrent.netlify.app",
      backgroundImage: fylo,
    },
    {
      name: "Easy bank landing page",
      about:
        "This is a landing page for Easy bank , this is a complete responsive landing page   ",
      tech: "Html, css, javascript",
      url: "",
      backgroundImage: EassyBank,
    },
  ];

  return (
    <div className="rightside project " id="project">
      <h1>List of Project</h1>
      <div className="projectList">
        {Allproject.map((proj) => {
          return (
            <ProjectCard
              heading={proj.name}
              about={proj.about}
              tech={proj.tech}
              url={proj.url}
              key={proj.name}
              status={proj.status}
              ProjectImage={proj.backgroundImage}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Project;
