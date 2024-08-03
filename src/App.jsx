import PostsList from "./components/PostsList"
import './App.css'

const ListAuth = [
                  {author: 'Isam', body: 'Good Coding'},
                  {author: 'Dedyl', body: 'Roblox 101'},
                  {author: 'Aziz', body: 'C++ 101'} 
                ]

function App() {
  return <main>
      <PostsList ListAuth={ListAuth} />
  </main>
  
}

export default App;
