import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
// import { Menu_API } from "../utlis/contants";
import useRestaurantMenu from "../utlis/useRestaurantMenu";
import ResCetegory from "./ResCategory";
const RestaurantMenu = () => {
  // const [resInfo,setResInfo]=useState(null);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex,setShowIndex]=useState(null);
  
  
  // useEffect(()=>{
  //     fetchMenu();
  // },[]);

  // const fetchMenu= async ()=>{
  //     const data = await fetch(Menu_API+resId);
  //     const json =await data.json();
  //     setResInfo(json.data);
  // }
  if (resInfo == null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const category =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(category);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h2 className="font-bold text-lg">{cuisines}</h2>
      <h2 className="font-bold text-lg">{costForTwoMessage}</h2>

      {
        /* category acordian*/
        category.map((category,index) => (

            //controlled component
          <ResCetegory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={(index == showIndex ? true : false)}
            setShowIndex={()=>{setShowIndex(index);}}
            
          />
        ))
      }
    </div>
  );
};
export default RestaurantMenu;
