import React from "react";
import { FaBars, FaReact, FaSearch } from "react-icons/fa";
import "../../assets/styles.css";

const Header: React.FC = () => {
  return (
    <header className="w-screen fixed z-10 flex flex-row justify-around items-center p-2">
      <FaBars size="1.75rem" />
      <FaReact size="1.75rem" color="red" />
      <button className="button flex flex-row items-center w-8/12 bg-gray-300 text-gray-500 text-base rounded-lg p-2 leading-normal">
        <FaSearch size="1rem" color="gray" className="mx-3" />
        {"請輸入您想要找的商品"}
      </button>
    </header>
  );
};

export default Header;
