import { combineReducers } from "redux";
import getLeagueData from "./getLeagueData";
import getFixtureData from "./getFixtureData";
import getCurrData from "./getCurrData";

export default combineReducers({
  league: getLeagueData,
  fixture: getFixtureData,
  current: getCurrData
});
