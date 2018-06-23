const request = require("request");
const keys = require("../config/keys");

module.exports = app => {
  app.get("/api/get_league_data", (req, res) => {
    request(
      {
        url: "http://api.football-data.org/v1/competitions/467/leagueTable",
        headers: {
          "X-Auth-Token": keys.footballAPIKey
        }
      },
      (err, data) => {
        var data = JSON.parse(data.body);
        res.send(data);
      }
    );
  });

  app.get("/api/get_fixture_data", (req, res) => {
    request(
      {
        url: "http://api.football-data.org/v1/competitions/467/fixtures",
        headers: {
          "X-Auth-Token": keys.footballAPIKey
        }
      },
      (err, data) => {
        var data = JSON.parse(data.body);
        res.send(data);
      }
    );
  });
};
