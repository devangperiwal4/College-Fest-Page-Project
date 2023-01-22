// import './App.css';
import EventDetail from './components/eventDetail'
import Footer from './components/footer'
import Navbar from './components/navbar'
import About from './pages/about'
import Contact from './pages/contact'
import Faqs from './pages/faqs'
import HomePage from './pages/homePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import Register from './pages/register'
import EventForm from './pages/eventForm'
import { AuthContext } from './features/authContext'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function App () {
  const [allEvent, setAllEvent] = useState([])
  const [user, setUser] = useState(localStorage.getItem('user')
)

  return (
    <div className='App'>
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
          <Footer />
        </AuthContext.Provider>
      </Router>
    </div>
  )
}

export default App
