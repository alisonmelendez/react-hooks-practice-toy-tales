import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, handleGoodWillButton, handleToyLikes }) {


  

  return (
    <div id="toy-collection">
      {/* Render the collection of ToyCards */}
      {toys.map((toy)=>{
          return <ToyCard 
                  key={toy.id} 
                  id={toy.id} 
                  name={toy.name} 
                  image={toy.image} 
                  likes={toy.likes} 
                  onHandleGoodWillButton={handleGoodWillButton}
                  handleToyLikes = {handleToyLikes}
                />
      })}
    </div>
  );
}

export default ToyContainer;
