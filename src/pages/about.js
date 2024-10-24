import { Container } from "react-bootstrap";
import aboutImg from '../images/R1light.jpg';
import { Navs } from "../home";
import CopyRight from "../copyRight";
import './about.css';

function About(){
  return(
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
            <b> mohamed abdel-hameid</b> from Sohag.
            <br />
            I learned HTML, CSS, JAVASCRIPT, BOOTSTRAP and REACT.JS in Front-End
            deploma in
            <b>Code Spark</b>
            company.
            <br />
            I'm in level two in 
            <b>
              <a
                href="https://www.facebook.com/profile.php?id=100063863600500&mibextid=ZbWKwL"
                className="codeSparkCompany"
                id="FCAI"
                > faculty in computer and artificial intelligence </a>
            </b>
            in sohag university.
          </p>
        </div>
      </div>
      <CopyRight />
    </Container>
  </>
  )
}

export default About;