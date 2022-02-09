import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);

  const[toys, setToys] =useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((r) => r.json())
      .then((toyData) => setToys(toyData));
  }, []);

  function handleGoodWillButton(deletedItem){
    const updatedItems = toys.filter((toy)=> toy.id !== deletedItem ); //needs to find the toy that we don't want, filter it out, and then keep the ones we do want
    setToys(updatedItems); 
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleToySubmission(newToy){
    setToys([...toys,newToy]) //adds the new toy to the end of the toy data (POST)
  }

  function handleUpdatedToy(updatedToy){
    const updatedToys = toys.map((toy) => {
      if(toy.id === updatedToy.id){ //needs unique ID to compare the new toy with the old toy currently in the JSON
        return updatedToy
      } else {
        return toy //id not needed here because we want the toy itself 
      }
    })
    //adds the new toy to the end of the toy data (POST)
    setToys(updatedToys)
  }

  

  return (
    <>
      <Header />
      {showForm ? <ToyForm toys={toys} handleToySubmission={handleToySubmission} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys}  handleToyLikes={handleUpdatedToy} handleGoodWillButton={handleGoodWillButton}/>
    </>
  );
}

export default App;
