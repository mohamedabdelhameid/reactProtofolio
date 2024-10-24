import { Container } from "react-bootstrap";
import aboutImg from "../images/R1light.jpg";
import { Navs } from "../home";
import CopyRight from "../copyRight";
import "./about.css";

function About() {
  return (
    <>
      <Container>
        <Navs />
        <div className="container div14Grid">
          <div className="div22imagge bblockk">
            <img
              src={aboutImg}
              alt=""
              width="100%"
              className="imgIndiv22imagge"
              id="imgIndiv22imagge"
            />
          </div>
          <div className="content2sec3 bblockk2">
            <p className="pContent2sec3">
              I'm
              <b> mohamed abdel-hameid</b> .I'm in level two at Faculty of
              Computer and Artificial Intelligence, Sohag University.
              <br />I am Frontend Developer with proficient knowledge in HTML ,
              CSS and Javascript , as well as third-party libraries such as
              bootstrap, and React js.
            </p>
          </div>
        </div>
        <CopyRight />
      </Container>
    </>
  );
}

export default About;

// I am Mohamed Abdel-hamied.I'm in level two at  Faculty of Computer and Artificial Intelligence, Sohag University. I am Frontend Developer with proficient knowledge in HTML , CSS and Javascript , as well as third-party libraries such as jQuery, and React js
