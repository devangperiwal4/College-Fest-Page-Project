import { useContext, useEffect } from 'react'
import Card from './Card'
import '../styles/cardstyles.css'
import { Link } from 'react-router-dom'
import eventHandler from '../features/EventHandler'
import { AuthContext } from '../features/AuthContext'
function EventList () {
  const { user, allEvent, setAllEvent } = useContext(AuthContext)

  useEffect(() => {
    eventHandler.FetchData(setAllEvent)
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
      {user && user.access !== 'Attendee' && (
        <div>
          <Link to={'/events/eventForm'}>New Form</Link>
        </div>
      )}
      <div className='cards'>{events}</div>
    </>
  )
}

export default EventList
