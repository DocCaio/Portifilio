import React, { useRef } from "react";
import './styles.css';
import ExperienceCards from '../ExperienceCards';
import {WORK_EXPERIENCE} from '../../util/data';
import Slider from "react-slick";

const   WorkExperience = () => {
 const sliderRef = useRef();

      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        sildesToScroll: 1,
        arrows: false,
        responsive: [
          {
          breakpoinst: 769,
          settings: {
            slidesToShow:1,
            sildesToScroll:1,
          },
        },

      ],
      };
    
  return (
    <section className="experience-container">
      
       <h5>Work Experience</h5>
       <div className="experience-content">
       <Slider ref={sliderRef} {...settings}>
        {WORK_EXPERIENCE.map((item) =>
          <ExperienceCards key={item.title} details={item}/>
        )}
       </Slider>
       </div>
    </section>
  )
}

export default WorkExperience;