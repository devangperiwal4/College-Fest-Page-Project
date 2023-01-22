import axios from 'axios'

// Register User
const RegisterHandler = async (userData,setUser) => {
  try {
    const response = await axios.post(
      'http://localhost:5000/api/users/',
      userData
    )

    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }
    setUser(response.data)
    return response.data
  } catch (err) {
    throw new Error(err)
  }
}

// Login user
const LoginHandler = async (userData, setUser) => {
  try {
    const response = await axios.post(
      'http://localhost:5000/api/users/login',
      userData
    )
    // console.log(response)
    // console.log(response.data)

    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }
    setUser(response.data)
  } catch (err) {
    console.log(err)
  }
}

//Get user
const getHandler = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/users/me')
    return response.data
  } catch (err) {
    throw new Error(err)
  }
}
// Logout user
const LogoutHandler = (setUser) => {
  localStorage.removeItem('user')
  setUser()
}

const authHandler = {
  RegisterHandler,
  LoginHandler,
  LogoutHandler,
  getHandler
}

export default authHandler
