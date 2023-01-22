// import {} from 'react'
import EventList from '../components/eventList'
import Schedule from '../components/schedule'
import '../App.css'
import GroupBySurname from '../components/example'

export default function HomePage () {
  return (
    <div className='container'>
      <h2 className='page-heading'>
        Radiance - Where Innovation And Creativity Shines !!!
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed enim
        dolorum eligendi, sint suscipit neque! Perspiciatis harum repellat
        consequuntur eius accusamus adipisci soluta illum distinctio explicabo
        reiciendis! Aspernatur minima maiores iure. Magni architecto porro ipsum
        dolorum distinctio ea tempora nemo? Aspernatur dignissimos ipsam sint
        sequi fuga praesentium dolorem porro minus.
      </p>
      <div>
        <Schedule />
        <EventList />
      </div>
    </div>
  )
}
