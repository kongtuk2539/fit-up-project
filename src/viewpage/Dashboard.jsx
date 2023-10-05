import React from 'react'
import Circle from '../components/circle/Circle'
import Chart from '../components/bar-chart/Chart'
import Rightsection from '../components/activitycard/Rightsection'
import Sidebar from '../components/sidebar-ham/Sidebar'

function Dashboard() {
    return (
        <div className='flex bg-black-dark h-auto'>
            {/* Sidebar */}
            {/* <Sidebar setStatus={setStatus} /> */}
            <div className='w-[240px] h-full bg-red'>
                <Sidebar />
            </div>


            {/* Main Content */}
            <div className={`grid grid-cols-12 gap-6 px-10 `}>
                <div className='w-full h-[104px] col-start-1 col-end-13'>
                    <div className='flex justify-between p-10'>
                        <div className=' bg-orange-500'>Logo</div>
                        <div className=' bg-orange-500'>Menu</div>
                    </div>
                </div>
                <div className='w-full h-856  col-start-1 col-end-9'>
                    <div className='flex flex-col gap-6'>
                        <div className='w-721'>
                            <Circle />
                        </div>
                        <div className=' w-721 h-508'>
                            <Chart />
                        </div>
                    </div>
                </div>
                <div className='w-auto h-856 col-start-9 col-end-13 rounded-lg'>
                    <div className='h-856'>
                        <Rightsection />
                    </div>
                    {/* <div className='h-856 bg-white'>
                        eiei2
                    </div> */}
                </div>
                {/* <div className='w-full h-508 bg-orange-500 col-start-1 col-end-9'>2</div> */}
            </div>
        </div>
    );
}

export default Dashboard