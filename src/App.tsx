import './App.css'
import Sidebar from './components/sidebar'
import Gallery from './components/gallery'

function App() {
  return (
    <div className="App">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <Gallery />
    </div>
  )
}

export default App
