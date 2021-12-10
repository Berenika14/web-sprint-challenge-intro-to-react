import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./components/Character";
import "./App.css";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [starWars, setStarWarsData] = useState([]);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`https://swapi.dev/api/people`)
        .then((res) => {
          console.log(res);
          setStarWarsData(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {starWars.map((el, i) => {
        return (
          <Character
            key={`${i}`}
            charactersName={el.name}
            year={el.birth_year}
          />
        );
      })}
    </div>
  );
};

export default App;
