import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './navigaton';
import { Loading } from './components/Loader';
import { useState, useEffect } from "react";
// import $ from "jquery";




function App() {


  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500)
  })

  return (
    <div className="App">
      {isLoading === true ?
        <Loading /> : <Navigation />}
      

    </div>
  );
}

export default App;
