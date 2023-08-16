import EventList from '../components/EventList'
import Schedule from '../components/Schedule'
// import '../App.css'
import Ambassadors from '../components/Ambassadors'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/homepage.css'

export default function HomePage () {
  return (
    <div
      className='container d-flex'
      style={{
        maxWidth: '100%',
        height: '150%',
        padding: 0,
        margin: '0px 0px 55px'
      }}
    >
      <div
        style={{
          width: '25%',
          maxWidth: '25%',
          backgroundColor: '#777',
          padding: '15px'
        }}
      >
        <div>
          <h3>Top Ambassadors</h3>
          <Ambassadors />
        </div>
        <div>
          <h3>Schedule</h3>
          <Schedule />
        </div>
      </div>
      <div
        className='container'
        style={{
          margin: '0px 0px 55px'
        }}
      >
        <h2>Radiance - Where Innovation And Creativity Shines !!!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed enim
          dolorum eligendi, sint suscipit neque! Perspiciatis harum repellat
          consequuntur eius accusamus adipisci soluta illum distinctio explicabo
          reiciendis! Aspernatur minima maiores iure. Magni architecto porro
          ipsum dolorum distinctio ea tempora nemo? Aspernatur dignissimos ipsam
          sint sequi fuga praesentium dolorem porro minus.
        </p>
        <div>
          <EventList />
        </div>
      </div>
    </div>
  )
}
