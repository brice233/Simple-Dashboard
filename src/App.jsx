import { useState } from 'react'
import './App.css'
import Home from './Home'
import Sidebar from './Sidebar'
import Header from './Header'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
    <Header OpenSidebar={OpenSidebar} />
    <Home />
    <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
    </div>
  )
}

export default App
