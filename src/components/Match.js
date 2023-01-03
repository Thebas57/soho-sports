import React from "react";

const Match = ({ match, sport }) => {
  // fonction qui retourne la date et l'heure en fonction d'un code timestamp
  const returnDate = (timestamp) => {
    const date = new Date(timestamp * 1000);

    let formattedDate = date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "UTC",
    });

    return formattedDate;
  };

  //Tableau état des matchs
  const stateMatch = {
    "Not Started" : "Prévus",
    "Game Finished" : "Terminé",
    "Finished" : "Terminé"
  }

  

  return (
    <div className="match-detail">
      <div className="horaire">{returnDate(match.fixture.timestamp)}</div>
      <div className="state">{stateMatch[match.fixture.status.long]}</div>
      <div className="resultat">
        <span className="logo-ekip">
          <img src={match.teams.home.logo} alt="logo-home" />
        </span>
        <span>{match.teams.home.name}</span>
        {sport === "basketball" && (
          <>
            <span>{match.scores.home.total}</span>
            <span> - </span>
            <span>{match.scores.away.total}</span>
          </>
        )}
        {(sport === "rugby" || sport === "volley") && (
          <>
            <span>{match.scores.home}</span>
            <span> - </span>
            <span>{match.scores.away}</span>
          </>
        )}
        {sport === "foot" && (
          <>
            <span>{match.goals.home}</span>
            <span> - </span>
            <span>{match.goals.away}</span>
          </>
        )}
        <span>{match.teams.away.name}</span>
        <span className="logo-ekip">
          <img src={match.teams.away.logo} alt="logo-home" />
        </span>
      </div>
    </div>
  );
};

export default Match;
