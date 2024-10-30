import { Navs } from "../home";
import CopyRight from "../copyRight";
import { Container } from "react-bootstrap";
import './projects.css';
import imgpro1 from '../images/Restoran.png';
import imgpro2 from '../images/react.png';
import imgpro3 from '../images/Visper.png';
import imgpro4 from '../images/tammyFood.png';
import imgpro5 from '../images/protfolio.png';
import imgpro6 from '../images/crudPoster.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { A11y, Navigation, Scrollbar,Pagination } from "swiper/modules";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React, { useEffect, useState } from "react";
import restornVideo from '../videos/restornProject.mp4';
import vesperrVideo from '../videos/vesperrProject.mp4';
import TammyProject from '../videos/tammyProject.mp4';
import ShoppingProject from '../videos/shoppingProject.mp4';
import portfolioProject from '../videos/portfolioProject.mp4';
import CRUDProject from '../videos/CRUD.mp4';

function Swiperr(){
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
  }, []);
  let m;
  if(width > 1006){
    m = 3;
  }
  else if(width >=768 && width <= 1006){
    m = 2;
  }
  else if(width <= 767){
    m = 1;
  }
  // else if(width <= 767){
  //   m = 1;
  // }
  // else if(width <= 728){m = }
  return(
    <Swiper 
      // spaceBetween={50}
      // slidesPerView={2}
      modules={[Navigation, Pagination, Scrollbar, A11y]} 
      spaceBetween={50} 
      slidesPerView={m} 
      navigation 
      pagination={{ clickable: true }} 
      scrollbar={{ draggable: true }} 
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)} 
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
      <div className="divNum1 Res pro1">
          <div className="Div2IMAGge">
            {/* <img
              src={imgpro1}
              alt=""
              width="100%"
              className="imgghovver"
            /> */}
        <video src={restornVideo} poster={imgpro1} alt="" width='100%' className="imgghovver" controls/>
          </div>
          <div className="divhiddenShowen">
            <p>
              Restoran Project. I've got first place in design from code spark
              company.
              <br />
              <a
                href="https://mohamedabdelhameid.github.io/newRestoran"
                className="resLink"
                >Restoran </a
              >
              using HTML and CSS.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div class="divNum1 Vep pro23">
          <div className="Div2IMAGge">
            {/* <img src={imgpro2} alt="" width="100%" height="100%" class="imgghovver" /> */}
            <video src={ShoppingProject} poster={imgpro2} alt="" width='100%' className="imgghovver" controls/>
          </div>
          <div className="divhiddenShowen">
            <p>
              Quick Shopping Project. I design it to practice on React.js .
              <br />
              <a
                href="https://quick-shopping-lemon.vercel.app"
                className="resLink"
                >Quick Shopping </a
              >
              using React, react-bootstrap and Browser Router.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="divNum1 Vis pro23">
          <div className="Div2IMAGge">
            {/* <img
              src={imgpro3}
              alt=""
              width="100%"
              height= "100%"
              className="imgghovver"
            /> */}
            <video src={vesperrVideo}  poster={imgpro3} alt="" width='100%' className="imgghovver" controls/>
          </div>
          <div className="divhiddenShowen">
            <p>
              Vesper Project. I've got first place in design from code spark
              company.
              <br />
              <a
                href="https://mohamedabdelhameid.github.io/vesperNewChance"
                className="resLink"
                >Vesper </a>
              using HTML, CSS, BOOTSTRAP and JAVASCRIPT.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div class="divNum1 Tam pro4">
          <div class="Div2IMAGge">
            {/* <img
              src={imgpro4}
              alt=""
              width="100%"
              height="100%"
              className="imgghovver"
            /> */}
            <video src={TammyProject}  poster={imgpro4} alt="" width='100%' className="imgghovver" controls/>
          </div>
          <div className="divhiddenShowen">
            <p>
              Tammy Food Project. I design it to presentation in Ma3refa team in
              sohag university.
              <br />
              <a
                href="https://mohamedabdelhameid.github.io/tammyFood"
                className="resLink"
                >Tammy Food </a>
              using HTML, CSS, BOOTSTRAP and JAVASCRIPT.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div class="divNum1 Tam pro4">
          <div class="Div2IMAGge">
            {/* <img
              src={portfolioProject}
              alt=""
              width="100%"
              height="100%"
              className="imgghovver"
            /> */}
            <video src={portfolioProject}  poster={imgpro5} alt="" width='100%' className="imgghovver" controls/>
          </div>
          <div className="divhiddenShowen">
            <p>
              My portfolio.I make it to develop myself and view all projects.
              <br />
              <a
                href="https://mohamedabdelhameid.github.io/myProtofolio"
                className="resLink"
                >myPortfolio </a>
              using HTML, CSS, BOOTSTRAP and JAVASCRIPT.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div class="divNum1 Tam pro5">
          <div class="Div2IMAGge">
            <video src={CRUDProject}  poster={imgpro6} alt="" width='100%' className="imgghovver" controls/>
          </div>
          <div className="divhiddenShowen">
            <p>
              CRUD project.I make it to develop myself in JAVASCRIPT.
              <br />
              <a
                href="https://mohamedabdelhameid.github.io/CRUD"
                className="resLink"
                >CRUD </a>
              using HTML, CSS, BOOTSTRAP and JAVASCRIPT.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
};

function Projects(){
  return(
    <>
      <Container>
        <Navs />
        <div className="griddd">
          <h2 style={{textAlign:'center'}}>All designs responsive in any screen</h2>
          <Swiperr />
        </div>
      {/* <CopyRight /> */}
      </Container>
    </>
  )
}


export default Projects;