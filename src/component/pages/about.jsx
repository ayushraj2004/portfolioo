import Social from "../otherCompo/socialmedia/social";
import Techstack from "../otherCompo/techstack";
// }
function About() {
  return (
    <div className="rightside " id="about">
      <div className="about">
        <div className="info">
          <h1>About</h1>
          <p>
            Hello , My name is Ayush Raj. I am a Passinate AI Engineer{" "}
            <br />
            from Uttar-Pradesh/india, Currently I am Bulding a RAG Stack and DSA.
          </p>
          <p>
            I love bulding a AI/ML based Projects and solving Complex problem.I
            like to make real world project and working with Team.
          </p>
        </div>
        <Techstack />
        <div className="socialmedia">
          <h1>Social media</h1>
          <Social />
        </div>
      </div>
    </div>
  );
}
export default About;
