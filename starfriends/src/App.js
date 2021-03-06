import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import People from './components/People';
import Planets from './components/Planets';
import Starships from './components/Starships';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Dimmer, Loader } from "semantic-ui-react";

function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [starships, setStarships] = useState([]);
  // Loading set to true until data is present
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch('https://swapi.co/api/people/?format=json');
      let data = await res.json();
      setPeople(data.results);
      setLoading(false);
    }

    async function fetchPlanets() {
      let res = await fetch("https://swapi.co/api/planets/?format=json");
      let data = await res.json();
      setPlanets(data.results);
      setLoading(false);
    }

    async function fetchStarships() {
      let res = await fetch("https://swapi.co/api/starships/?format=json");
      let data = await res.json();
      setStarships(data.results);
      setLoading(false);
    }

    fetchPeople();
    fetchPlanets();
    fetchStarships();
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Container>
          {loading ? (
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
          ) : (
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/people">
                <People data={people} />
              </Route>
              <Route exact path="/planets">
                <Planets data={planets} />
              </Route>
              <Route exact path="/starships">
                <Starships data={starships} />
              </Route>
            </Switch>
          )}
        </Container>
      </Router>
    </>
  );
}

export default App;
