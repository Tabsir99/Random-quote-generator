import './App.scss'
import Header from './Header.jsx'
import MainBody from './body.jsx'
import { useState } from "react";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  
  function handleClick() {
    setIsClicked(!isClicked)
  }
  return (
    <>

      <Header handleClick = {handleClick}/>

      <MainBody favIsClicked={isClicked} handleClick={handleClick}/>
    </>
  );
}

export default App;