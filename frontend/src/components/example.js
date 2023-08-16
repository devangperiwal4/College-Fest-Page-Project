import { useState } from 'react'

function GroupBySurname () {
  const [people, setPeople] = useState([
    { name: 'John Doe', surname: 'Doe' },
    { name: 'Jane Smith', surname: 'Smith' },
    { name: 'Bob Johnson', surname: 'Johnson' },
    { name: 'Samantha Williams', surname: 'Williams' },
    { name: 'Michael Brown', surname: 'Brown' }
  ])

  const groupedPeople = people.reduce((acc, curr) => {
    if (!acc[curr.surname]) acc[curr.surname] = []
    acc[curr.surname].push(curr.name)
    return acc
  }, {})

  const [selectedSurname, setSelectedSurname] = useState('')
  const [selectedNames, setSelectedNames] = useState([])

  const handleChange = e => {
    setSelectedSurname(e.target.value)
    setSelectedNames(groupedPeople[e.target.value])
  }

  return (
    <div>
      <label>Select a surname:</label>
      <select value={selectedSurname} onChange={handleChange}>
        {Object.keys(groupedPeople).map(surname => (
          <option key={surname} value={surname}>
            {surname}
          </option>
        ))}
      </select>
      <br />
      {selectedSurname && (
        <div>
          <p>Selected surname: {selectedSurname}</p>
          <p>Names:</p>
          <ul>
            {selectedNames.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default GroupBySurname
