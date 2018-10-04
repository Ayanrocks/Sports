import { combineReducers } from "redux";
import getLeagueData from "./getLeagueData";
import getCompetitionData from "./getCompetitionData";
import getTeamData from "./getTeamData";

export default combineReducers({
  league: getLeagueData,
  competition: getCompetitionData,
  teams: getTeamData
});
