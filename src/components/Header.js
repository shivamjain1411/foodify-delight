import React from "react";
import { Logo_URL } from "../utlis/contants/";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utlis/useOnlineStatus";
import UserContext from "../utlis/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  //there are 3 cases with useEffect
  //1. useEffect without dependency array {always called whenever parent compoments get rendere}
  //2. useEffect with dependency array {one time called when first renders}
  //3. on the basis of dependency array
  //selecting to the store
  const cartItems=useSelector((store)=>store.cart.items);
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg m-2">
      <div className="logo-container">
        <img className="w-48 rounded-3xl" src={Logo_URL}></img>
      </div>
      {/* //subscribe to store const cart=UseSelector */}
      <div className="flex items-center ">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">online status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            {" "}
            <Link to="/">home </Link>{" "}
          </li>
          <li className="px-4">
            {" "}
            <Link to="/about"> about us</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/contact">contact us</Link>{" "}
          </li>
          <li className="px-4">
            {" "}
            <Link to="/grocery"> Grocery Store</Link>{" "}
          </li>
          <li className="px-4 font-bold">
            {" "}
            <Link to="/cart">Cart ({cartItems.length} items)</Link>{" "}
          </li>
          <li className="px-4">
            <button
              className="log_btn"
              onClick={() => {
                btnNameReact == "Login"
                  ? setBtnNameReact("logout")
                  : setBtnNameReact("Login");
              }}
            >
              {btnNameReact}
            </button>
          </li>
          <li>
            <p className="font-bold px-4">{loggedInUser}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
