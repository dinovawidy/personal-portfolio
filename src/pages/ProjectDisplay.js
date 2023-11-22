import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/ProjectDisplay.css";

import {Swiper, SwiperSlide} from "swiper/react"
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

 import './styles.css';


const ProjectDisplay = () => {
const navigate = useNavigate();
const { slug } = useParams();
  const project = ProjectList;
  const [imagesService, setImagesService] = React.useState([]);

  const findBy = project.find((item) => item.slug === slug);

  React.useEffect(() => {
    if (findBy !== null || findBy !== "") {
      setImagesService([findBy?.image1, findBy?.image2, findBy?.image3, findBy?.image4]);
    }
  }, [findBy, navigate]);

  return (
    <div className="project">
      <h1> {findBy.name}</h1>
      <Swiper
      spaceBetween={30}
      effect={'fade'}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
      autoplay={{delay: 10000}}
      className="mySwiper"
      >
        {imagesService.map((image, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <img src={image} alt="imageBg" />
          </SwiperSlide>
        ))}
      </Swiper>
      
      <p>
        <b>Skills:</b> {findBy.skills}
      </p>
    </div>
  );
}

export default ProjectDisplay;