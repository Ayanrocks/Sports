import { combineReducers } from "redux";
import getLeagueData from "./getLeagueData";
import getCompetitionData from "./getCompetitionData";
import getTeamData from "./getTeamData";
import getProfileData from "./getProfileData";
import getTeamDetail from "./getTeamDetail";
import getVideos from "./getVideos";
import getSquadData from "./getSquadData";
import addHistory from "./addHistory";
import loggedIn from "./LoggedIn";

export default combineReducers({
  league: getLeagueData,
  competition: getCompetitionData,
  teams: getTeamData,
  profile: getProfileData,
  teamDetail: getTeamDetail,
  videos: getVideos,
  squad: getSquadData,
  path: addHistory,
  isLoggedIn: loggedIn,
});
