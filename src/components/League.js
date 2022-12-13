import React, { useEffect } from "react";
import { useState } from "react";
import { makeRequest } from "../api/foot-api";

const League = (props) => {
  console.log(props.location);
  const [matchs, setMatchs] = useState([]);
  const [isLoadMatchs, setIsLoadMatchs] = useState(false);

  // fonction qui retourne la date et l'heure en fonction d'un code timestamp
  const returnDate = (timestamp) => {
    const date = new Date(timestamp);

    let h = date.getHours();
    if (h.length < 2) h = "0" + h;
    const min = date.getMinutes();
    let day = date.getDate();
    let month = date.getMonth()+1;
    if (month.lengt < 2) month = "0" + month;
    const stringDate = day + "/" + month;

    return stringDate;
  };

  // Créer un tableau de matchs en fonction de la ligue
  const loadMatchs = (id) => {
    makeRequest(id)
      .then(function (response) {
        setMatchs(response.data.response);
        setIsLoadMatchs(true);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    loadMatchs(props.location.league.id);
  }, [isLoadMatchs, props.location.league.id]);

  return (
    <div className="league-container">
      <div className="header">
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
                <div className="match-detail">
                  <div className="horaire">
                    {returnDate(match.fixture.timestamp)}
                  </div>
                  <div className="state">{match.fixture.status.long}</div>
                  <div className="resultat">
                    <span className="logo-ekip">
                      <img src={match.teams.home.logo} alt="logo-home" />
                    </span>
                    <span>{match.teams.home.name}</span>
                    <span>{match.goals.home}</span>
                    <span> - </span>
                    <span>{match.goals.away}</span>
                    <span>{match.teams.away.name}</span>
                    <span className="logo-ekip">
                      <img src={match.teams.away.logo} alt="logo-home" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default League;
