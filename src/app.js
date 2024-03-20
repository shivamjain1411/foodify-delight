import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utlis/UserContext";
import Cart from "./components/Cart";
import appStore from "./utlis/appstore";
import { Provider } from "react-redux";
import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));
//lazyloading
//chunking
//dynamic bundling
//code splitting
//onDemad Loading

const AppLayout = () => {
  const [userName, setUsername] = useState();
  //authentication

  useEffect(() => {
    const data = {
      name: "shivam jain",
    };
    setUsername(data.name);
  }, []);

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedInUser: userName }}>
      <div className="app">
        <Header />
        <UserContext.Provider value={{ loggedInUser: "virat kohali" }}>
          <Outlet />
        </UserContext.Provider>
      </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>tum logo ki ......</h1>}>
            {" "}
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
