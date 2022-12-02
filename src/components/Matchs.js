import React from "react";

const Matchs = (props) => {
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
        <div className="filter-match">
          <span>Trier par : </span>
          <div className="filtre">
            <div className="line-filtre">
              <div>
                <input type="radio" name="horaire" id="h-croissant" />
                <label htmlFor="h-croissant">Horaire</label>
              </div>
              <div>
                <input type="radio" name="horaire" id="h-decroissant" />
                <label htmlFor="h-decroissant">Horaire croissant</label>
              </div>
            </div>
            <div className="line-filtre">
              <div>
                <input type="radio" name="saisie" id="saisie" />
                <label htmlFor="saisie">Saisie</label>
              </div>
              <div>
                <input type="radio" name="saisie" id="non-saisie" />
                <label htmlFor="non-saisie">Non saisie</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matchs;
