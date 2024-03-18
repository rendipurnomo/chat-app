import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import Logout from './Logout'
import { BsArrow90DegLeft } from 'react-icons/bs'


const Sidebar = ({setSlide}) => {
  return (
    <div className='border-r border-slate-500 p-4 flex-col flex sm:min-w-[450px]'>
      
      <SearchInput/>

      <div className='divider divider-warning px-3'></div>
      <Conversations setSlide={setSlide} />
      <Logout />
      
    </div>
  )
}

export default Sidebar