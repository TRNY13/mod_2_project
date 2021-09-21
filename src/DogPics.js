import React from "react";

import Dogs from "./Dogs";

// using a functional component since I won't
// be initializing state here
// every image URL we get through props.dogs, it will map through
// and create a Dogs component
// I assign the Dogs component the props url and assign it the value of dogURL

const DogPics = (props) => {
  console.log(props.dogs);
  // const dogsArray = props.dogs.map((dogURL) => {


  // Ava helped me clean up my code here for mapping throught the dogs array

  return (
    <div className="mainDiv">
      {props.dogs ? (
        props.dogs.map((dogURL) => {
          return <Dogs url={dogURL} />;
        })
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default DogPics;
