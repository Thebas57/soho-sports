import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  getLeaguesBasket,
  getLeaguesFoot,
  getLeaguesRugby,
  getLeaguesVolley,
} from "../api/foot-api";
import { ColorRing } from "react-loader-spinner";

const Leagues = (props) => {
  const [leagues, setLeagues] = useState([]);
  const [sportName, setSportName] = useState();
  const [loaderLeagues, setLoaderLeagues] = useState(true);

  // Créer un tableau de leagues en fonction du sport
  const loadLeagues = (sport) => {
    if (sport === "foot") {
      axios(getLeaguesFoot)
        .then(function (response) {
          let res = response.data.response;
          //gestion des favs
          for (const element of res) {
            // On ajoute attribut fav si la league est favorite
            if (
              localStorage.getItem("leagueFavs") &&
              JSON.parse(localStorage.getItem("leagueFavs")).indexOf(
                element.league.id
              ) !== -1
            )
              element.league.fav = true;
          }

          //On retrie le tableau en ajoutant les favoris en premier
          res = res
            .map((item) => item)
            .sort((a, b) =>
              a.league.fav === b.league.fav ? 0 : a.league.fav ? -1 : 1
            );
          setLeagues(res);
          localStorage.setItem(
            "leagues",
            JSON.stringify(response.data.response)
          );
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
            element.league = {
              name: element.name,
              logo: element.logo,
              id: element.id,
            };
            // On ajoute attribut fav si la league est favorite
            if (
              localStorage.getItem("leagueFavs") &&
              JSON.parse(localStorage.getItem("leagueFavs")).indexOf(
                element.id
              ) !== -1
            )
              element.league.fav = true;
          }
          //On retrie le tableau en ajoutant les favoris en premier
          res = res
            .map((item) => item)
            .sort((a, b) =>
              a.league.fav === b.league.fav ? 0 : a.league.fav ? -1 : 1
            );
          setLeagues(res);
          localStorage.setItem("leagues", JSON.stringify(res));
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
            element.league = {
              name: element.name,
              logo: element.logo,
              id: element.id,
            };
            // On ajoute attribut fav si la league est favorite
            if (
              localStorage.getItem("leagueFavs") &&
              JSON.parse(localStorage.getItem("leagueFavs")).indexOf(
                element.id
              ) !== -1
            )
              element.league.fav = true;
          }
          //On retrie le tableau en ajoutant les favoris en premier
          res = res
            .map((item) => item)
            .sort((a, b) =>
              a.league.fav === b.league.fav ? 0 : a.league.fav ? -1 : 1
            );
          setLeagues(res);
          localStorage.setItem("leagues", JSON.stringify(res));
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
            element.league = {
              name: element.name,
              logo: element.logo,
              id: element.id,
            };
            // On ajoute attribut fav si la league est favorite
            if (
              localStorage.getItem("leagueFavs") &&
              JSON.parse(localStorage.getItem("leagueFavs")).indexOf(
                element.id
              ) !== -1
            )
              element.league.fav = true;
          }
          //On retrie le tableau en ajoutant les favoris en premier
          res = res
            .map((item) => item)
            .sort((a, b) =>
              a.league.fav === b.league.fav ? 0 : a.league.fav ? -1 : 1
            );
          setLeagues(res);
          localStorage.setItem("leagues", JSON.stringify(res));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    setTimeout(() => {
      setLoaderLeagues(false);
    }, 200)
  };

  useEffect(() => {
    setLoaderLeagues(true);
    if ("name" in props.location) {
      localStorage.setItem("name", props.location.name);
      setSportName(props.location.name);
    } else setSportName(localStorage.getItem("name"));

    if (sportName !== "") loadLeagues(sportName);
  }, [props.location, sportName]);

  return (
    <>
      {leagues.length > 0 ? (
        <div className="leagues-container">
          <div className="header">
            <h1>Liste des leagues de {sportName} en France</h1>
          </div>
          <div className="list-leagues">
            {loaderLeagues ? (
              <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
              />
            ) : (
              leagues?.map((league) => {
                return (
                  <div className="league" key={league.league.name}>
                    <h5>{league.league.name}</h5>
                    {league.league.fav && (
                      <img src="./img/like.png" alt="like" className="fav" />
                    )}
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
                            name: sportName,
                          }}
                          exact
                        >
                          + d'infos
                        </NavLink>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Leagues;
