import React from "react";

const Filter = () => {
  return (
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
        <div className="line-filtre">
          <div>
            <input type="radio" name="fin" id="finit" />
            <label htmlFor="finit">Terminé</label>
          </div>
          <div>
            <input type="radio" name="fin" id="non-finit" />
            <label htmlFor="non-finit">En cours</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
