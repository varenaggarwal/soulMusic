import React, { useState } from "react";
import "./styles.css";
let soulMusicDictionary = {
  Rock: [
    { name: "Under Pressure by Queen & David Bowie", rating: "5/5" },
    { name: "Comfortably Numb by Pink Floyd", rating: "4.5/5" }
  ],
  Pop: [
    { name: "Billie Jean by Micheal Jackson", rating: "5/5" },
    { name: "Everybody by Backstreet Boys", rating: "4.5/5" }
  ],
  HipHop: [
    { name: "Rapper's Delight by Sugarhill Gang", rating: "5/5" },
    { name: "Mind Playing Tricks on Me by Gheto Boys", rating: "4.5/5" }
  ]
};
let songList = [];
let genresList = Object.keys(soulMusicDictionary);
export default function App() {
  const [currentgenre, setCurrentgenre] = useState("Rock");
  function onClickHandler(genre) {
    setCurrentgenre(genre);
  }
  return (
    <div className="App">
      <h1>Soul Music 🎼</h1>
      <div>Checkout recommendations as per genres</div>
      {genresList.map((genre) => (
        <button onClick={() => onClickHandler(genre)}>{genre}</button>
      ))}
      <hr />
      {soulMusicDictionary[currentgenre].map((song) => (
        <li>
          <div>{song.name}</div>
          <div>{song.rating}</div>
        </li>
      ))}
    </div>
  );
}
