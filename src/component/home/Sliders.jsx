import React,{useEffect, useState} from 'react'
import Slider from "react-slick";
import axios from "axios";
import {API_URL,BASE_URL} from "../../constants/contant";

const Sliders = () => {

  const [data,setData] = useState([]);

  useEffect(() => {
    sliderFetch();
  }, []);
  
  const sliderFetch = () => {
    axios
      .get(`${BASE_URL}${API_URL.slider}`)
      .then((response) => {
        const result = response.data.sliders;
        const formatted = Array.isArray(result) ? result : [result];
        setData(formatted);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  
  return (
    <div style={{ width: "100%", marginTop: "30px" }}>
      <div className='Hero_slider' style={{ maxWidth: "1200px", margin: "0 auto"  }}>
        <Slider {...settings}>
          {Array.isArray(data) &&
            data.map((val, index) => (
              <div
                key={index}
                style={{
                  width: "100%",
                  height: "500px",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={val.image}
                  alt={`Slide ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default Sliders
