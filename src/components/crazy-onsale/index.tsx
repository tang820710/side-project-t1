import React from "react";
import { GiLightningTrio } from "react-icons/gi";
import { IoIosArrowDropright } from "react-icons/io";
import "../../assets/styles.css";

interface Project {
  image?: string;
  url?: string;
  info?: string;
  price?: string;
}

const CrazyOnSale: React.FC<{ data?: { data?: object[] } }> = ({ data }) => {
  const onSale = data && data.data ? data.data : [];
  const p3C = onSale.splice(0, 10);
  const pCE = onSale.splice(0, 10);
  const pFood = onSale.splice(0, 10);

  return (
    <div className="bg-white">
      <Header />
      <div className="py-2">
        <div>
          <Title title="3C 數位/手機" color="blue" />
          <List project={p3C} />
        </div>
        <div>
          <Title title="家電/生活休閒" color="green" />
          <List project={pCE} />
        </div>
        <div>
          <Title title="食用品/美妝流行" color="pink" />
          <List project={pFood} />
        </div>
      </div>
    </div>
  );
};

const Header: React.FC = () => (
  <div className="flex flex-row mt-2 px-4 py-2 justify-between items-center border-b">
    <div className="flex flex-row">
      <GiLightningTrio size="1.5rem" color="orange" />
      <span className="mx-2 text-gray-800">瘋殺特賣</span>
    </div>
    <div className="text-gray-700 text-sm">{"看更多 >"}</div>
  </div>
);

const Title: React.FC<{ title: string; color: string }> = ({ title, color }) => (
  <div
    className={`inline-block w-40 text-white rounded-r-full pl-2 bg-${color}-400`}
  >
    {title}
  </div>
);

const List: React.FC<{ project: Project[] }> = ({ project }) => (
  <div className="flex flex-row overflow-x-auto">
    {project.map((item: Project, i: number) => (
      <a
        key={i}
        className="inline-block flex-none w-2/5 p-2"
        href={item.url}
      >
        <img src={item.image} alt={item.info} />
      </a>
    ))}
    <div className="text-gray-700 flex-none whitespace-no-wrap p-6 tracking-wider">
      <IoIosArrowDropright className="m-auto" size="2.5rem" color="red" />
      更多商品
    </div>
  </div>
);

export default CrazyOnSale;
