import {AiOutlineStar, AiOutlineUser} from 'react-icons/ai'

const Course = ({image, category, title, price, rating, participants}) => {
  return (
    <div className="p-2 min-w-[15rem] shadow-lg bg-slate-50 rounded-md">
      <img src={image} alt="" className='h-48 w-96'/>
      <div className="text-xs text-Teal mt-2">{category}</div>
      <div className="text-sm mt-2 font-bold">{title}</div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <div className='bg-Solitude p-1 rounded-full'>
            <AiOutlineUser className='text-Teal'/>
          </div>
          <div className='text-sm font-bold'>{participants}</div>
        </div>
        <div className='flex items-center gap-2'>
          <div className='bg-Solitude rounded-full'>
            <AiOutlineStar className='text-yellow'/>
          </div>
          <div className='text-sm font-bold'>{rating}</div>
          
        </div>
        <div className='text-sm font-bold'>${price}</div>
      </div>
    </div>
  )
}

export default Course