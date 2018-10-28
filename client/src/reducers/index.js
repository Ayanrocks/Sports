import { combineReducers } from "redux";
import getLeagueData from "./getLeagueData";
import getCompetitionData from "./getCompetitionData";
import getTeamData from "./getTeamData";
import getProfileData from "./getProfileData";
import getTeamDetail from "./getTeamDetail";
import getVideos from "./getVideos";

export default combineReducers({
  league: getLeagueData,
  competition: getCompetitionData,
  teams: getTeamData,
  profile: getProfileData,
  teamDetail: getTeamDetail,
  videos: getVideos,
});
