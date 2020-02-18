import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/styles.css";

const Banner: React.FC<{ data?: { data?: object[] } }> = ({ data }) => {
  const banner = data && data.data ? data.data : [];
  const [index, setIndex] = useState(1);
  const settings = {
    initialSlide: 0,
    autoplay: true
  };

  return (
    <div>
      <Slider {...settings} afterChange={(i: number): void => setIndex(i + 1)}>
        {banner.map((item: any, i: number) => (
          <div key={i}>
            <a href={item.url}>
              <img src={item.image} alt={`banner${index}`} />
            </a>
          </div>
        ))}
      </Slider>
      <div className="absolute right-0 top-0 rounded-tl-lg rounded-bl-lg bg-gray-700 text-white opacity-75 mt-16 px-4">{`${index} | ${banner.length}`}</div>
    </div>
  );
};

export default Banner;
