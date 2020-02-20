import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "../../assets/styles.css";

const SignList: React.FC<{ data?: { data?: object[] } }> = ({ data }) => {
  const category = data && data.data ? data.data : [];
  const [focus, setFocus] = useState(-1);

  return (
    <div className="flex items-center bg-white border-b overflow-hidden">
      <div className="sticky whitespace-pre overflow-x-auto">
        <div
          className={`inline-block px-4 py-3 text-gray-700 ${focus === -1 ? "border-b-2 border-red-600" : null}`}
          onClick={():void => setFocus(-1)}
        >
        精選
        </div>
        {category.map((item: any, i: number) => (
          <div
            key={i}
            className={`inline-block px-4 py-3 text-gray-700 ${focus === i ? "border-b-2 border-red-600" : null}`}
            onClick={():void => setFocus(i)}
          >
            {item.Name}
          </div>
        ))}
      </div>
      <FaChevronDown className="box-content px-4 border-l" size="2.5rem" color="gray" />
    </div>
  );
};

export default SignList;
