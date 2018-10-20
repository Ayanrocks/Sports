const request = require("request");
const keys = require("../config/keys");

module.exports = app => {
  app.get("/api/get_league_data/:id", (req, res) => {
    request(
      {
        url: `http://api.football-data.org/v2/competitions/${req.params.id}`,
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

  app.get("/api/get_team_data/:id", (req, res) => {
    request(
      {
        url: `http://api.football-data.org/v2/competitions/${req.params.id}/teams`,
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

  //Standings Data
  app.get("/api/get_standings_data/:id", (req, res) => {
    request(
      {
        url: `http://api.football-data.org/v2/competitions/${
          req.params.id
        }/standings`,
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
