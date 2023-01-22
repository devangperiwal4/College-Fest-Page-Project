import { useState,useContext } from 'react'
import { FaUser } from 'react-icons/fa'
import authHandler from '../features/authHandler'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../features/authContext'
export default function Register () {
  const [items, setItems] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: ''
  })
  
  const { setUser } = useContext(AuthContext)
  const navigate = useNavigate()
  
  function HandleSubmit (e) {
    e.preventDefault()
    const { name, email, password, confirmpassword } = items
    if (password !== confirmpassword) {
      console.log('Passwords do not match')
    } else {
      const userData = {
        name,
        email,
        password
      }
      authHandler.RegisterHandler(userData, setUser)
      setItems({
        name: '',
        email: '',
        password: '',
        confirmpassword: ''
      })
    }

    setUser(JSON.parse(localStorage.getItem('user')))

    navigate('/')
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> RSVP
        </h1>
      </section>

      <form onSubmit={HandleSubmit}>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='name'
            name='name'
            id='name'
            value={items.name}
            onChange={e =>
              setItems({
                ...items,
                [e.target.name]: e.target.value
              })
            }
            placeholder='Name'
          />
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            value={items.email}
            onChange={e =>
              setItems({
                ...items,
                [e.target.name]: e.target.value
              })
            }
            placeholder='Email'
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            value={items.password}
            onChange={e =>
              setItems({
                ...items,
                [e.target.name]: e.target.value
              })
            }
            placeholder='Password'
          />
          <label htmlFor='confirmpassword'>Confirm Password</label>
          <input
            type='password'
            name='confirmpassword'
            value={items.confirmpassword}
            onChange={e =>
              setItems({
                ...items,
                [e.target.name]: e.target.value
              })
            }
            placeholder='Confirm Password'
          />
        </div>
        <input type='submit' value='Submit' />
      </form>
    </>
  )
}
