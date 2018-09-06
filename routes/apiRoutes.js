const request = require("request");
const keys = require("../config/keys");

module.exports = app => {
  app.get("/api/get_league_data", (req, res) => {
    request(
      {
        url: "http://api.football-data.org/v2/competitions/2000/leagueTable",
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
        url: "http://api.football-data.org/v2/competitions/2000/fixtures",
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
  app.post("/api/getTeamData", (req, res) => {
    request(
      {
        url: req.body.url,
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

  app.get("/api/get_competition_data", (req, res) => {
    request(
      {
        url: "http://api.football-data.org/v2/competitions",
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
