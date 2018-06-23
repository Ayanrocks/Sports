import axios from "axios";
import { GET_LEAGUE_DATA, GET_FIXTURE_DATA } from "./type";

export const getLeagueData = () => async dispatch => {
  const res = await axios.get("/api/get_league_data");
  dispatch({ type: GET_LEAGUE_DATA, payload: res.data });
};

export const getFixtureData = () => async dispatch => {
  const res = await axios.get("/api/get_fixture_data");
  dispatch({ type: GET_FIXTURE_DATA, payload: res.data });
};
