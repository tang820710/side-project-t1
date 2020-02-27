import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/styles.css";

const PanelBar: React.FC<{ data?: { data?: { data?: object[] } } }> = ({ data }) => {
  const panelBar = data && data.data && data.data.data  ? data.data.data : [];
  const [index, setIndex] = useState(1);
  const settings = {
    initialSlide: 0,
    infinite: false,
  };
  
  return (
    <div className="relative mx-2 -mt-6 pb-6 rounded bg-white">
      <Slider {...settings} afterChange={(i: number): void => setIndex(i + 1)}>
        {panelBar.map((block: any, i: number) => (
          <div
            key={i}
            className="flex justify-between text-center"
          >
            {block.data.map((item: any, j: number) => (
              <div
                key={j} 
                className="inline-flex flex-col w-1/4 box-border p-2"
              >
                <a href={item.url}>
                  <img
                    src={`//b.ecimg.tw${item.image}`}
                    alt={item.title}
                    className="p-1"
                  />
                </a>
                <p className="text-xs text-gray-700">{item.title}</p>
              </div>
            ))}
          </div>
        ))}
      </Slider>
      <div className="-mt-1 h-1 w-16 bg-transparent rounded mx-auto">
        <div className={`inline-block h-1 w-8 ${index === 1 ? 'bg-red-600 ' : 'bg-gray-100'} rounded mx-auto`}></div>
        <div className={`inline-block h-1 w-8 ${index === 2 ? 'bg-red-600 ' : 'bg-gray-100'} rounded mx-auto`}></div>
      </div>
    </div>
  );
};

export default PanelBar;
