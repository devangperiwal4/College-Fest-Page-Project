import { IoMdCall, IoMdMail } from 'react-icons/io'
import { FaFax } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import '../App.css'

export default function Contact () {
  return (
    <div className='container'>
      <div className='page-heading'>CONTACT</div>
      <IoMdCall /> Telephone : +91 755 4051000, 4052000
      <FaFax /> FAX : +91-755 2670562
      <IoMdMail /> Email : radiance@manit.ac.in <br />
      Address: Link Road Number 3, Near Kali Mata Mandir, Bhopal, Madhya
      Pradesh, India 462003
      <div>
        <Link to='/'>Back to Home Page</Link>
      </div>
    </div>
  )
}
