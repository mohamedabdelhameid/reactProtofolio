import { Container, Row } from "react-bootstrap";
import "./copyright.css";



function CopyRight(){
  return(
    <Container className="DivmAin">
      <Row style={{fontSize:"25px",width:'100%'}}>
    <p style={{textAlign: "center"}}>Designed By Eng : 
          <span className="a2name">
          <a href="https://wa.me/+201120203912" target="blank" style={{textDecoration:"none",color:"rgba(107, 3, 107, 0.859)"}}> MohamedA.Elhameid</a>.
          </span>
          &copy; 
          <span className="spanTeXt">Portfolio</span> . All right reserved in 2024.
        </p>
      </Row>
    </Container>
  )
}

export default CopyRight;