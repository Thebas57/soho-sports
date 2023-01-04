import React, { useEffect, useState } from "react";
import { makeRequest } from "../api/foot-api";
import Match from "./Match";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import LeaguesFav from "./LeaguesFav";
import { ColorRing } from "react-loader-spinner";

const League = (props) => {
  const [matchs, setMatchs] = useState([]);
  const [sportName, setSportName] = useState("");
  const [leagueID, setLeagueID] = useState();
  const [dateMatch, setDateMatch] = useState();
  const [filterMatch, setFilterMatch] = useState("Tous");
  const [leagues, setLeagues] = useState([]);
  const [loaderMatchs, setLoaderMatch] = useState(true);

  // Créer un tableau de matchs en fonction de la ligue
  const loadMatchs = (sport, id) => {
    makeRequest(sport, id)
      .then(function (response) {
        response.data.response = response.data.response.slice(0, 10);
        if (sport === "foot") {
          for (const element of response.data.response) {
            element.status = element.fixture.status;
          }
        }
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
    setTimeout(() => {
      setLoaderMatch(false);
    }, 200);
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
    setFilterMatch(e.target.id);
  };

  // Au changement de date, on retourne d'autres matchs
  const handleDate = (date) => {
    setLoaderMatch(true);
    setDateMatch(date);
    makeRequest(sportName, leagueID, date)
      .then(function (response) {
        response.data.response = response.data.response.slice(0, 10);
        if (
          sportName === "basketball" ||
          sportName === "rugby" ||
          sportName === "volley"
        ) {
          for (const element of response.data.response) {
            element.fixture = element;
          }
        }
        setMatchs(response.data.response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setTimeout(() => {
      setLoaderMatch(false);
    }, 200);
  };

  useEffect(() => {
    setLoaderMatch(true);

    setLeagues(JSON.parse(localStorage.getItem("leagues")));
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
        <LeaguesFav leagues={leagues} sportName={sportName} />
        <div className="matchs">
          <div className="filter-matchs">
            <input
              type="date"
              name=""
              className="inputDate"
              id=""
              onChange={(e) => handleDate(e.target.value)}
            />
            <span
              className="filter selected"
              id="Tous"
              onClick={(e) => handleFilter(e)}
            >
              Tous
            </span>
            <span
              className="filter"
              id={sportName === "basketball" ? "Game Finished" : "Finished"}
              onClick={(e) => handleFilter(e)}
            >
              Terminé
            </span>
            <span
              className="filter"
              id="En cours"
              onClick={(e) => handleFilter(e)}
            >
              En cours
            </span>
            <span
              className="filter"
              id="Not Started"
              onClick={(e) => handleFilter(e)}
            >
              Prévus
            </span>
          </div>
          <div className="list-matchs">
            {loaderMatchs ? (
              <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
              />
            ) : filterMatch !== "Tous" ? (
              <>
                {matchs
                  ?.filter((match) => match.status.long === filterMatch)
                  .map((match) => match).length > 0 ? (
                  matchs
                    ?.filter((match) => match.status.long === filterMatch)
                    .map((match) => {
                      return (
                        <Match
                          match={match}
                          sport={sportName}
                          key={match.fixture.id}
                        ></Match>
                      );
                    })
                ) : (
                  <span className="info-match">
                    Aucun match avec ce filtre trouvé à cette date
                  </span>
                )}
              </>
            ) : matchs.length > 0 ? (
              <>
                {matchs?.map((match) => {
                  return (
                    <Match
                      match={match}
                      sport={sportName}
                      key={match.fixture.id}
                    ></Match>
                  );
                })}
              </>
            ) : (
              matchs.length === 0 && (
                <span className="info-match">
                  Aucun match trouvé à cette date : {dateMatch}{" "}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default League;
