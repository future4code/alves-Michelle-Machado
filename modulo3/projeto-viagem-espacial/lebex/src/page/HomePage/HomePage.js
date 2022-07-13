import React from 'react'
import * as C from './styled'
// import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import Foto from '../../assets/foguete.webp'
import Marte from '../../assets/planeta-marte.webp'
import Venus from '../../assets/planeta-venus.webp'
import Plutao from '../../assets/planeta-plutao.webp'
import Saturno from '../../assets/planeta-saturno.webp'

export const HomePage = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <C.Banner src={Foto} />

      <C.Slider {...settings}>

        <C.Planets src={Marte} />

        <C.Planets src={Venus} />

        <C.Planets src={Plutao} />

        <C.Planets src={Saturno} />

      </C.Slider>

    <h3>ÚLTIMAS VIAGENS</h3>


    </div>
  )
}
