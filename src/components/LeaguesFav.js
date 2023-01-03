import React, { useEffect, useState } from "react";

const LeaguesFav = ({ leagues }) => {
  const [reload, setReload] = useState(false);

  //Ajoute les favs / unfavs dans le localSotrage
  const handleFav = (e, leagueID) => {
    ajouterSupprimerId(leagueID);
    handleStorageChange();
  };

  // Permet d'jaouter ou supprimer une league dans le tableau du localSotrage
  function ajouterSupprimerId(id) {
    // Récupérez le tableau du localStorage sous forme de chaîne de caractères
    const tableauString = localStorage.getItem("leagueFavs");

    let tableau;
    if (tableauString) {
      // Si le tableau existe déjà, convertissez-le en un tableau d'objets
      tableau = JSON.parse(tableauString);
    } else {
      // Sinon, créez un nouveau tableau vide
      tableau = [];
    }

    // Recherchez l'identifiant dans le tableau
    const index = tableau.indexOf(id);

    if (index === -1) {
      // Si l'identifiant n'est pas dans le tableau, ajoutez-le
      tableau.push(id);
    } else {
      // Sinon, supprimez-le du tableau
      tableau.splice(index, 1);
    }

    // Enregistrez le tableau de nouveau dans le localStorage sous forme de chaîne de caractères
    localStorage.setItem("leagueFavs", JSON.stringify(tableau));
  }

  //Pour recharger les favoris leagues
  function handleStorageChange() {
    setReload(true);
  }

  useEffect(() => {
    if (reload) setReload(false);
  }, [reload]);

  return (
    <div className="list-leagues">
      <h5>
        {" "}
        <img src="./img/like.png" alt="" /> Mes ligues
      </h5>
      <hr />
      {leagues.map((league) => {
        return (
          <>
            <div key={league.league.id} className="leagueFav">
              <span>{league.league.name}</span>
              {localStorage.getItem("leagueFavs") &&
              JSON.parse(localStorage.getItem("leagueFavs")).indexOf(
                league.league.id
              ) === -1 ? (
                <img
                  src="./img/nolike.png"
                  alt="nolike"
                  className="nolike"
                  onClick={(e) => handleFav(e, league.league.id)}
                />
              ) : (
                <img
                  src="./img/like.png"
                  alt="like"
                  className="like"
                  onClick={(e) => handleFav(e, league.league.id)}
                />
              )}
            </div>
            <br />
          </>
        );
      })}
    </div>
  );
};

export default LeaguesFav;
