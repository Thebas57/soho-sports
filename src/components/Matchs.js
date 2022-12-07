import axios from "axios";
import React, { useEffect } from "react";
import Filter from "./Filter";

const Matchs = (props) => {
  const matchs = () => {
  };

  useEffect(() => {
    matchs();
  });

  return (
    <div className="container-match">
      <div className="header">
        <h1>Liste des matchs de {props.name}</h1>
      </div>
      <div className="match">
        <div className="list-matchs">
          <div className="line-match">
            <span>France</span>
            <input type="text"></input>
            <span> - </span>
            <input type="text" />
            <span>Brésil</span>
          </div>
          <div className="line-match">
            <span>France</span>
            <input type="text"></input>
            <span> - </span>
            <input type="text" />
            <span>Brésil</span>
          </div>
          <div className="line-match">
            <span>France</span>
            <input type="text"></input>
            <span> - </span>
            <input type="text" />
            <span>Brésil</span>
          </div>
          <div className="line-match">
            <span>France</span>
            <input type="text"></input>
            <span> - </span>
            <input type="text" />
            <span>Brésil</span>
          </div>
        </div>
        <Filter />
      </div>
    </div>
  );
};

export default Matchs;
