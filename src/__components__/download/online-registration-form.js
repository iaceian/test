import { Link } from 'react-router-dom'

export const OnlineRegistrationForm = () => {
  return (
    <button type='button' className='btn btn-outline-info me-1 mb-1'>
      <Link to='../assets/doc/register/OnlineRegistrationForm.doc' target='_blank'>
        Register
      </Link>
    </button>
  )
}
