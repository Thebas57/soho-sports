import axios from "axios";

export const footApiUrl = "https://v3.football.api-sports.io/";
export const basketApiUrl = "https://v1.basketball.api-sports.io/";

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

export const makeRequest = (url) => {
  return axios({
    url: `https://v3.football.api-sports.io/fixtures?next=10&league=${url}`,
    method: "get",
    headers: {
      "x-rapidapi-key": "623a51732218e67e6cc2226891a30545",
      "x-rapidapi-host": "v3.football.api-sports.io",
    },
  });
};
