import axios from 'axios'
import { useParams } from 'react-router-dom'

// Register event
const PostEventHandler = async (formData, user, allEvent, setAllEvent) => {
  try {
    const { token } = user
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    const response = await axios.post(
      'http://localhost:5000/api/events/',
      formData,
      config
    )
    const data = await response.data
    if (data) {
        setAllEvent(() => { return { ...allEvent, formData } })
    }
  } catch (err) {
    console.log(err)
  }
}

const fetchData = async setAllEvent => {
  try {
    const res = await axios.get('http://localhost:5000/api/events')
    const data = await res.data
    // console.log(data)
    setAllEvent(data)
  } catch (error) {
    console.log(error)
  }
}

const GetOneEvent = async (name, setCurrEvent) => {
  try {
    // const { name } = useParams()
    // console.log(name)
    const res = await axios.get('http://localhost:5000/api/events/'+name)
    const data = await res.data

    // console.log(data)
    setCurrEvent(data)
  } catch (err) {
    console.log(err)
  }
}
const eventHandler = {
  fetchData,
  PostEventHandler,
  GetOneEvent
}
export default eventHandler
