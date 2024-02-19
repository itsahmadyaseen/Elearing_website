import React from 'react'
import Card from './Card'
import {featured} from '../../Data'
import { useState, useEffect } from 'react'


const FeaturedBundles = () => {

    
  return (
    <div className='py-6 mt-6 relative'>
        <div className={`w-full top-20 left-0 z-40`}>
            <h1 className='text-[2.5rem] text-center underline underline-offset-8 font-bold text-teal-500'>Featured Bundles</h1>
        </div>
        <div className='mt-20'>
        {featured.map(feature => {
            return <Card key={feature.id} {...feature}/>
        })}
        </div>
    </div>
  )
}

export default FeaturedBundles