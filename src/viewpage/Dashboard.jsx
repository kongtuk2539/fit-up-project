import React from 'react'
import Circle from '../components/circle/Circle'

function Dashboard() {
    return (
        <div className={`flex`}>
            {/* Sidebar */}
            {/* <Sidebar setStatus={setStatus} /> */}
            <div className='w-240 h-1024 bg-black'>

            </div>


            {/* Main Content */}
            <div className={`w-[1440px] h-1024 bg-gray-200 grid grid-cols-12 gap-6 px-10 `}>
                <div className='w-full h-104 bg-red-500 col-start-1 col-end-13'>
                    <div className='flex justify-between p-10'>
                        <div className=' bg-orange-500'>Logo</div>
                        <div className=' bg-orange-500'>Menu</div>
                    </div>
                </div>
                <div className='w-full h-856  col-start-1 col-end-9'>
                    <div className='flex flex-col gap-6'>
                        <Circle />
                        <div className=' w-721 h-508 bg-orange-500 rounded-lg'>2</div>
                    </div>
                </div>
                <div className='w-[343px] h-856 bg-orange-500 col-start-9 col-end-13 rounded-lg overflow-y-auto z-10'>
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
    );
}

export default Dashboard