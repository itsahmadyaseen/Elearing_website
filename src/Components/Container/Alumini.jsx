import React from 'react'
import ReactCardSlider from 'react-card-slider-component';
import { reviews } from '../../Data'

const UserReview = () => {
  return (

    <div className='m-10'>
        <div className={`w-full top-20 left-0 z-40`}>
            <h1 className='text-[2.5rem] text-center underline underline-offset-8 font-bold text-teal-500'>Our Alumini</h1>
        </div>
        <div className='mt-10'>
            <ReactCardSlider slides={reviews}/>
        </div>
    </div>
  )
}

export default UserReview