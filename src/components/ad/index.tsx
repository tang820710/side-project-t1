import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/styles.css";

const Ad: React.FC<{ data?: { data?: object[] } }> = ({ data }) => {
  const ad = data && data.data ? data.data : [];
  const settings = {
    initialSlide: 1
  }

  return (
    <div>
      <Slider {...settings}>
        {ad.map((item: any, i: number) => (
          <div key={i} className="my-2 px-2 text-center">
            <a href={item.url}>
              <img src={item.image} alt={item.title} />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Ad;
