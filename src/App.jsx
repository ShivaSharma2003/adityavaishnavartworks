import "./App.css";
import BackgroundVideo from "../src/Assets/Untitled 31_1080p.mp4";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App h-[100vh] w-[100vw] relative overflow-hidden flex flex-col justify-center items-center py-4 ">
      <div className="background-overlay">
        <video className="background-video" loop autoPlay muted>
          <source src={BackgroundVideo} />
        </video>
      </div>
      <div className="flex flex-col h-full w-[90vw] bg-black opacity-75 px-6 py-4 ">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
