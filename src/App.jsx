import { Outlet } from 'react-router-dom'
import Navbar from './Componenets/Navbar/Navbar'
import Footer from './Componenets/Footer/Footer'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}