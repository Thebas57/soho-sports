import axios from "axios";

export const footApiUrl = "https://v3.football.api-sports.io/";
export const basketApiUrl = "https://v1.basketball.api-sports.io/";
export const rugbyApiUrl = "https://v1.rugby.api-sports.io/";
export const volleyApiUrl = "https://v1.volleyball.api-sports.io/";

// Leagues foot en France
export const getLeaguesFoot = {
  method: "get",
  url: footApiUrl + "leagues?current=true&country=france",
  headers: {
    "x-rapidapi-key": "623a51732218e67e6cc2226891a30545",
    "x-rapidapi-host": "v3.football.api-sports.io",
  },
};

// Leagues basket en France
export const getLeaguesBasket = {
  method: "get",
  url: basketApiUrl + "leagues?country=france",
  headers: {
    "x-rapidapi-key": "623a51732218e67e6cc2226891a30545",
    "x-rapidapi-host": "v1.basketball.api-sports.io",
  },
};

// Leagues rugby en France
export const getLeaguesRugby = {
  method: "get",
  url: rugbyApiUrl + "leagues?country=france",
  headers: {
    "x-rapidapi-key": "623a51732218e67e6cc2226891a30545",
    "x-rapidapi-host": "v1.rugby.api-sports.io",
  },
};

// Leagues volley en France
export const getLeaguesVolley = {
  method: "get",
  url: volleyApiUrl + "leagues?country=france",
  headers: {
    "x-rapidapi-key": "623a51732218e67e6cc2226891a30545",
  },
};

export const makeRequest = (sport, url, date) => {
  if (sport === "foot") {
    if (date === undefined) {
      return axios({
        url: `https://v3.football.api-sports.io/fixtures?next=10&league=${url}&timezone=Europe/Paris`,
        method: "get",
        headers: {
          "x-rapidapi-key": "623a51732218e67e6cc2226891a30545",
          "x-rapidapi-host": "v3.football.api-sports.io",
        },
      });
    } else {
      return axios({
        url: `https://v3.football.api-sports.io/fixtures?league=${url}&timezone=Europe/Paris&date=${date}&season=2022`,
        method: "get",
        headers: {
          "x-rapidapi-key": "623a51732218e67e6cc2226891a30545",
          "x-rapidapi-host": "v3.football.api-sports.io",
        },
      });
    }
  } else if (sport === "basketball") {
    console.log("ici : ", date);
    if (date === undefined) {
      return axios({
        url: `https://v1.basketball.api-sports.io/games?league=${url}&timezone=Europe/Paris&season=2021-2022`,
        method: "get",
        headers: {
          "x-rapidapi-key": "623a51732218e67e6cc2226891a30545",
          "x-rapidapi-host": "v1.basketball.api-sports.io",
        },
      });
    } else {
      return axios({
        url: `https://v1.basketball.api-sports.io/games?league=${url}&timezone=Europe/Paris&date=${date}&season=2021-2022`,
        method: "get",
        headers: {
          "x-rapidapi-key": "623a51732218e67e6cc2226891a30545",
          "x-rapidapi-host": "v1.basketball.api-sports.io",
        },
      });
    }
  } else if (sport === "rugby") {
    if (date === undefined) {
      return axios({
        url: `https://v1.rugby.api-sports.io/games?league=${url}&timezone=Europe/Paris&season=2022`,
        method: "get",
        headers: {
          "x-rapidapi-key": "623a51732218e67e6cc2226891a30545",
        },
      });
    } else {
      return axios({
        url: `https://v1.rugby.api-sports.io/games?league=${url}&timezone=Europe/Paris&date=${date}&season=2022`,
        method: "get",
        headers: {
          "x-rapidapi-key": "623a51732218e67e6cc2226891a30545",
        },
      });
    }
  } else if (sport === "volley") {
    if (date === undefined) {
      return axios({
        url: `https://v1.volleyball.api-sports.io/games?league=${url}&timezone=Europe/Paris&season=2022`,
        method: "get",
        headers: {
          "x-rapidapi-key": "623a51732218e67e6cc2226891a30545",
        },
      });
    } else {
      return axios({
        url: `https://v1.volleyball.api-sports.io/games?league=${url}&timezone=Europe/Paris&date=${date}&season=2022`,
        method: "get",
        headers: {
          "x-rapidapi-key": "623a51732218e67e6cc2226891a30545",
        },
      });
    }
  }
};
