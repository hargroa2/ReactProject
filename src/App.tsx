import "./App.scss";
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
};
getMenu();

function App() {
  return (
    <div className="App">
      <h1>Restaurant</h1>
      <p>This is the restaurant description</p>
    </div>
  );
}

export default App;
