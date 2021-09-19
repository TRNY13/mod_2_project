import React, { useState, useEffect} from 'react'
import axios from 'axios'
import "./App.css";
import DogPics from "./DogPics";

function App() {
  
  // Right here I am initializing my state
  // This is where all of the dog photos will be
  // called and stored, passing them from React
  // to our App Component


  const [dogs,setDogs] = useState([])

  const [search,setSearch] = useState("")

  useEffect(() => {
    const helperFunction = () => {
      
          axios.get(`https://dog.ceo/api/breed/hound/images/8`)
          .then(response => setDogs(response.data.message))
          .catch(error => console.log(error))
         
      
    }
    helperFunction()
  },[])

  // const state = {
  //   message: "",
  //   dogs: [],

  // };

  // const handleChange = (event) => {
  //   setDogs({ message: event.target.value });
  // };

  //this.state.dogs.map

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch(`https://dog.ceo/api/breed/${search}/images`)
      .then((response) => response.json())
      .then((data) => {
        setDogs(
          data.message
        );
      });
  };

  
  // render( 
    
    return (
      <div>
        <div id="header">Dog search</div>

        

        <form onSubmit ={handleSubmit}>
          <label htmlFor="Breed">Breed:</label>
          <input
            // id="Breed"
            // type="text"
            // value={this.state.message}
            onChange={e=>setSearch(e.target.value)}
            // onChange={this.handleChange}
          />
          <button type="submit" >Submit</button>
        </form>
      <DogPics dogs={dogs} />
      </div>
    
    );
  }


export default App;

// I'm using componentDidMount() a React life cycle
// method to fetch the data from the API (HTTP REQUEST)
// I put a 6 at the end off the call URL to get at least
// 6 images
// .then() is a promise based function, response receives
// the promise, and turns it into a JSON object
// I am assigning the dogs object the value of the data
// retrieved from json
// this.setState({loading: true})

