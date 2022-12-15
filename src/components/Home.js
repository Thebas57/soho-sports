import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <NavLink
        to={{
          pathname: "/leagues",
          name: "basketball",
        }}
        exact
      >
        <div>
          <img src="./img/basket.png" alt="" />
        </div>
      </NavLink>
      <NavLink
        to={{
          pathname: "/leagues",
          name: "foot",
        }}
        exact
      >
        <div>
          <img src="./img/foot.png" alt="" />
        </div>
      </NavLink>
      <NavLink
        to={{
          pathname: "/leagues",
          name: "volley",
        }}
        exact
      >
        <div>
          <img src="./img/volley.webp" alt="" />
        </div>
      </NavLink>
      <NavLink
        to={{
          pathname: "/leagues",
          name: "rugby",
        }}
        exact
      >
        <div>
          <img src="./img/rugby.jpg" alt="" />
        </div>
      </NavLink>
    </div>
  );
};

export default Home;
