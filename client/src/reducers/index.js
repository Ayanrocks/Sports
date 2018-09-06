import { combineReducers } from "redux";
import getLeagueData from "./getLeagueData";
import getFixtureData from "./getFixtureData";
import getCurrData from "./getCurrData";
import getCompetitionData  from "./getCompetitionData";

export default combineReducers({
  league: getLeagueData,
  fixture: getFixtureData,
  current: getCurrData,
  competition: getCompetitionData
});
