import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHash } from '../../utils';
import { spotifyAuthCheck } from '../../_services';

import { handleToken, handleUserId } from '../../redux/generalActions';

import './home.scss';

const Home = () => {
  const { token, userId } = useSelector((state) => state.generalData);
  const dispatch = useDispatch();

  console.log(token, userId);

  useEffect(() => {
    let hash = getHash();
    let _token = hash.access_token;
    _token ? dispatch(handleToken(_token)) : spotifyAuthCheck();
  }, [dispatch]);

  useEffect(() => {
    if (token) dispatch(handleUserId());
  }, [token, dispatch]);

  // const searchForRelatedArtists = async () => {
  //   const id = await fetchArtistID();
  //   const URL = `https://api.spotify.com/v1/artists/${id}/related-artists`;
  //   const config = requestConfig(URL, "GET", token);

  //   const relatedArtists = await axios(config);
  // }

  // const fetchArtistID = async () => {
  //   const f_artist = encodeURIComponent(artist);
  //   let searchURL = `https://api.spotify.com/v1/search?q=${f_artist}&type=artist`;

  //   const config = requestConfig(searchURL, "GET", token);
  //   const response = await axios(config);
  //   return response.data.artists.items[0].id;
  // }

  return (
    <div className="home-wrapper">
      {/* <div className="main-search">
        <input onChange={(e) => setArtist(e.target.value)} value={artist} type="text" placeholder="Enter an Artist" />
        <button onClick={fetchUserData} type="submit">SUBMIT</button>
      </div> */}
    </div>
  );
};

export default Home;
