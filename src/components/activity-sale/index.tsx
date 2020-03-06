import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import "../../assets/styles.css";

const ActivitySale: React.FC<{ data?: { data?: object[] } }> = ({ data }) => {
  const activitySale = data && data.data ? data.data : [];
  console.log("activitySale: ", activitySale);

  return (
    <div>
      {activitySale.map((item: any, i: number) => (
        <div key={i}>
          {item.title && item.title.title ? (
            <Header title={item.title.title} />
          ) : null}
          {item.ad && item.ad.image ? (
            <Ad ad={item.ad} />
          ) : null}
          <div className="grid grid-rows-5 grid-cols-2">
            {item.data ? item.data.map((prod: any, j: number) => (
              <a
                key={j}
                href={prod.url}
                className={`col-start-${j%2===0 ? 1 : 2} col-end-${j%2===0 ? 2 : 3} bg-white box-border p-2 mb-2 mx-1`}
              >
                <img src={`//a.ecimg.tw${prod.image}`} alt={prod.title} />
                <div className="text-sm leading-6 h-6 overflow-hidden mt-2">{prod.slogan}</div>
                <div className="text-sm leading-6 h-12 overflow-hidden">{prod.title}</div>
                <div className="text-red-600">${prod.price}</div>
              </a>
            )) : null}
          </div>
        </div>
      ))}
    </div>
  );
};


const Header: React.FC<{ title: string }> = ({ title }) => (
  <div className="flex flex-row bg-white mt-2 px-4 py-2 justify-between items-center border-b">
    <div className="flex flex-row">
      <FaShoppingBasket size="1.5rem" color="skyblue" />
      <span className="mx-2 text-gray-800">{title}</span>
    </div>
  </div>
);

const Ad: React.FC<{ ad: { image: string, title: string, url: string } }> = ({ ad }) => (
  <a href={ad.url}>
    <img src={`//a.ecimg.tw${ad.image}`} alt={ad.title} />
  </a>
);

export default ActivitySale;
