import { useContext, useState } from 'react'
import eventHandler from '../features/eventHandler'
import { AuthContext } from '../features/authContext'

export default function EventForm () {
  // Get user from localStorage
  const { user, allEvent, setAllEvent } = useContext(AuthContext)
  // console.log(user)

  const [formData, setFormData] = useState({
    name: '',
    venue: '',
    time: new Date(),
    sponsors: [],
    budget: 0,
    payments: []
  })

  const [sponsorData, setSponsorData] = useState('')

  function handleclick (e) {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const [items, setItems] = useState([
    {
      name: '',
      payment: 0
    }
  ])

  const handleChange = (e, index) => {
    const newItems = [...items]
    if (e.target.type === 'text') newItems[index].name = e.target.value
    else if (e.target.type === 'number')
      newItems[index].payment = e.target.value

    setItems(newItems)
  }

  const handleAdd = () => {
    setItems([...items, { name: '', payment: 0 }])
  }

  const handleRemove = index => {
    const newItems = [...items]
    newItems.splice(index, 1)
    setItems(newItems)
  }

  function HandleSubmit (e) {
    e.preventDefault()
    formData.sponsors = sponsorData.split(',')
    formData.payments = items
    console.log(formData)
    
    eventHandler.PostEventHandler(formData, user, allEvent, setAllEvent)
  }

  return (
    <>
      {!user || user.access === 'Attendee' ? (
        <h2>Not Authorized</h2>
      ) : (
        <>
          <h1 className='heading'>Enter Event Details</h1>
          <form onSubmit={HandleSubmit}>
            <label htmlFor='name'>Enter Event Name</label>
            <input
              type={'text'}
              name='name'
              id='name'
              value={formData.name}
              placeholder='Name'
              onChange={handleclick}
            />
            <label htmlFor='venue'>Enter Event Venue</label>
            <input
              type={'text'}
              name='venue'
              id='venue'
              value={formData.venue}
              placeholder='Venue'
              onChange={handleclick}
            />
            <label htmlFor='budget'>Enter Event Budget</label>
            <input
              type={'number'}
              name='budget'
              id='budget'
              value={formData.budget}
              placeholder='Budget'
              onChange={handleclick}
            />
            <label htmlFor='time'>Enter Event Date and Time</label>
            <input
              type={'datetime-local'}
              name='time'
              id='time'
              value={formData.time}
              placeholder='Time'
              onChange={e =>
                setFormData(prevState => {
                  return {
                    ...prevState,
                    time: new Date(e.target.value)
                  }
                })
              }
            />
            <label htmlFor='value'>Sponsors</label>
            <textarea
              type={'text'}
              id='value'
              value={sponsorData}
              placeholder='Sponsors'
              onChange={e => setSponsorData(e.target.value)}
            />
            <h3>Payments</h3>
            {items.map((item, index) => (
              <div key={index}>
                <label htmlFor={`items[${index}][name]`}>Name</label>
                <input
                  type='text'
                  name={`items[${index}][name]`}
                  value={item.name}
                  onChange={e => handleChange(e, index)}
                />
                <label htmlFor={`items[${index}][payment]`}>Payment</label>
                <input
                  type='number'
                  name={`items[${index}][payment]`}
                  value={item.payment}
                  onChange={e => handleChange(e, index)}
                />
                <button type='button' onClick={() => handleRemove(index)}>
                  Remove
                </button>
              </div>
            ))}

            <button type='button' onClick={handleAdd}>
              Add Payment
            </button>
            <button type='submit'>Submit</button>
          </form>
        </>
      )}
    </>
  )
}
