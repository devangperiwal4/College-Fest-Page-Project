import { useState } from 'react'
// import { Collapse, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Calender ({ date, newList, key }) {
  let renderSelect = []

  for (let i = 0; i < newList.length; i++) {
    // console.log(newList[i])
    const day = newList[i].time.slice(8, 10)
    const month = newList[i].time.slice(5, 7)
    const year = newList[i].time.slice(0, 4)
    const newDate = day + '/' + month + '/' + year
    let cur = newList[i]
    if (date === newDate) {
      //   setRender(prev => {
      //     return [ ...prev, cur ]
      //   })
      renderSelect.push(cur)
    }
  }
  //   renderSelect.sort((a, b) => {a.time.localeCompare(b.time)})
  let i = 0
  const list = renderSelect.map(item => {
    const nameConverter = name => {
      let new_name = ''
      for (let i = 0; i < name.length; i++) {
        new_name = new_name + (name[i] === ' ' ? '-' : name[i])
      }
      return new_name
    }

    return (
      <li
        key={item.name}
        style={{
          color: 'whitesmoke',
          margin: '20px'
        }}
      >
        <Link
          to={`/events/${nameConverter(item.name)}`}
          style={{
            color: '#333',
            fontSize: '20px'
          }}
        >
          {item.name}
        </Link>
      </li>
    )
  })

  const [isOpen, setIsOpen] = useState(true)
  //   console.log(renderSelect)

  return (
    <div key={key}>
      <button onClick={() => setIsOpen(isOpen)}>{date}</button>
      <div
        style={{
          width: '80%',
          padding: '20px',
          margin: '20px',
          background: 'white'
        }}
      >
        <ul>{list}</ul>
      </div>
    </div>
  )
}

export default Calender
