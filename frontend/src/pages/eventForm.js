import { useContext, useEffect, useState } from 'react'
import eventHandler from '../features/EventHandler'
import { AuthContext } from '../features/AuthContext'

export default function EventForm ({ currEvent, setEdit }) {
  // Get user from localStorage
  const { user, allEvent, setAllEvent } = useContext(AuthContext)
  // console.log(user)

  const formatDateToDateTimeLocal = date => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')

    return `${year}-${month}-${day}T${hours}:${minutes}`
  }
  const currentDate = new Date()

  const [formData, setFormData] = useState({
    name: '',
    venue: '',
    time: formatDateToDateTimeLocal(currentDate),
    sponsors: [],
    budget: 0,
    payments: []
  })

  const [sponsorData, setSponsorData] = useState('')

  const [items, setItems] = useState([])

  useEffect(() => {
    // console.log(currEvent)
    if (currEvent) {
      setFormData(() => {
        const time = new Date(currEvent.time)

        return { ...currEvent, time: formatDateToDateTimeLocal(time) }
      })
      setItems(currEvent.payments)
      setSponsorData(currEvent.sponsors)
    }
  }, [])

  function handleclick (e) {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

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

  function handleSubmit (e) {
    e.preventDefault()
    formData.sponsors =
      sponsorData.split(',')[0] !== '' ? sponsorData.split(',') : []
    formData.payments = items
    formData.time = new Date(formData.time)
    // console.log(formData)
    if (setEdit) setEdit(prev => !prev)
    eventHandler.PostEventHandler(formData, user, allEvent, setAllEvent)
  }

  return (
    <>
      {!user || user.access === 'Attendee' ? (
        <h2>Not Authorized</h2>
      ) : (
        <>
          <h1 className='heading'>Enter Event Details</h1>
          <form onSubmit={handleSubmit}>
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
                    time: e.target.value
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
