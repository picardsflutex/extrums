import React from "react"
import './styles/pages/App.css'
import FreshIdeas from "./components/sections/FreshIdeas"
import MyIdeas from "./components/sections/MyIdeas"
import Achievements from "./components/sections/Achievements"
import Completed from "./components/sections/Completed"
import '../node_modules/slick-carousel/slick/slick.css'
import '../node_modules/slick-carousel/slick/slick-theme.css'


function App() {
  return (
    <div className="App">
      <FreshIdeas/>
      <MyIdeas/>
      <Achievements/>
      <Completed/>
    </div>
  );
}

export default App;