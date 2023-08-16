// import './App.css';
import EventDetail from './components/EventDetail'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Faqs from './pages/Faqs'
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import EventForm from './pages/EventForm'
import { AuthContext } from './features/AuthContext'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Announcements from './components/Announcements'

function App () {
  const [allEvent, setAllEvent] = useState([])
  const [user, setUser] = useState(localStorage.getItem('user'))

  return (
    <div className='App m-0 h-100'>
      {/* <Announcements /> */}
      <Router>
        <AuthContext.Provider value={{ user, setUser, allEvent, setAllEvent }}>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/faqs' element={<Faqs />} />
            <Route exact path='/events/:name' element={<EventDetail />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/events/eventform' element={<EventForm />} />
          </Routes>
        </AuthContext.Provider>
      </Router>
      <Footer />
    </div>
  )
}

export default App
