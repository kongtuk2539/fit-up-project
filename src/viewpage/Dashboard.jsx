import React from 'react'
import Circle from '../components/circle/Circle'

function Dashboard() {
    return (
        <div className='flex w-1440 h-1024'>
            {/* Sidebar */}
            {/* <Sidebar setStatus={setStatus} /> */}
            <div className='w-240 bg-red hidden md:inline-block'>

            </div>

            {/* Main Content */}
            <div className={`w-1200 h-full bg-gray-200 grid grid-cols-12 gap-6 px-10 ${!status ? 'bg-black/80' : ''}`}> {/* Add background color to clearly divide */}
                <div className='w-full h-127 bg-red-500 col-start-1 col-end-13'>
                    <div className='flex justify-between p-10'>
                        <div className=' bg-orange-500'>Logo</div>
                        <div className=' bg-orange-500'>Menu</div>
                    </div>
                </div>
                <div className='w-full h-856  col-start-1 col-end-9'>
                    <div className='flex flex-col gap-6'>
                        <div className='h-324 w-721 bg-orange-500 rounded-lg z-20'>
                            <Circle />
                        </div>
                        <div className=' h-508 w-721 bg-orange-500 rounded-lg'>2</div>
                    </div>
                </div>
                <div className='w-343 h-856 bg-orange-500 col-start-9 col-end-13 rounded-lg overflow-y-auto'>
                    <div className='h-856 bg-white'>
                        eiei1
                    </div>
                    <div className='h-856 bg-white'>
                        eiei2
                    </div>
                </div>
                {/* <div className='w-full h-508 bg-orange-500 col-start-1 col-end-9'>2</div> */}

            </div>
        </div>
    )
}

export default Dashboard