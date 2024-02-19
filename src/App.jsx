import { Navbar, Home , About, Teacher, Courses,Footer} from './Components/index'
import Signup from './Components/Container/Signup/Signup'
import './App.css'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom"

function App() {
  

  return (
    <Router className='font-Poppins bg-Solitude'>
      <Navbar />
      <Signup/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/Courses' element={<Courses/>} />
        <Route path='/Teacher' element={<Teacher/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
