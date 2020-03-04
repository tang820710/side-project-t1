import React from "react";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { IoIosArrowDropright } from "react-icons/io";
import { FaRegPlayCircle } from "react-icons/fa";
import "../../assets/styles.css";

interface Video {
  Id?: string;
  Name?: string;
  StartTime?: string;
  EndTime?: string;
  Pic?: string;
  Sort?: number;
  isLive?: number;
  LiveStartTime?: string;
  LiveEndTime?: string;
  VideoURL?: string;
}

const Video: React.FC<{ data?: { data?: object[] } }> = ({ data }) => {
  const video = data && data.data ? data.data : [];
  console.log('video: ', video);

  return (
    <div className="bg-white">
      <Header />
      <div className="flex flex-row overflow-x-auto">
        {video.map((item: Video, i: number) => (
          <div key={i} className="flex flex-col flex-none w-4/5 px-2 pt-2">
            <a className="relative inline-block">
              <FaRegPlayCircle size="2.5rem" className="absolute inset-1/2"/>
              <img
                src={`//e.ecimg.tw${item.Pic}`}
                alt={item.Name}
                className="rounded-md"
              />
            </a>
            <div className="p-2 truncate text-gray-800">{item.Name}</div>
          </div>
        ))}
        <div className="text-gray-700 flex-none whitespace-no-wrap p-10 tracking-wider">
          <IoIosArrowDropright className="m-auto" size="2.5rem" color="red" />
      更多影音
        </div>
      </div>
    </div>
  );
};

const Header: React.FC = () => (
  <div className="flex flex-row mt-2 px-4 py-2 justify-between items-center border-b">
    <div className="flex flex-row">
      <AiOutlinePlaySquare size="1.5rem" color="red" />
      <span className="mx-2 text-gray-800">影音專區</span>
    </div>
    <div className="text-gray-700 text-sm">{"看更多 >"}</div>
  </div>
);

export default Video;
