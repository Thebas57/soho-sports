export const footApiUrl = "https://v3.football.api-sports.io/";

// Leagues en France
export const getLeaguesFoot = {
  method: "get",
  url: footApiUrl+"leagues?current=true&country=france",
  headers: {
    "x-rapidapi-key": "623a51732218e67e6cc2226891a30545",
    "x-rapidapi-host": "v3.football.api-sports.io",
  },
};
