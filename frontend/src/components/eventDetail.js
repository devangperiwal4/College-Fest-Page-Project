import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../features/authContext'
import { useParams } from 'react-router-dom'
import eventHandler from '../features/eventHandler'
import { Link } from 'react-router-dom'
export default function EventDetail () {
  const [currEvent, setCurrEvent] = useState({
    name: 'Robo Revolution',
    time: '2023-01-15T07:30:00.000Z',
    venue: 'Mech Auditorium',
    budget: 40000,
    sponsors: ['Shree Electricals', 'Goldmedal'],
    payments: [
      {
        name: 'Speakers',
        payment: '2500'
      },
      {
        name: 'Host',
        payment: '6000'
      },
      {
        name: 'Accomodation',
        payment: '4000'
      }
    ]
  })
  const { name } = useParams()
  // console.log(useParams())
  useEffect(() => {
    eventHandler.GetOneEvent(name, setCurrEvent)
  }, [])

  const { user } = useContext(AuthContext)
  // setCurrEvent(() => {
  //   allEvent.filter()
  // })
  const [admin, setAdmin] = useState(user && user.access !== 'Attendee')
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

  // console.log(currEvent)
  return (
    <div className='container'>
      <div className='event-header'>
        <h2 className='page-heading'>{currEvent.name}</h2>
        {admin && <h3>Budget : {currEvent.budget}</h3>}
      </div>
      <div>
        {`${time.getHours().toString().padStart(2, '0')}:${time
          .getMinutes()
          .toString()
          .padStart(2, '0')}`}{' '}
        at {currEvent.venue}
      </div>
      <p>
        This event allows students to showcase their skills in designing and
        programming robots to complete specific tasks.
      </p>
      <p>
        {' '}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed enim
        dolorum eligendi, sint suscipit neque! Perspiciatis harum repellat
        consequuntur eius accusamus adipisci soluta illum distinctio explicabo
        reiciendis! Aspernatur minima maiores iure. Magni architecto porro ipsum
        dolorum distinctio ea tempora nemo? Aspernatur dignissimos ipsam sint
        sequi fuga praesentium dolorem porro minus.
      </p>
      <p>
        {' '}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed enim
        dolorum eligendi, sint suscipit neque! Perspiciatis harum repellat
        consequuntur eius accusamus adipisci soluta illum distinctio explicabo
        reiciendis! Aspernatur minima maiores iure. Magni architecto porro ipsum
        dolorum distinctio ea tempora nemo? Aspernatur dignissimos ipsam sint
        sequi fuga praesentium dolorem porro minus.
      </p>
      <div>{sponsorsList}</div>
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
        <Link to='/'>Back to Home Page</Link>
      </div>
    </div>
  )
}
