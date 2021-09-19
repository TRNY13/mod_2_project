import React from 'react';


// This component is set as a functional component as well since it
// wont be using state. 
// Used in-line styling here to create the width& height of the pictures when displayed


const Dogs = (props) => {
    
        return (
            <div className="dogChild">
               <img style={{ width: 250, height: 250 }} src={props.url}/>
            </div>
        );
    }


export default Dogs