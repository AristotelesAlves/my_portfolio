import { Header } from "./components/Header"
import { Nav } from "./components/Nav"
import { Post } from "./components/Post"

function App() {
  
  return (
    <div className="flex flex-col items-center w-full h-full">
      <Header/>
      <Nav/>
      <Post/>
    </div>
  )
}

export default App
