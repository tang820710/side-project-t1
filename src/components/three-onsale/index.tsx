import React from "react";
import { GiAlarmClock } from "react-icons/gi";
import "../../assets/styles.css";

interface Provider {
  id?: string,
  name?: string,
  image?: string,
  url?: string,
  info?: string,
  price?: string,
  time?: string
}

const ThreeOnSale: React.FC<{ data?: { data?: object[] } }> = ({ data }) => {
  const onSale = data && data.data ? data.data : [];
  const firstData: Provider = onSale[0] ? onSale[0] : {};
  const secondData: Provider = onSale[1] ? onSale[1] : {};
  const thirdData: Provider = onSale[2] ? onSale[2] : {};
  
  return (
    <div>
      <Header />
      <div className="grid grid-rows-2 grid-cols-2">
        <a
          className="row-start-1 row-end-3 flex flex-col px-2 pb-2 mr-1 bg-white"
          href={firstData.url}
        >
          <Time time={firstData.time} />
          <Image image={firstData.image} name={firstData.name} />
          <div className="flex flex-row justify-between px-2 mt-2">
            <Price price={firstData.price} />
            <Button />
          </div>
        </a>
        <a
          className="flex flex-row px-2 pb-2 ml-1 mb-1 bg-white"
          href={secondData.url}
        >
          <Image image={secondData.image} name={secondData.name} />
          <div className="flex flex-col justify-between content-end">
            <Time time={secondData.time} />
            <div className="flex flex-col">
              <Price price={secondData.price} />
              <Button />
            </div>
          </div>
        </a>
        <a
          className="flex flex-row px-2 pb-2 ml-1 mt-1 bg-white"
          href={thirdData.url}
        >
          <Image image={thirdData.image} name={thirdData.name} />
          <div className="flex flex-col justify-between content-end">
            <Time time={thirdData.time} />
            <div className="flex flex-col">
              <Price price={thirdData.price} />
              <Button />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

const Header: React.FC = () => (
  <div className="flex flex-row px-4 py-2 items-center border-b bg-white">
    <GiAlarmClock size="1.5rem" color="orange" />
    <span className="mx-2 text-gray-800">三賞特賣</span>
  </div>
)

const Image: React.FC<{ image?: string, name?: string }> = ({ image, name }) => (
  <div>
    <img src={image} alt={name} />
  </div>
)

const Time: React.FC<{ time?: string }> = ({ time }) => (
  <div className="self-start px-2 text-white bg-black rounded-b">
    {time}
  </div>
)

const Price: React.FC<{ price?: string }> = ({ price }) => (
  <div className="text-red-600 self-end">
  ${price}
  </div>
)

const Button: React.FC = () => (
  <div className="px-2 text-sm font-medium text-white text-center bg-red-700 rounded self-end">
    搶購
  </div>
)

export default ThreeOnSale;
