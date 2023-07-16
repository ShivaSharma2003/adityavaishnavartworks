import "./App.css";
import BackgroundVideo from "../src/Assets/Untitled 31_1080p.mp4";
import Navbar from "./Components/Navbar";
import TypewriterComponent from "typewriter-effect";

function App() {
  return (
    <div className="App h-[100vh] w-[100vw] relative overflow-hidden flex flex-col justify-center items-center py-4 ">
      <div className="background-overlay">
        <video className="background-video" loop autoPlay muted>
          <source src={BackgroundVideo} />
        </video>
      </div>
      <div className="flex flex-col h-full w-[90vw] bg-black opacity-75 px-6 py-4 overflow-y-scroll scrollbar-hide">
        <Navbar />
        <div className="flex flex-row w-full justify-between text-white my-6 py-4">
          <div className="flex-[0.8] flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold ">
              <TypewriterComponent
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Hi This is Aditya Vaishanv.")
                    .pauseFor(100)
                    .deleteAll()
                    .typeString("Welcome to AadityaVaishnavartworks")
                    .start();
                }}
              />
            </h1>
            <h4 className="font-semibold ">
              <TypewriterComponent
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(12000)
                    .typeString(
                      "lorem hello world this is aditya waishnav nice to meet find out my new Sketches and exibithions et. etc."
                    )
                    .start();
                }}
              />
            </h4>
          </div>
          <div>Right Side of the about</div>
        </div>
      </div>
    </div>
  );
}

export default App;
