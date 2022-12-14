import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getLeaguesBasket, getLeaguesFoot, getLeaguesRugby, getLeaguesVolley } from "../api/foot-api";
import Matchs from "./Matchs";

const Leagues = (props) => {
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
    if (sport === "basketball") {
      axios(getLeaguesBasket)
        .then(function (response) {
          let res = response.data.response;
          // Parcourez le tableau en utilisant une boucle for
          for (const element of res) {
            // Ajoutez un index à chaque objet dans le tableau
            element.league = element;
          }
          setLeagues(res);
          setIsLoadLeagues(true);
          console.log(res);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    if (sport === "rugby") {
      axios(getLeaguesRugby)
        .then(function (response) {
          let res = response.data.response;
          // Parcourez le tableau en utilisant une boucle for
          for (const element of res) {
            // Ajoutez un index à chaque objet dans le tableau
            element.league = element;
          }
          setLeagues(res);
          setIsLoadLeagues(true);
          console.log(res);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    if (sport === "volley") {
      axios(getLeaguesVolley)
        .then(function (response) {
          let res = response.data.response;
          // Parcourez le tableau en utilisant une boucle for
          for (const element of res) {
            // Ajoutez un index à chaque objet dans le tableau
            element.league = element;
          }
          setLeagues(res);
          setIsLoadLeagues(true);
          console.log(res);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    console.log(props.location.name);
    if (props.location.name !== "") {
      loadLeagues(props.location.name);
    }
  }, [isLoadLeagues, props.location.name]);

  return (
    <>
      {leagues.length > 0 ? (
        <div className="leagues-container">
          <div className="header">
            <h1>Liste des leagues de {props.location.name} en France</h1>
          </div>
          <div className="list-leagues">
            {leagues?.map((league) => {
              return (
                <div className="league" key={league.league.name}>
                  <h5>{league.league.name}</h5>
                  <div className="img">
                    <img src={league.league.logo} alt="logo" />
                  </div>
                  <div className="text-hide">
                    <span>{league.league.name}</span>
                    <div className="btn-league">
                      <NavLink
                        to={{
                          pathname: "/league",
                          league: league.league,
                          name: props.location.name
                        }}
                        exact
                      >
                        + d'infos
                      </NavLink>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Leagues;
