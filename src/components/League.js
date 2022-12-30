import React, { useEffect, useState } from "react";
import { makeRequest } from "../api/foot-api";
import Match from "./Match";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const League = (props) => {
  const [matchs, setMatchs] = useState([]);
  const [sportName, setSportName] = useState("");
  const [leagueID, setLeagueID] = useState();
  const [dateMatch, setDateMatch] = useState();
  const [filterMatch, setFilterMatch] = useState("Tous");

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
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // Handle les filtres
  const handleFilter = (e) => {
    let elements = document.getElementsByClassName("filter");
    if (elements.length > 0) {
      // Parcours le tableau des éléments récupérés
      for (let i = 0; i < elements.length; i++) {
        let element = elements[i];

        // Fait quelque chose avec l'élément courant
        element.classList.remove("selected");
      }
    }
    e.target.classList.toggle("selected");
    console.log(e.target.innerText)
    console.log(matchs)
    setFilterMatch(e.target.value)

    // On filtre les matchs pour récup que ceux dans l'état que l'on souhaite
    switch(filterMatch){
      case "Tous":
        setMatchs(matchs.filter(match => match.status.long === "Game Finished"))
        break;
      case "Terminé":
        setMatchs(matchs.filter(match => match.status.long === "Game"))
        break;
      default:
        break;
    }
  }

  // Au changement de date, on retourne d'autres matchs
  const handleDate = (date) => {
    setDateMatch(date);
    makeRequest(sportName, leagueID, date)
    .then(function (response) {
      response.data.response = response.data.response.slice(0, 10);
      if (sportName === "basketball" || sportName === "rugby" || sportName === "volley") {
        for (const element of response.data.response) {
          element.fixture = element;
        }
      }
      setMatchs(response.data.response);
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  useEffect(() => {
    if ("name" in props.location) {
      localStorage.setItem("sport", props.location.name);
      localStorage.setItem("league", props.location.league.id);
      setSportName(props.location.name);
      setLeagueID(props.location.league.id);
    } else {
      setSportName(localStorage.getItem("sport"));
      setLeagueID(localStorage.getItem("league"));
    }

    if (sportName !== "" && leagueID !== "") loadMatchs(sportName, leagueID);
  }, [leagueID, props.location, sportName]);

  return (
    <div className="league-container">
      <div className="header">
        <NavLink
          to={{
            pathname: "/leagues",
            name: sportName,
          }}
        >
          <span>
            <FaArrowLeft />
          </span>
        </NavLink>

        <h1>Liste des matchs de {sportName}</h1>
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
            <input type="date" name="" className="inputDate" id="" onChange={(e) => handleDate(e.target.value)}/>
            <span className="filter selected" onClick={(e) => handleFilter(e)}>Tous</span>
            <span className="filter" onClick={(e) => handleFilter(e)}>Terminé</span>
            <span className="filter" onClick={(e) => handleFilter(e)}>En cours</span>
            <span className="filter" onClick={(e) => handleFilter(e)}>Prévus</span>
          </div>
          <div className="list-matchs">
            {matchs?.map((match) => {
              return (
                <Match
                  match={match}
                  sport={sportName}
                  key={match.fixture.id}
                ></Match>
              );
            })}
            {matchs.length === 0 && (
              <span className="info-match">Aucun match trouvé à cette date : {dateMatch} </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default League;
