import React, { useState } from "react";
import { GiAlarmClock } from "react-icons/gi";
import "../../assets/styles.css";

const ThreeOnSale: React.FC<{ data?: { data?: object[] } }> = ({ data }) => {
  interface Provider {
    id?: string,
    name?: string,
    image?: string,
    url?: string,
    info?: string,
    price?: string,
    time?: string
  }

  const onSale = data && data.data ? data.data : [];
  const firstData: Provider = onSale[0] ? onSale[0] : {};
  const secondData: Provider = onSale[1] ? onSale[1] : {};
  const thirdData: Provider = onSale[2] ? onSale[2] : {};
  console.log(firstData);
  return (
    <div>
      <div className="flex flex-row px-4 py-2 items-center border-b bg-white">
        <GiAlarmClock size="1.75rem" color="orange" />
        <span className="mx-2 text-gray-800">三賞特賣</span>
      </div>
      <div className="grid grid-rows-2 grid-cols-2">
        <div className="row-start-1 row-end-3 flex flex-col px-2 pb-2 mr-1 bg-white">
          <Time time={firstData.time} />
          <Image url={firstData.url} image={firstData.image} name={firstData.name} />
          <div className="flex flex-row justify-between px-2 mt-2">
            <div className="text-red-600">
              ${firstData.price}
            </div>
            <div className="px-2 text-sm font-medium text-white bg-red-700 rounded">
              搶購
            </div>
          </div>
        </div>
        <div className="flex flex-row px-2 pb-2 ml-1 mb-1 bg-white">
          <Image url={secondData.url} image={secondData.image} name={secondData.name} />
          <div className="flex flex-col">
            <Time time={secondData.time} />
          </div>
        </div>
        <div className="flex flex-row px-2 pb-2 ml-1 mt-1 bg-white">
          <Image url={thirdData.url} image={thirdData.image} name={thirdData.name} />
          <div className="flex flex-col">
            <Time time={thirdData.time} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Image: React.FC<{ url?: string, image?: string, name?: string }> = ({ url, image, name }) => (
  <div>
    <a href={url}>
      <img src={image} alt={name} />
    </a>
  </div>
)

const Time: React.FC<{ time?: string }> = ({ time }) => (
  <div className="self-start px-2 text-white bg-black rounded-b">
    {time}
  </div>
)

export default ThreeOnSale;
