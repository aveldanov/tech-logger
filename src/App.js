import React, { useEffect, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import SearchBar from './components/layout/SearchBar';


const App = () => {

  useEffect(() => {
    // Initialize Materialize JS
    M.AutoInit();
  })


  return (
    <Fragment >
      <SearchBar />
      My App
    </Fragment>
  );
}

export default App;
