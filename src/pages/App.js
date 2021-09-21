// My imports
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Header from "../components/Header"
//My Pages
import DogPics from "../DogPics";
import Home from "./Home";
import About from "./Breeds";


function App() {
  const [dogs, setDogs] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    const helperFunction = () => {

      // used axios to call the url and get the 3 random dog images for the home screen
      
      axios.get(`https://dog.ceo/api/breed/hound/images/random/3`)
          .then(response => setDogs(response.data.message))
          .catch(error => console.log(error))

    };
    helperFunction();
  }, []);


  // my fetch call within this handleSubmit function has a search portion for the user to
  // type in whatever dog they choose

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch(`https://dog.ceo/api/breed/${search}/images/random/4`)
      .then((response) => response.json())
      .then((data) => {
        setDogs(
          data.message
        );
      });
  };

  return (
    <div id="app">

      {/* Nav & header are at the top for positioning and semantics. */}

      <NavBar />
      <Header />
      

      <div className="form-containter">
      <form onSubmit={handleSubmit}>
        
        <label htmlFor="Breed"></label>
        <input onChange={(e) => setSearch(e.target.value)} />
        <button type="submit">Submit</button>
        <DogPics dogs={dogs} />
      </form>
      </div>

      {/* Below right here is all of the pathing for my Navigation bar */}

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/breeds">
          <About />
        </Route>
      </Switch>
      <Footer />

    </div>
    
  );
}

export default App;

// These are notes from when I was using class components.
// Right here I am initializing my state
// This is where all of the dog photos will be
// called and stored, passing them from React
// to our App Component
// const state = {
//   message: "",
//   dogs: [],
// };
// const handleChange = (event) => {
//   setDogs({ message: event.target.value });
// };
//this.state.dogs.map
// I'm using componentDidMount() a React life cycle
// method to fetch the data from the API (HTTP REQUEST)
// I put a 6 at the end off the call URL to get at least
// 6 images
// .then() is a promise based function, response receives
// the promise, and turns it into a JSON object
// I am assigning the dogs object the value of the data
// retrieved from json
// this.setState({loading: true})
