import React, { useState } from 'react'
import Datepicker from "react-tailwindcss-datepicker";

const ActivityDialog = () => {
    const [desc, setDesc] = useState('');
    const maxCharacters = 72;

    const handleDescChange = (e) => {
        const newDesc = e.target.value;
        setDesc(newDesc);
    };

    // Date
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11)
    });

    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    }


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
            <div className='h-[75px] w-343 mx-4 mt-8'>
                <div>
                    <p className='text-white font-roboto-mono text-xs mb-2'>
                        Date
                    </p>
                    <Datepicker
                        primaryColor={"fuchsia"}
                        placeholder={"Date"}
                        popoverDirection="up"
                        containerClassName="relative h-12 w-343 color"
                        inputClassName="h-12 w-[160px] rounded focus:ring-0 text-white font-roboto-mono text-xs 
                    bg-black-dark p-3 dark:bg-green-900 dark:placeholder:text-green-100"
                        toggleClassName="absolute rounded-r-lg text-white left-[115px] h-full px-3 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
                        value={value}
                        onChange={handleValueChange}
                        // showShortcuts={true}
                        calendarClassName={"bg-black-dark"}
                        useRange={false}
                        asSingle={true}
                        minDate={new Date()}
                        displayFormat={"DD MMM,YYYY"}
                    />
                </div>

            </div>

        </div>
    )
}

export default ActivityDialog