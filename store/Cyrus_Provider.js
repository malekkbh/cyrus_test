import React, { useState } from 'react';
import Cyrus_Context from './Cyrus_Context';

var timer = null;
const Cyrus_Provider = (props) => {

  const [movies, setMovies] = useState([]);
  const [moviesToDisplay, setMoviesTodisplay] = useState([]);
  const [choosenGeners, setChoosenGeners] = useState([]);

  return (
    <Cyrus_Context.Provider
      value={{
        movies: movies,
        setMovies: (val) => setMovies(val),
        moviesToDisplay: moviesToDisplay,
        setMoviesTodisplay: (val) => setMoviesTodisplay(val),
        choosenGeners: choosenGeners,
        setChoosenGeners: (val) => setChoosenGeners(val),
      }}>
      {props.children}
    </Cyrus_Context.Provider>
  );
};

export default Cyrus_Provider;
