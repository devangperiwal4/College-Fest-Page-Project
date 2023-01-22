import { useContext, useEffect } from 'react'
import Card from './card'
import '../styles/cardstyles.css'
import { Link } from 'react-router-dom'
import eventHandler from '../features/eventHandler'
import {AuthContext} from '../features/authContext'
function EventList () {
    const { user,allEvent, setAllEvent } = useContext(AuthContext)

  // [{
  //     name: 'Tech Trivia',
  //     time: '12:30pm',
  //     venue: 'LRC',
  //     key: 1,
  // }, {
  //     name: 'Robo Revolution',
  //     time: '2:30pm',
  //     venue: 'Mech Auditorium',
  //     key:2,
  // }]

  useEffect(() => {
    eventHandler.fetchData(setAllEvent)
  }, [setAllEvent])

  function getNumber () {
    const n = Math.floor(Math.random() * 5) + 1
    return n
  }
  const events = allEvent.map(e => {
    return <Card {...e} n={getNumber()} key={e._id} />
  })
  return (
    <>
      {user&&user.access === 'Admin' && <div>
        <Link to={'/events/eventForm'}>New Form</Link>
      </div>}
      <div className='cards'>{events}</div>
    </>
  )
}

export default EventList
