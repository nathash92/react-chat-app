import React from 'react'

const PeopleCard = () => {
  return (
    <div className='hover:bg-blue-500 px-3 cursor-pointer'>
      <div className='flex w-full items-center mb-5 py-2'>
        <div className='mr-2'>
          <div className='rounded-full w-12 h-12 overflow-hidden'>
            <img src='https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock--480x320.jpg' alt='' className='object-cover w-12 h-12' />
          </div>
        </div>
        <div className='grow w-full px-1'>
          <div className='flex text-white items-center mb-1'>
            <div className='grow'>
              <div className='font-medium'>Nathash Kumar V</div>
            </div>
            <div className='text-xs'>
              04:30 am
            </div>
          </div>
          <div className='text-xs text-white'>
            Hey!, there....
          </div>
        </div>
      </div>
    </div>
  )
}

export default PeopleCard