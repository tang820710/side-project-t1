import React from "react";
import { GiSpeaker } from "react-icons/gi";
import "../../assets/styles.css";

const SlideBar: React.FC<{ data?: { data?: object[] } }> = ({ data }) => {
  const slideBar = data && data.data ? data.data : [];

  return (
    <div className="flex flex-row bg-white mt-2 h-10 overflow-hidden">
      <div className="inline-block px-3 py-2 box-border border-r">
        <GiSpeaker size="1.5rem" color="blue" />
      </div>
      <div className="px-4 py-2 box-border overflow-scroll flex-grow">
        {slideBar.map((item: any, i: number) => (
          <a key={i} href={item.url} className="block leading-loose">
            {item.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SlideBar;
