import { combineReducers } from "redux";
import getLeagueData from "./getLeagueData";
import getFixtureData from "./getFixtureData";

export default combineReducers({
  league: getLeagueData,
  fixture: getFixtureData
});
