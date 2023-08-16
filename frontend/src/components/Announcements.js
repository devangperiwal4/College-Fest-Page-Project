import notice from '../notice'
import { useState } from 'react'

export default function Announcement () {
  const [showPopup, setShowPopup] = useState(true)

  const announcement = [...notice.notice]
  announcement.sort((a, b) => a.createdAt > b.createdAt)

  const list = announcement.map(item => {
    return (
      <div style={{ border: 'none', borderBottom: '1px dotted grey' }}>
        <div>{item.title}</div>
        <div>{item.createdAt}</div>
      </div>
    )
  })
  return (
    <div>
      {showPopup && (
        <div className='announcement-popup zindex-fixed'>
          <div className='d-flex'>
            <h3 className='h3 text-center'>Updates & Notices</h3>
            <button onClick={() => setShowPopup(false)}>&times;</button>
          </div>
          {list}
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
    </div>
  )
}
