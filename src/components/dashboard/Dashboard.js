import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// COMPONENTS
import Footer from "../footer/Footer";
import Loading from "../reusable/loading/Loading";

// SERVICES
import { handleToken, handleUserInfo } from '../../redux/generalActions';
import { handleTopTracks, handleRecentlyPlayed, handleUserLibrary, handleTopTracksPopularity } from "./dashboardActions";

import { getHashParams, SPOTIFY_AUTH_URL } from "../../utils/general";
import { calcTopTrackPopularity } from "../../utils/library";

// STYLES
import './dashboard.scss';

const hash = getHashParams();
console.log(hash);

const Dashboard = () => {
  const { token, userId, displayName } = useSelector(state => state.generalData);
  const { topTracks, recentlyPlayed, userLibrary, isLoading } = useSelector(state => state.dashboardData);
  const dispatch = useDispatch();

  useEffect(() => {
    let _token = hash.access_token;
    if (_token) dispatch(handleToken(_token));
  }, []);

  useEffect(() => {
    dispatch(handleUserInfo);
  }, [token]);

  useEffect(() => {
    if (!userId) return

    dispatch(handleTopTracks);
    dispatch(handleRecentlyPlayed);
    dispatch(handleUserLibrary);
  }, [userId]);

  useEffect(() => {
    if (!topTracks.length) return;
    const trackPopularity = calcTopTrackPopularity(topTracks);
    console.log(trackPopularity)
    dispatch(handleTopTracksPopularity(trackPopularity))
  }, [topTracks])

  const Login = () => (
    <div className="login-wrapper">
      <h1>Library Analyzer</h1>
      <a href={`${SPOTIFY_AUTH_URL}`}>Login to Spotify</a>
    </div>
  )

  return (
    <div className="dashboard-wrapper">
      {!token ? <Login /> : (
        <div className="content-wrapper">
          <header>
            <h4>{displayName}</h4>
            <button className="logout">LOGOUT</button>
          </header>
          <div className="dashboard">
            {isLoading && <Loading />}
            {topTracks.length && (
              <ul>
                {topTracks.map(track => (
                  <li>{track.name}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
      <Footer />
    </div>
  )
};

export default Dashboard;