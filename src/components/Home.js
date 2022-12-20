import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div>
        <NavLink
          to={{
            pathname: "/leagues",
            name: "basketball",
          }}
          exact
        >
          <img src="./img/basket.png" alt="" />
        </NavLink>
      </div>

      <div>
        <NavLink
          to={{
            pathname: "/leagues",
            name: "foot",
          }}
          exact
        >
          <img src="./img/foot.png" alt="" />
        </NavLink>
      </div>

      <div>
        <NavLink
          to={{
            pathname: "/leagues",
            name: "volley",
          }}
          exact
        >
          <img src="./img/volley.webp" alt="" />
        </NavLink>
      </div>

      <div>
        <NavLink
          to={{
            pathname: "/leagues",
            name: "rugby",
          }}
          exact
        >
          <img src="./img/rugby.jpg" alt="" />
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
