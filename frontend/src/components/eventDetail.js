import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../features/AuthContext'
import { useParams } from 'react-router-dom'
import eventHandler from '../features/EventHandler'
import { Link } from 'react-router-dom'
import EventForm from '../pages/EventForm'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/eventdetail.css'

export default function EventDetail () {
  const [currEvent, setCurrEvent] = useState({
    name: '',
    venue: '',
    time: '',
    sponsors: [],
    budget: 0,
    payments: []
  })
  const [edit, setEdit] = useState(false)
  const { name } = useParams()
  // console.log(useParams())

  useEffect(() => {
    eventHandler.GetOneEvent(name, setCurrEvent)
  }, [])

  // setCurrEvent(() => {
  //   allEvent.filter()
  // })

  const { user } = useContext(AuthContext)
  const admin = user && user.access !== 'Attendee'
  // console.log(admin)

  const sponsorsList = currEvent.sponsors.map(sponsor => (
    <div className='sponsor'>{sponsor}</div>
  ))

  const paymentsList = currEvent.payments.map(payment => {
    return (
      <tr>
        <td>{payment.name}</td>
        <td>{payment.payment}</td>
      </tr>
    )
  })

  let time = new Date(currEvent.time)
  time = new Date(time.toLocaleString())
  const day = currEvent.time.slice(8, 10)
  const month = currEvent.time.slice(5, 7)
  const year = currEvent.time.slice(0, 4)
  const newDate = day + '/' + month + '/' + year
  const suffix = time.getHours() >= 12 ? 'pm' : 'am'

  return (
    <>
      {edit ? (
        <EventForm currEvent={currEvent} setEdit={setEdit} />
      ) : (
        <div className='container w-100'>
          <div className='d-flex' style={{ maxWidth: '100%' }}>
            <h2 className='h2 text-center'>{currEvent.name}</h2>
            {admin && (
              <div className='d-flex' style={{ marginLeft: 'auto' }}>
                <div>Budget: {`${currEvent.budget}`}</div>
                <button
                  className='center'
                  onClick={() => setEdit(prev => !prev)}
                  style={{
                    width: '40%'
                  }}
                >
                  EDIT
                </button>
              </div>
            )}
          </div>
          <div className='h6'>
            {`${time.getHours().toString().padStart(2, '0')}:${time
              .getMinutes()
              .toString()
              .padStart(2, '0')}${suffix} on ${newDate} 
            at ${currEvent.venue}`}
          </div>
          <p>
            This event allows students to showcase their skills in designing and
            programming robots to complete specific tasks.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed enim
            dolorum eligendi, sint suscipit neque! Perspiciatis harum repellat
            consequuntur eius accusamus adipisci soluta illum distinctio
            explicabo reiciendis! Aspernatur minima maiores iure. Magni
            architecto porro ipsum dolorum distinctio ea tempora nemo?
            Aspernatur dignissimos ipsam sint sequi fuga praesentium dolorem
            porro minus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed enim
            dolorum eligendi, sint suscipit neque! Perspiciatis harum repellat
            consequuntur eius accusamus adipisci soluta illum distinctio
            explicabo reiciendis! Aspernatur minima maiores iure. Magni
            architecto porro ipsum dolorum distinctio ea tempora nemo?
            Aspernatur dignissimos ipsam sint sequi fuga praesentium dolorem
            porro minus.
          </p>
          <br />
          {currEvent.length !== 0 && (
            <>
              <h4>SPONSORS</h4>
              <div className='d-flex'>{sponsorsList}</div>
            </>
          )}
          {admin && (
            <table>
              <thead>Payments</thead>
              <tr>
                <th>Name</th>
                <th>Payment</th>
              </tr>
              {paymentsList}
            </table>
          )}
          <div>
            <Link
              className='nav-link text-center text-body-emphasis p-2 mt-2 active'
              to='/'
            >
              Back to Home Page
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
