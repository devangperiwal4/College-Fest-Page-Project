import { useContext } from 'react'
import { AuthContext } from '../features/AuthContext'
import Calender from './Calender'

export default function Schedule () {
  const { allEvent } = useContext(AuthContext)
  const newList = [...allEvent]
  const uniqueDate = [
    ...new Set(
      newList.map((item, index) => {
        const day = item.time.slice(8, 10)
        const month = item.time.slice(5, 7)
        const year = item.time.slice(0, 4)

        return day + '/' + month + '/' + year
      })
    )
  ]
  //   console.log(uniqueDate)
  uniqueDate.sort((a, b) => a.localeCompare(b))
  const renderList = uniqueDate.map((item, index) => {
    return <Calender key={index} newList={[...newList]} date={item} />
  })
  return <div>{renderList}</div>
}
