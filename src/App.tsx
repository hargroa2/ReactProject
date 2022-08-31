import "../src/styles/App.scss";
import ReactPlayer from "react-player";
// import bartender from "./assets/bartender.mp4";
// import { useSelector, useDispatch } from "react-redux";

//====== API SETUP: SPOONACULAR ======
// const dispatch = useDispatch();
// const weather = useSelector((state) => state.weather);
// const location = useSelector((state) => state.location);

const getMenu = async () => {
  // const url = `https://api.spoonacular.com/recipes/716429/information?includeNutrition=false&apiKey=1f2d52a685a94971b0c0fb6a9ff42a39`;
  //https://api.spoonacular.com/food/menuItems/search?query=burger&number=2&apiKey=1f2d52a685a94971b0c0fb6a9ff42a39
  // const menuJson = await fetch(url);
  // const json = await menuJson.json();
  // dispatch({ type: "SET_MENU", payload: json });
  // console.log(json);
  // ====== COCKTAILS API ======
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "8bdd6ac647mshec06c3605007861p14466bjsn68a802965e6a",
  //     "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
  //   },
  // };
  // fetch(
  //   "https://the-cocktail-db.p.rapidapi.com/filter.php?c=Ordinary_Drink",
  //   options
  // )
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((err) => console.error(err));
};
getMenu();

function App() {
  return (
    <div className="App">
      <ReactPlayer url="bartender.mp4" loop muted playing className="video" />
      {/* <div className="text">
        <h1>Your Home Away From Home</h1>
        <p>Lorem ipsum all of that jazz</p>
        <a href="#" className="order-button">
          Order Now
        </a>
      </div> */}
    </div>
  );
}

export default App;
