import React, { useEffect, useState } from 'react'
import AuthHandler from '../features/AuthHandler'

export default function Ambassadors () {
  const [ambs, setAmbs] = useState([])
  useEffect(() => {
    AuthHandler.GetAmbs(setAmbs)
  }, [])
  // console.log(ambs)
  ambs.sort((a, b) => b.count - a.count)
  const firstFive = ambs.filter((_, i) => i < 5)

  const ambsList = firstFive.map((item, index) => {
    return (
      <ul key={index} style={{ color: '#ede' }}>
        {item.name} - {item.count}
      </ul>
    )
  })
  return <li>{ambsList}</li>
}
