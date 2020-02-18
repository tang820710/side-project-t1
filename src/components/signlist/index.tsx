import React, { useState } from "react";
import "../../assets/styles.css";

const SignList: React.FC<{ data?: { data?: object[] } }> = ({ data }) => {
  const category = data && data.data ? data.data : [];
  console.log(category);

  return (
    <div className="sticky flex flex-no-wrap overflow-x-scroll bg-white">
      {category.map((item: any, i: number) => {
        if (i === 0) {
          return (
            <>
              <div className="px-4 text-gray-700">精選</div>
              <div className="px-4 text-gray-700">{item.Name}</div>
            </>
          )
        }
        return <div key={i} className="px-4 text-gray-700">{item.Name}</div>;
      })}
    </div>
  );
};

export default SignList;
