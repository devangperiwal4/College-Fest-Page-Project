import React, { useState } from 'react'
import { Collapse, Button, Card } from 'react-bootstrap'

function Calender ({ date, newList, key }) {
  let renderSelect = []

  //   console.log(newList)
  //   console.log(date)
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
  const list = renderSelect.map(item => {
    return <p key={item.name}>{item.name}</p>
  })

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  //   console.log(renderSelect)
  return (
    <div key={key}>
      <button onClick={() => setIsOpen(!isOpen)}>{date}</button>
      <Collapse in={isOpen}>
        <Card>
          <Card.Body>{list}</Card.Body>
        </Card>
      </Collapse>
    </div>
  )
}

export default Calender
