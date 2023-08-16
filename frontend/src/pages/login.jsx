import { useState, useContext } from 'react'
import authHandler from '../features/AuthHandler'
import { FaSignInAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../features/AuthContext'
function Login () {
  const [items, setItems] = useState({
    email: '',
    password: ''
  })

  const { user, setUser } = useContext(AuthContext)
  const navigate = useNavigate()

  function HandleSubmit (e) {
    e.preventDefault()

    const { email, password } = items
    const userData = {
      email,
      password
    }
    authHandler.LoginHandler(userData, setUser, navigate)
    setItems({
      email: '',
      password: ''
    })
  }

  return (
    <>
      {user ? (
        <h3>You are logged in</h3>
      ) : (
        <>
          <section className='heading'>
            <h1>
              <FaSignInAlt /> Login
            </h1>
          </section>
          <form onSubmit={HandleSubmit}>
            <div>
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
            </div>
            <input type='submit' value='Submit' />
          </form>
        </>
      )}
    </>
  )
}

export default Login
