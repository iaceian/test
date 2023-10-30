import { Link } from 'react-router-dom'

export const Details = () => {
  return (
    <button type='button' className='btn btn-outline-info me-1 mb-1'>
      <Link to='/events/class-details'>Details</Link>
    </button>
  )
}
