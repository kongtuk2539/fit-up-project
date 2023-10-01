import React, { useState } from 'react'

const ActivityDialog = () => {
    const [desc, setDesc] = useState('');
    const maxCharacters = 72;

    const handleDescChange = (e) => {
        const newDesc = e.target.value;
        setDesc(newDesc);
    };

    return (
        <div className='h-768 w-375 bg-black-medium'>
            <div className='h-14 w-375 bg-black-dark flex items-center justify-center text-white'>
                <div className='absolute left-6 top-4'>
                    <span class="material-symbols-outlined hover:cursor-pointer">
                        close
                    </span>
                </div>
                <div className='font-roboto-mono font-bold text-sm'>
                    My Activity
                </div>
            </div>

            {/* Activity Type */}
            <div className='h-174 w-343 mx-4 mt-6'>
                <div className='text-white font-roboto-mono text-xs mb-1'>
                    Activity Type
                </div>
                <div className='text-white font-roboto-mono text-xs
                flex justify-between'>
                    <div className='h-[70px] w-[109px] rounded-md border-solid border-2 border-white
                    flex flex-col p-2 hover:bg-pink-op10 hover:cursor-pointer hover:text-pink hover:border-pink'>
                        <span class="material-symbols-outlined mb-1 ">
                            directions_run
                        </span>
                        Run
                    </div>
                    <div className='h-[70px] w-[109px] rounded-md border-solid border-2 border-white
                    flex flex-col p-2 hover:bg-pink-op10 hover:cursor-pointer hover:text-pink hover:border-pink'>
                        <span class="material-symbols-outlined mb-1">
                            hiking
                        </span>
                        Walk
                    </div>
                    <div className='h-[70px] w-[109px] rounded-md border-solid border-2 border-white
                    flex flex-col p-2 hover:bg-pink-op10 hover:cursor-pointer hover:text-pink hover:border-pink'>
                        <span class="material-symbols-outlined mb-1">
                            pool
                        </span>
                        Swim
                    </div>
                </div>
                <div className='text-white font-roboto-mono text-xs
                flex justify-between mt-1'>
                    <div className='h-[70px] w-[167.5px] rounded-md border-solid border-2 border-white
                    flex flex-col p-2 hover:bg-pink-op10 hover:cursor-pointer hover:text-pink hover:border-pinks'>
                        <span class="material-symbols-outlined mb-1">
                            fitness_center
                        </span>
                        Gym workout
                    </div>
                    <div className='h-[70px] w-[167.5px] rounded-md border-solid border-2 border-white
                    flex flex-col p-2 hover:bg-pink-op10 hover:cursor-pointer hover:text-pink hover:border-pink'>
                        <span class="material-symbols-outlined mb-1">
                            directions_bike
                        </span>
                        Road Cycling
                    </div>
                </div>
            </div>

            {/* Name */}
            <div className='h-[75px] w-343 mx-4 mt-4'>
                <p className='text-white font-roboto-mono text-xs mb-2'>
                    Name
                </p>
                <div className=''>
                    <input type="text" className='h-12 w-343 bg-black-dark rounded pl-3 text-white font-roboto-mono text-xs mb-2' />
                </div>
            </div>

            {/* Description */}
            <div className='h-[75px] w-343 mx-4 mt-4'>
                <div className='flex justify-between'>
                    <p className='text-white font-roboto-mono text-xs mb-2'>
                        Description (optional)
                    </p>
                    <p className='text-black-light font-roboto-mono text-xs mb-2'>
                        {desc.length}/{maxCharacters}
                    </p>
                </div>
                <div className=''>
                    <textarea id="message" rows="4" className="block p-3 h-[70px] w-343 bg-black-dark rounded font-roboto-mono text-sm text-white"
                        placeholder="How was your run?"
                        value={desc}
                        onChange={handleDescChange}>
                    </textarea>
                </div>
            </div>

            {/* Date and Duration */}
            <div className='h-[75px] w-343 mx-4 mt-6'>

                <div class="relative max-w-sm">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </div>
                    <input datepicker type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date" />
                </div>

            </div>

        </div>
    )
}

export default ActivityDialog