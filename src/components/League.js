import React, { useEffect, useState } from "react";
import { makeRequest } from "../api/foot-api";
import Match from "./Match";
import { FaArrowLeft } from "react-icons/fa";

const League = (props) => {
  console.log(props.location);
  const [matchs, setMatchs] = useState([]);
  const [isLoadMatchs, setIsLoadMatchs] = useState(false);

  // Créer un tableau de matchs en fonction de la ligue
  const loadMatchs = (sport, id) => {
    makeRequest(sport, id)
      .then(function (response) {
        response.data.response = response.data.response.slice(0, 10);
        if (sport === "basketball" || sport === "rugby" || sport === "volley") {
          for (const element of response.data.response) {
            element.fixture = element;
          }
        }
        setMatchs(response.data.response);
        setIsLoadMatchs(true);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    loadMatchs(props.location.name, props.location.league.id);
  }, [isLoadMatchs, props.location.league.id, props.location.name]);

  return (
    <div className="league-container">
      <div className="header">
        <span>
          <FaArrowLeft />
        </span>
        <h1>{props.location.league.name}</h1>
      </div>
      <div className="league">
        <div className="list-leagues">
          <h5>Mes ligues</h5>
          <hr />
          <span>Ligue 1</span>
          <br />
          <span>Ligue 1</span>
          <br />
          <span>Ligue 1</span>
          <br />
          <span>Ligue 1</span>
          <br />
        </div>
        <div className="matchs">
          <div className="filter-matchs">
            <span>Tous</span>
            <span>Terminé</span>
            <span>En cours</span>
            <span>Prévus</span>
          </div>
          <div className="list-matchs">
            {matchs?.map((match) => {
              return (
                <Match
                  match={match}
                  sport={props.location.name}
                  key={match.fixture.id}
                ></Match>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default League;
