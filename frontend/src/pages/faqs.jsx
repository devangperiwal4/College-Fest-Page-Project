import React from 'react'
import questions from '../questions'
import {Link} from 'react-router-dom'
export default function Faqs () {
  const dataList = questions.data.map(question => {
    return (
      <p className='faq-items'>
        <span className='faq-questions'>Q. {question.Q}</span> <br />
        A. {question.A}
      </p>
    )
  })
  return (
    <div className='container'>
      <div
        className='page-heading'
        style={{
          fontFamily: 'comic',
          fontSize: '30px',
          paddingLeft: '25px'
        }}
      >
        FAQS
      </div>
      {dataList}
      <div>
        <Link to='/'>Back to Home Page</Link>
      </div>
    </div>
  )
}
