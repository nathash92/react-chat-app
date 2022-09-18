import classNames from 'classnames';
import ChatHeader from './components/ChatHeader';
import PeopleCard from './components/PeopleCard';
import IconButton from './components/ui/IconButton';

function App() {
  return (
    <>
      <div className='flex h-full'>
        <div className='w-1/5 bg-blue-600 rounded-tr-xl rounded-br-xl hidden lg:block'>

          {/* CHAT LOGO */}
          <div className='flex w-full mb-3 items-end p-3'>
            <div className='grow'>
              <div className='text-2xl font-semibold text-white'>CHAT APP</div>
            </div>
            <div>
              <IconButton>+</IconButton>
            </div>
          </div>

          {/* SEARCH */}
          <div className='p-3 mb-1'>
            <input placeholder='Search here.' className='h-10 rounded-sm w-full p-2 bg-blue-500 text-white outline-none placeholder:text-white' />
          </div>

          {/* LIST OF PEOPLE */}
          {
            [1, 2, 3, 4, 5, 6].map(e => (
              <PeopleCard key={e} />
            ))
          }

        </div>
        <div className='flex-1'>

          <div className='flex flex-col h-full'>

            {/* HEADER */}
            <ChatHeader />

            <div className='grow p-4 overflow-y-auto'>

              {
                [1, 2, 3, 4, 5, 6].map(e => (
                  <div className={classNames({
                    'flex w-full mb-8': true,
                    'justify-end': e % 2 === 0,
                  })} key={e}>
                    <div className='lg:w-1/3'>
                      <div className={classNames({
                        'text-sm p-3': true,
                        'bg-blue-500 text-white rounded-l-xl rounded-tr-xl mr-14': e % 2 === 0,
                        'bg-gray-200 rounded-r-xl rounded-tl-xl ml-14': e % 2 !== 0,
                      })}>
                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                      </div>
                      <div className={classNames({
                        'text-right': e % 2 === 0
                      })}>
                        <div className='inline-block'>
                          <div className='rounded-full w-10 h-10 overflow-hidden'>
                            <img src='https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock--480x320.jpg' alt='' className='object-cover w-10 h-10' />
                          </div>
                        </div>
                        <div className='text-xs'>04:30 am</div>
                      </div>
                    </div>
                  </div>
                ))
              }

            </div>
            <div className='flex-none p-3'>
              <div className='bg-gray-100 rounded-full p-3 mb-1'>
                <input className='w-full bg-gray-100 outline-none h-8 p-2' placeholder='Write Something....' />
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
