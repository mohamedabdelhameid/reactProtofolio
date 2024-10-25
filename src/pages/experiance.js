import ProgressBar from 'react-bootstrap/ProgressBar';
import { Navs } from "../home";
import CopyRight from "../copyRight";
import { Container } from 'react-bootstrap';
import './experience.css';

function WithLabelExample() {
  return(
    <div className="container griddddd">
        <div className="div2">
          <h1>
            <i className="fa-brands fa-html5"></i>
            HTML
          </h1>
          <span className="back">
            <span className="fronthtml"></span>
          </span>
        </div>
        <div className="div2">
          <h1>
            <i className="fa-brands fa-css3-alt"></i>
            CSS
          </h1>
          <span className="back">
            <span className="frontcss"></span>
          </span>
        </div>
        <div className="div2">
          <h1>
            <i className="fa-brands fa-js"></i>
            JAVASCRIPT
          </h1>
          <span className="back">
            <span className="frontjs"></span>
          </span>
        </div>
        <div className="div2">
          <h1>
            <i className="fa-brands fa-bootstrap"></i>
            BOOTSTRAP
          </h1>
          <span className="back">
            <span className="frontbs"></span>
          </span>
        </div>
        <div className="div2">
          <h1>
            <i className="fa-brands fa-react"></i>
            REACT
          </h1>
          <span className="back">
            <span className="frontR"></span>
          </span>
        </div>
      </div>
  )
}



function Experience(){
  return(
    <Container>
      <Navs />
      <WithLabelExample />
      {/* <CopyRight /> */}
    </Container>
  )
}

export default Experience;