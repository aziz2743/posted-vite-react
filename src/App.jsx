import PostsList from "./components/PostsList"
import MainHeader from "./components/MainHeader"
import './App.css'
import { useState } from "react";

const listAuth = [
                  {author: 'Isam', body: 'Good Coding'},
                  {author: 'Dedyl', body: 'Roblox 101'},
                  {author: 'Aziz', body: 'C++ 101'} 
                ]
const newAuth = {author: '', body: ''}
let tempList = []

function App() {
  const [modalIsVisible, setModalisVisible] = useState(true)

  function showModalHandler() {
    setModalisVisible(true)
  }

  function hideModalHandler() {
    setModalisVisible(false)
  }
  
  function addNewPostHandler(event){
    event.preventDefault()
    let authCopy = JSON.parse(JSON.stringify(newAuth))
    listAuth.push(authCopy)
    setModalisVisible(false)
  }

  return (
   <>
    <MainHeader onCreatePost={showModalHandler}/>
    <main>
      <PostsList 
        listAuth={listAuth} 
        newAuth={newAuth} 
        isPosting={modalIsVisible}
        onNewPost={addNewPostHandler} 
        onStopPosting={hideModalHandler} />
    </main>
   </> 
    )
}

export default App;
