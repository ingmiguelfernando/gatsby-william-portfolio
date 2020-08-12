import React from "react"
import Title from "./Title"
import internalmedicine from "../constants/internalmedicine"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

 var settings = {
   dots: true,
   infinite: true,
   speed: 500,
   autoplaySpeed: 15000,
   slidesToShow: 1,
   slidesToScroll: 1,
   autoplay: true,
 }

 const SectionStyle = (section) => {
     debugger
     return (
       <div key={section.id}>
         <h3 className="normal-case italic text-center font-thin">
           {section.text}
         </h3>
       </div>
     )
 }

const InternalMedicine = () => {
    
  return (
    <section className="section bg-white">
      <Title title="Medicina Interna" />
      <div className="section-center">
        <Slider {...settings}>
          {internalmedicine.map(item => SectionStyle(item))}
        </Slider>
      </div>
    </section>
  )
}

export default InternalMedicine

