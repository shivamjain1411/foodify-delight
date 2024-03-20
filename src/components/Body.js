import Restrocard from "./Restrocard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";

import useOnlineStatus from "../utlis/useOnlineStatus";
const Body = () => {
  // local state variable= superpoerful react variable
  const [ListOfRestorants, SetListOfRestorant] = useState([]);
  const [filteredRestarant,setFilterdRestaurant]=useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  });
  

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.1596416&lng=72.6636319&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    //optional chaining function
    SetListOfRestorant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterdRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  };
  
  const onlineStatus =useOnlineStatus();
  if(onlineStatus==false){
    return (<h1>looks like you are offline;</h1>)
  }


  // noraml js variable
  // let ListOfRestorantsJs = [
  //   {
  //     type: "restaurant",
  //     info: {
  //       resId: 19952203,
  //       name: "Eat Punjab",
  //       image: {
  //         url: "https://b.zmtcdn.com/data/pictures/chains/4/110484/3f31528324e1209f325c3d79c6e0d713_o2_featured_v2.jpg",
  //       },
  //       rating: {

  //         aggregate_rating: "3.8",

  //       },
  //       cft: {
  //         text: "₹500 for two",
  //       },
  //     },
  //     order: {
  //       deliveryTime: "30 min",
  //     }
  //   },
  //   {
  //     type: "restaurant",
  //     info: {
  //       resId: 19952202 ,
  //       name: "Dominos",
  //       image: {
  //         url: "https://b.zmtcdn.com/data/pictures/chains/4/110484/3f31528324e1209f325c3d79c6e0d713_o2_featured_v2.jpg",
  //       },
  //       rating: {

  //         aggregate_rating: "4.8",

  //       },
  //       cft: {
  //         text: "₹500 for two",
  //       },
  //     },
  //     order: {
  //       deliveryTime: "30 min",
  //     }
  //   },
  //   {
  //     type: "restaurant",
  //     info: {
  //       resId: 19952201,
  //       name: "MCD",
  //       image: {
  //         url: "https://b.zmtcdn.com/data/pictures/chains/4/110484/3f31528324e1209f325c3d79c6e0d713_o2_featured_v2.jpg",
  //       },
  //       rating: {

  //         aggregate_rating: "4.1",

  //       },
  //       cft: {
  //         text: "₹500 for two",
  //       },
  //     },
  //     order: {
  //       deliveryTime: "30 min",
  //     }
  //   }

  // ];

  //conditional redering
  if(ListOfRestorants.length == 0){
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="flex">
        <div className="search-box m-4 p-4 flex">
          <input className="border border-solid border-black"
            type="text"
            placeholder="Search Restro"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          
          <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            
            onClick={() => {
              console.log(searchText);
              const filteredRestro=ListOfRestorants.filter((res)=>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterdRestaurant(filteredRestro);
              

            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
        <button
          className="border border-solid border-black bg-gray-100 rounded-lg"
          onClick={() => {
            //enter your logic here
            FilteredList = ListOfRestorants.filter(
              (res) => res.info.avgRating >= 4.6
            );
            SetListOfRestorant(FilteredList);
          }}
        >
          Top Rated Restronant
        </button>
        </div>
        
      </div>
      <div className="res-container flex flex-wrap w-[1300px] m-auto justify-center ">
        {filteredRestarant.map((restronant) => (
          <Link to={"/restaurants/"+restronant.info.id}>

            <Restrocard key={restronant.info.id} resData={restronant} />
          </Link> 
        ))}
      </div>
    </div>
  );
};

export default Body;
