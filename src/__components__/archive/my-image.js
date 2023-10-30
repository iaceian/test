export const MyImage = ({num}) => {
  return (
    <div className='card me-25px'>
      <img className='card-img-top' src={`/assets/img/archive/${num}.jpg`} alt='' />
    </div>
  )
}
