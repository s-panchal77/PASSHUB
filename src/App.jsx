import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'

function App() {

  return (
    <div className="min-h-screen bg-gradient-to-t from-[#000000] to-[#576983]">
      {/* [#5b6a8b]  to-[#334155] */}
      <Navbar/>
      <Manager/>
    </div>
  )
}

export default App
