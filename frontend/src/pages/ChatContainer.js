/* eslint-disable */
import React, { useState } from 'react'
import MatchesDisplay from './MatchesDisplay'
import ChatDisplay from './ChatDisplay'

export default function ChatContainer({user}) {
  const [clickedUser,setClickedUser]=useState(null);
  return (
    <div className=''>
      <div className='flex justify-center items-center mt-16'>
        <button onClick={()=>setClickedUser(null)} className='bg-white border-b-4 border-[#fd2f6e] m-2 text-xl p-3 disabled:border-[#bbbbbb]'>Matches</button>
        <button disabled={!clickedUser} className='bg-white border-b-4 border-[#fd2f6e] m-2 text-xl p-3 disabled:border-[#bbbbbb]'>Chat</button>
      </div>
      {!clickedUser && <MatchesDisplay setClickedUser={setClickedUser}/>}
      {clickedUser && <ChatDisplay clickedUser={clickedUser} user={user}/>}
    </div>
  )
}
