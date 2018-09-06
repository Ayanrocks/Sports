import axios from "axios";
import { GET_LEAGUE_DATA, GET_FIXTURE_DATA, GET_CURR_DATA, GET_COMPETITION_DATA } from "./type";

//! ----------------Functions---------------

function tierFilter(data){
  return data.competitions.filter(val => {
      return val.plan === 'TIER_ONE';
  });
}

function filterArrayTimed(data) {
  return data.fixtures
    .filter(val => {
      return val.status === "TIMED";
    })
    .slice(0, 1);
}

function filterArrayCurr(data) {
  return data.fixtures.filter(val => {
    return val.status === "IN_PLAY";
  });
}

function combineData(details, homeFlag, awayFlag) {
  return {
    homeTeamName: details.homeTeamName,
    awayTeamName: details.awayTeamName,
    goalsAwayTeam: details.result.goalsAwayTeam,
    goalsHomeTeam: details.result.goalsHomeTeam,
    homeFlag: homeFlag,
    awayFlag: awayFlag
  };
}

async function getData(filteredData) {
  const homeTeamDetails = await axios.post("/api/getTeamData", {
    url: filteredData[0]._links.homeTeam.href
  });
  const homeTeamFlag = homeTeamDetails.data.crestUrl;
  const awayTeamDetails = await axios.post("/api/getTeamData", {
    url: filteredData[0]._links.awayTeam.href
  });
  const awayTeamFlag = awayTeamDetails.data.crestUrl;

  const finalData = combineData(filteredData[0], homeTeamFlag, awayTeamFlag);
  return finalData;
}

//! -----------------EXPORTS---------------

export const getLeagueData = () => async dispatch => {
  // const res = await axios.get("/api/get_league_data");
  // dispatch({ type: GET_LEAGUE_DATA, payload: res.data });
};

export const getFixtureData = () => async dispatch => {
  // const res = await axios.get("/api/get_fixture_data");
  // // console.log(res.data);
  // const filteredData = filterArrayTimed(res.data);
  // const finalData = await getData(filteredData);
  // dispatch({ type: GET_FIXTURE_DATA, payload: finalData });
};

export const getCurrentData = () => async dispatch => {
  // const res = await axios.get("/api/get_fixture_data");
  // const filteredData = filterArrayCurr(res.data);
  // if (filteredData.length === 0) {
  //   dispatch({ type: GET_CURR_DATA, payload: null });
  // } else {
  //   const finalData = await getData(filteredData);
  //   dispatch({ type: GET_CURR_DATA, payload: finalData });
  // }
};

export const getCompetitionData = () => async dispatch => {
  const res = await axios.get("/api/get_competition_data");

  const tierData = tierFilter(res.data);
  console.log(tierData);
  dispatch({type: GET_COMPETITION_DATA, payload: tierData})
}