import questions from '../questions'
import { Link } from 'react-router-dom'

export default function Faqs () {
  const dataList = questions.data.map(question => {
    return (
      <div className='faq-items'>
        <p>Q. {question.Q}</p>
        <p>A. {question.A}</p>
      </div>
    )
  })
  return (
    <div className='container'>
      <div
        className='page-heading'
        style={{
          fontFamily: 'comic',
          fontSize: '30px'
          // paddingLeft: '25px'
        }}
      >
        FAQS
      </div>
      {dataList}
      <div>
        <Link
          to='/'
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          Back to Home Page
        </Link>
      </div>
    </div>
  )
}
