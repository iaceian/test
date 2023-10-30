import { Link } from 'react-router-dom'

export const PreEnrollmentForm = () => {
  return (
    <button type='button' className='btn btn-outline-info me-1 mb-1'>
      <Link to='../assets/doc/register/PreEnrollmentForm.doc' target='_blank'>
        Register
      </Link>
    </button>
  )
}
