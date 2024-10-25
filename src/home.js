import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Button from 'react-bootstrap/Button';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Form, Link } from "react-router-dom";
import './home.css';
import myImg from './images/myPicture.jpg';
import CopyRight from "./copyRight";

export function Navs(){
  let theme_switch=document.getElementById('theme-switch');
  let darkmode = localStorage.getItem('darkmode');


  function lighting(){
      document.body.classList.add('darkmode')
      localStorage.setItem('darkmode','active');
  }


  function darking(){
      document.body.classList.remove('darkmode');
      localStorage.setItem('darkmode', null);
  }

  if(darkmode === 'active') lighting();

  return(
    <Navbar expand="lg" className="justify-content-between">
      <Container fluid>
        <Navbar.Brand href="#" className="a2">&lt; MohamedA-Elhamied /&gt;</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/" style={{textDecoration:'none'}} className="a1">
              Home
            </Link>
            <Link to="/about" style={{textDecoration:'none'}} className="a1">
              About
            </Link>
            <Link to="/projects" style={{textDecoration:'none'}} className="a1">
              Projects
            </Link>
            <Link to="/experience" style={{textDecoration:'none'}} className="a1">
              Experience
            </Link>
          </Nav>
          <Nav>
            <button id="theme-switch" onClick={()=>{
                darkmode = localStorage.getItem('darkmode');
                darkmode !== "active" ? lighting() : darking();
            }}>
              <i class="fa-solid fa-moon"></i>
              <i class="fa-regular fa-sun"></i>
            </button>
            <Link to="/contact" style={{color: '#f6f6f6f6' , textDecoration: 'none'}}>
              <Button className="btnn" style={{width:'100%',padding:'10px'}}>
                Contact
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

function Content(){
  return(
    <div class="homing">
      <div className="img">
        <div className="rotation pro238">
          <img
            src={myImg}
            alt=""
            width="50%"
            height="50%"
            id="img2projecT"
          />
        </div>
      </div>
      <p>
        Hello
        <i
          className="fa-regular fa-hand fa-rotate-by"
          style={{rotate: "310deg"}}
        ></i>
        I'M <br />
        <b className="ffirst">
          <span className="pro243">M</span>
          <span className="pro243">o</span>
          <span className="pro243">h</span>
          <span className="pro243">a</span>
          <span className="pro243">m</span>
          <span className="pro243">e</span>
          <span className="pro243">d</span>
        </b>
        <b className="ssecond ms-2">
          <span className="pro243">A</span>
          <span className="pro243">b</span>
          <span className="pro243">d</span>
          <span className="pro243">e</span>
          <span className="pro243">l</span>
          <span className="pro243">-</span>
          <span className="pro243">h</span>
          <span className="pro243">a</span>
          <span className="pro243">m</span>
          <span className="pro243">i</span>
          <span className="pro243">e</span>
          <span className="pro243">d</span>
        </b>
        <br />
        I'm Front-End React developer.
      </p>
      <div className="socIal text-center">
        <a
          href="https://www.facebook.com/profile.php?id=100049063578464&mibextid=ZbWKwL"
        >
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="https://wa.me/+201120203912">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/mohamed-abdel-hameed-6b36732b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/mohamedabdelhameid">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="http://t.me/mo71_med">
          <i className="fa-brands fa-telegram"></i>
        </a>
      </div>
    </div>
  )
}


function Home(){
  return(
    <>



    <Container>
      <Navs />
      <div className="momo">
      <Content />
      </div>
      {/* <CopyRight /> */}
    </Container>
    </>
  )
}

export default Home;