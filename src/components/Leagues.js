import axios from "axios";
import React, { useEffect, useState } from "react";
import { getLeaguesFoot } from "../api/foot-api";

const Leagues = (props) => {
  console.log(props.name);
  const [leagues, setLeagues] = useState([]);
  const [isLoadLeagues, setIsLoadLeagues] = useState(false);

  // Créer un tableau de leagues en fonction du sport
  const loadLeagues = (sport) => {
    if (sport === "foot") {
      axios(getLeaguesFoot)
        .then(function (response) {
          setLeagues(response.data.response);
          setIsLoadLeagues(true);
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    if (props.name !== "" && !isLoadLeagues) {
      loadLeagues(props.name);
    }
  });

  return (
    <div className="leagues-container">
      <div className="header">
        <h1>Liste des leagues de {props.name} en France</h1>
      </div>
      <div className="list-leagues">
        {leagues?.map((league) => {
          return (
            <div className="league" key={league.league.name}>
              <h5>{league.league.name}</h5>
              <div className="img">
                <img src={league.league.logo} alt="logo" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Leagues;
