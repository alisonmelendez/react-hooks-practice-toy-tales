import React from "react";

function ToyCard({ id, name, image, likes, onHandleGoodWillButton, handleToyLikes }) {
  
  function onGoodWillButtonClick(){
    //add the id to the end of the fetch url 
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onHandleGoodWillButton(id));
  }

  function onLikeButtonClick(){
  fetch(`http://localhost:3001/toys/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
        {
          likes: likes + 1
        }
    ),
  })

    .then((r) => r.json())
    .then((toy) => handleToyLikes(toy)); //renders the DOM
}


  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={onLikeButtonClick} className="like-btn">Like {"<3"}</button>
      <button onClick={onGoodWillButtonClick} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
