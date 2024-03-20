import { useState } from "react";

import ItemList from "./ItemList";



const ResCetegory = ({ data,showItems, setShowIndex }) => {
  


  const handleClick=()=>{
    
    setShowIndex();
  }
  
  return (
    <div>
      <div className="w-6/12 m-auto my-4 bg-gray-50 shadow-lg ">
        <div className="flex justify-between" >
          <span className="font-bold text-lg cursor-pointer" onClick={handleClick}>
            {data.title} ({data.itemCards.length})
          </span>
          <span>{"⬇️"}</span>
        </div>

        { showItems && <ItemList items={data.itemCards} />}
      
      </div>
    </div>
  );
};

export default ResCetegory;
