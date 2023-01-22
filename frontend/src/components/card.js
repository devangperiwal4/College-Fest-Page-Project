import React from 'react'
import '../styles/cardstyles.css'
import { Link } from 'react-router-dom'
export default function Card (props) {
  const nameConverter = name => {
    let new_name = ''
    for (let i = 0; i < name.length; i++) {
      new_name = new_name + (name[i] === ' ' ? '-' : name[i])
    }
    // console.log(new_name)
    return new_name
  }
  let time = new Date(props.time)
  time = new Date(time.toLocaleString())

  
  return (
    <div className={`card card-${props.n}`}>
      <Link
        className={`card__icon`}
        to={`/events/${nameConverter(props.name)}`}
      >
        {props.name}
      </Link>
      <p className='card__title'>
        lo Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed enim
        dolorum eligendi
      </p>
      <br />
      <p className='card__link'>
        {`${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}`} at {props.venue}{' '}
      </p>
    </div>
  )
}
