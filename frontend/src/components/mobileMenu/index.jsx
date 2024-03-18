import React from 'react'
import { BsChat, BsPersonFillCheck } from 'react-icons/bs'

const MobileMenu = ({setSlide, slide}) => {
  return (
    <div className='max-w-md fixed bottom-0 right-0 left-0 flex justify-around items-center bg-slate-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 h-16 mx-auto'>
      <div className='flex flex-col items-center cursor-pointer'
      onClick={() => setSlide(true)}
      >
        <BsPersonFillCheck className={`text-2xl ${slide ? 'text-yellow-500' : ''}`} />
        user
      </div>
      <div className='flex flex-col items-center cursor-pointer'
      onClick={() => setSlide(false)}
      >
        <BsChat className={`text-2xl ${slide ? '' : 'text-yellow-500'}`} />
        chat
      </div>
    </div>
  )
}

export default MobileMenu