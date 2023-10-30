import { MyImage } from './my-image'

export const MyGroup = ({ num }) => {
  return (
    <div className='card-group mb-50px'>
      <MyImage num={num + 1} />
      <MyImage num={num + 2} />
    </div>
  )
}
