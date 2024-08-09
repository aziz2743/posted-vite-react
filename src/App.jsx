import PostsList from "./components/PostsList"
import MainHeader from "./components/MainHeader"
import './App.css'
import { useState } from "react";


function App() {
  const [modalIsVisible, setModalisVisible] = useState(false)
  function showModalHandler() {
      setModalisVisible(true)
  }

  function hideModalHandler() {
      setModalisVisible(false)
  }

  
  return (
   <>
    <MainHeader onCreatePost={showModalHandler}/>
    <main>
      <PostsList 
        isPosting={modalIsVisible}
        onStopPosting={hideModalHandler} />
    </main>
   </> 
    )
}

export default App;
