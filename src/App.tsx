import "../src/styles/App.scss";
import ReactPlayer from "react-player";
import Navbar2 from "./components/Navbar2";

function App() {
  return (
    <div className="App">
      <Navbar2 />
      <ReactPlayer url="homevideo.mp4" loop muted playing className="video" />
    </div>
  );
}

export default App;
