import React from 'react'
import useConversation from '../../zustand/useConversation'
import { useAuthContext } from '../../context/AuthContext'
import { useSocketContext } from '../../context/SocketContext'

const Conversation = ({ conversation, emoji, lastIdx, setSlide }) => {
  const { selectedConversation, setSelectedConversation } = useConversation()

  const isSelected = selectedConversation?._id === conversation._id

  const {authUser} = useAuthContext()
  const {onlineUsers} = useSocketContext()

  const isOnline = onlineUsers.includes(conversation._id)

  const handleClick = () => {
    setSelectedConversation(conversation)
    setSlide(false)
  }

  return (
    <>
    <div className={`flex gap-2 items-center hover:bg-yellow-500 rounded p-2 py-1 cursor-pointer ${isSelected && 'bg-yellow-500'}`} onClick={handleClick}>
      <div className={`avatar ${isOnline ? 'online' : ''}`}>
        <div className='w-12 rounded-full'>
          <img src={conversation.profilePicture} alt="user avatar"/>
        </div>
      </div>

      <div className='flex flex-col flex-1'>
        <div className='flex gap-3 justify-between'>
          <p className='font-bold text-gray-200'>{conversation.fullName} <span>{authUser._id === conversation._id ? 'You' : ''}</span></p>
          <span className='text-xl'>{emoji}</span>
        </div>
      </div>
    </div>

    {!lastIdx && <div className='divider my-0 py-0 h-1'></div>}
    </>
  )
}

export default Conversation