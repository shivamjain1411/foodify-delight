import { Restro_URL } from "../utlis/contants";
import React,{useContext} from "react";
const Restrocard = ({ key, resData }) => {

  

  const { cloudinaryImageId, name, costForTwo, cuisines, avgRating } =
    resData?.info;
  // const{deliveryTime}=resData?.info?.sla;
  // const{url}=image;
  // const{text}=cft;
  // const{aggregate_rating}=rating;
  // const{deliveryTime}=resData?.order;
  return (
    <div className>
      <div className=" mx-8 m-4 p-4 w-[250px] h-[400px]  rounded-lg shadow-2xl hover:bg-gray-400 bg-gray-200">
      
      <div className=" flex items-center align-middle h-40 overflow-hidden rounded-lg ">
        <img
          className="res-logo rounded-lg "
          src={Restro_URL + cloudinaryImageId}
        />
      </div>

      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{costForTwo}</h4>
      <h4 className="break-words">{cuisines.join(", ")}</h4>
      <h4 className="bg-green-100 max-w-max rounded-lg">{avgRating} star</h4>
      
      {/* <h4>{deliveryTime} minute</h4> */}
      {/* <h4>{text}</h4>
        <h4>{aggregate_rating+" star"}</h4>
        <h4>{deliveryTime}</h4> */}
    </div>
    </div>
    
  );
};


//higher order component

export const withVeg=(Restrocard)=>{
  return (props)=>{
    return(
      <div>
        <label>pure veg</label>
        <Restrocard {...props} />
      </div>
      
      
    )

  }

}

export default Restrocard;
