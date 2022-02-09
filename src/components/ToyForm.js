import React,{ useState } from "react";

function ToyForm({ handleToySubmission }) {

const [name, setName] = useState()
const [img, setImg] = useState()

function onToySubmission(e){
  e.preventDefault(); 
  
  fetch("http://localhost:3001/toys/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
        {
          name: name,
          img: img,
        }
    ),
  })

    .then((r) => r.json())
    .then((newToy) => handleToySubmission(newToy)); //renders the DOM
}

  return (
    <div className="container">
      <form onSubmit={onToySubmission} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          onChange={(e)=>setName(e.target.value)}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          onChange={(e)=>setImg(e.target.value)}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
