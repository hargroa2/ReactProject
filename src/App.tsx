import React from "react";
import "./App.scss";

//====== API SETUP ======
// findMovie = async (e) => {
//   const response = await fetch(
//     `http://www.omdbapi.com/?s=${searchTerm}&apikey=31738fd0`
//   );
//   const json = await response.json();
//   setMovies(json.Search);
//   console.log(json);
// };

function App() {
  return (
    <div className="App">
      <h1>Restaurant</h1>
      <p>This is the restaurant description</p>
    </div>
  );
}

export default App;
