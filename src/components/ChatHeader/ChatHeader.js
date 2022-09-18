import React from 'react'
import { PhoneCall, Video } from 'react-feather'
import IconButton from '../ui/IconButton'

function ChatHeader() {
  return (
    <div className='sticky top-0 p-3 shadow-sm border-b-2 bg-white'>
      <div className='flex items-center'>
        <div className='grow'>
          <div className='text-3xl font-bold'>Nathash Kumar</div>
        </div>
        <div className='px-1'>
          <IconButton textClr="text-white" bgClr="bg-blue-500" textSize='text-1xl' >
            <PhoneCall width={18} />
          </IconButton>
        </div>
        <div className='px-1'>
          <IconButton textClr="text-white" bgClr="bg-blue-500" textSize='text-1xl' >
            <Video width={18} />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default ChatHeader