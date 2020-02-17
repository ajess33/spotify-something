import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// COMPONENTS
import Footer from "../footer/Footer";

// SERVICES
import { handleToken, handleUserId } from '../../redux/generalActions';
import { handleTopTracks, handleRecentlyPlayed, handleUserLibrary } from "./dashboardActions";

import { getHashParams, SPOTIFY_AUTH_URL } from "../../utils";

// STYLES
import './dashboard.scss';

const hash = getHashParams();

const Dashboard = () => {
  const { token, userId } = useSelector(state => state.generalData);
  const dispatch = useDispatch();

  useEffect(() => {
    let _token = hash.access_token;
    if (_token) dispatch(handleToken(_token));
  }, []);

  useEffect(() => {
    dispatch(handleUserId());
  }, [token]);

  useEffect(() => {
    if (!userId) return

    dispatch(handleTopTracks);
    dispatch(handleRecentlyPlayed);
    dispatch(handleUserLibrary);
  }, [userId]);

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
            <h4>Dashboard</h4>
            <button className="logout">LOGOUT</button>
          </header>
        </div>
      )}
      <Footer />
    </div>
  )
};

export default Dashboard;