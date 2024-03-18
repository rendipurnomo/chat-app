import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import {TiMessages} from 'react-icons/ti'
import useConversation from '../../zustand/useConversation'
import { useAuthContext } from '../../context/AuthContext'

const MessagesContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation()

  useEffect(() => {

    //cleanup function
    return () => setSelectedConversation(null)
  },[setSelectedConversation])
  return (
    <div className='min-w-[350px] md:min-w-[450px] flex flex-col h-full'>
      {!selectedConversation ? <NochatSelected /> : (
      <>
      {/* Header */}
      <div className='bg-slate-500 px-4 py-2 mb-2'>
        <span className='label-text text-gray-300'>To: </span>
        <span className='text-yellow-500 font-bold'>{selectedConversation?.fullName}</span>
      </div>

      <Messages/>
      <MessageInput />
      </>
      )}
    </div>
  )
}

export default MessagesContainer;

const NochatSelected = () => {
  const { authUser } = useAuthContext()

  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-12 md:px-4 text-center text-lg md:text-xl text-gray-300 font-semibold flex flex-col items-center gap-2'>
        <p>Welcome 👋 {authUser.fullName}</p>
        <p>select a chat to start messaging</p>
        <TiMessages className='text-3xl md:text-6xl text-center'/>
      </div>
    </div>
  )
}