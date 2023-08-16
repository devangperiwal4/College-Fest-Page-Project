import axios from 'axios'

// Register User
const RegisterHandler = async (userData, setUser, navigate) => {
  try {
    const response = await axios.post(
      'http://localhost:5000/api/users/',
      userData
    )

    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }
    navigate('/')
    setUser(response.data)
  } catch (err) {
    alert('Email-Id is already in use')
    // console.error(err)
    return err
  }
}

// Login user
const LoginHandler = async (userData, setUser, navigate) => {
  try {
    const response = await axios.post(
      'http://localhost:5000/api/users/login',
      userData
    )

    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }
    navigate('/')
    setUser(response.data)
  } catch (err) {
    alert('Email-Id or Password is incorrect')
    // console.error(err)
    return err
  }
}

//Get user
const GetHandler = async user => {
  try {
    const { token } = user
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    const response = await axios.get(
      'http://localhost:5000/api/users/me',
      config
    )
    return response.data
  } catch (err) {
    console.log(err)
  }
}
// Logout user
const LogoutHandler = async setUser => {
  localStorage.removeItem('user')
  setUser()
}

//Get Ambassadors
const GetAmbs = async setAmbs => {
  try {
    const response = await axios.get(
      'http://localhost:5000/api/users/ambassadors'
    )
    setAmbs(response.data)
  } catch (err) {
    console.log(err)
  }
}

const AuthHandler = {
  RegisterHandler,
  LoginHandler,
  LogoutHandler,
  GetHandler,
  GetAmbs
}

export default AuthHandler
