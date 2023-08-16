import { Link } from 'react-router-dom'

export default function About () {
  return (
    <div className='container'>
      <div className='page-heading'>ABOUT</div>
      <p>
        Welcome to Radiance Fest, a celebration of student talent, creativity,
        and community spirit. Our fest has a long history, dating back to over
        15 years of rich history, and has grown to become one of the most
        eagerly anticipated events on campus.
      </p>
      <p>
        The goal of our fest is to showcase the diverse talents of our students
        and to bring the campus community together. We have an exciting line-up
        of events and activities, including concerts, competitions, and
        workshops, that will take place during the fest.
      </p>
      <p>
        We encourage everyone to get involved in the fest. Whether you're a
        student, a faculty member, or a member of the local community, there are
        plenty of ways to get involved. You can register for events, volunteer,
        or become a sponsor.
      </p>
      <p>
        If you have any questions or would like more information about the fest,
        please don't hesitate to contact us. You can reach us by email at
        radiance@manit.ac.in or on social media at <span>Radiance-MANIT</span>.
      </p>
      <p>
        We are looking forward to welcoming you to Radiance Fest and celebrating
        the spirit of our community.
      </p>
      <div>
        <Link to='/'>Back to Home Page</Link>
      </div>
    </div>
  )
}
