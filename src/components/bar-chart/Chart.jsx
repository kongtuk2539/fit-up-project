import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import CustomBar from "./CustomBar";



const Chart = () => {
  const [dateRange, setDateRange] = useState('');
  const [calories, setCalories] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const data = [
    {
      name: "S",
      date: "Sun, 20 Aug",
      cal: 500,
    },
    {
      name: "M",
      date: "Mon, 21 Aug",
      cal: 750,
    },
    {
      name: "T",
      date: "Tue, 22 Aug",
      cal: 600,
    },
    {
      name: "W",
      date: "Wed, 23 Aug",
      cal: 650,
    },
    {
      name: "Th",
      date: "Thu, 24 Aug",
      cal: 550,
    },
    {
      name: "F",
      date: "Fri, 25 Aug",
      cal: 1000,
    },
    {
      name: "S",
      date: "Sat, 26 Aug",
      cal: 875,
    }
  ];

  useEffect(() => {
    const fetchDateRange = async () => {
      try {
        // Fetch date range from the backend API
        const response = await fetch("your_backend_date_range_url");
        const result = await response.json();

        // Assuming the backend returns an object with calories, hours, and minutes
        setCalories(result.calories);
        setHours(result.hours);
        setMinutes(result.minutes);
        // Set other data as needed...

        // Fetch date range from the backend API
        const dateRangeResponse = await fetch("your_backend_date_range_url");
        const dateRangeResult = await dateRangeResponse.json();

        // Assuming the backend returns a single string representing the date range
        setDateRange(result);
      } catch (error) {
        console.error("Error fetching date range:", error);
      }
    };

    fetchDateRange();
  }, []);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip bg-white rounded pb-1 w-[132px] h-[65px]">
          <p className="label font-roboto-mono text-sm px-[16px] pb-0">{`${payload[0].payload.date}`}</p>
          <p className="intro font-roboto-mono font-bold px-[16px] text-xl">{`${payload[0].payload.cal} cal`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      {/* mt-24 mr-24 ml-56 mb-40 */}
      <container className="bg-[#2C2C2E] bg-opacity-60 bg-blur-xl flex lg:flex-row flex-col w-[343px] lg:w-721 h-[505px] lg:h-508 font-roboto-mono rounded-lg ">
        <div className="flex flex-col mt-[24px] w-512 h-400 lg:h-430">
          <heading className="w-156 h-41 mt-0 ml-[16px] lg:ml-[24px] absolute">
            <p className="text-white ">Weekly Performance</p>
            <p className="text-black-light ">{dateRange}</p>
          </heading>

          {/* destop */}
          <chart className="h-373 mt-[118px] ml-2 lg:block hidden">
            <BarChart
              width={555}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="5 5" vertical={false} strokeOpacity='20%' stroke='#b4b5b7' />
              <XAxis dataKey="name" stroke='#b4b5b7' />
              <YAxis domain={[0, 1000]} stroke='#b4b5b7' />
              <Tooltip cursor={{ fill: 'transparent' }} content={<CustomTooltip />} />

              <Bar dataKey="cal" fill={'#54D2FF'} shape={<CustomBar />} barSize={40} />

            </BarChart>
          </chart>

          {/* mobile */}
          <chart className="h-323 mt-[75px] ml-0 lg:hidden ">
            <BarChart
              width={353}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="5 5" vertical={false} strokeOpacity='30%' stroke='#b4b5b7' />
              <XAxis dataKey="name" stroke='#b4b5b7' />
              <YAxis domain={[0, 1000]} stroke='#b4b5b7' />
              <Tooltip
                cursor={{ fill: 'transparent' }}
                content={<CustomTooltip />}

              />
              <Bar dataKey="cal" fill={'#54D2FF'} shape={<CustomBar />} barSize={20} />

            </BarChart>
          </chart>
        </div>

        <calculation className="text-white flex flex-row lg:flex-col items-start justify-center gap-8 pr-2">
          <div>
            <p>
              Total
            </p>
            <p className="text-blue font-orbitron font-bold text-xl">4200 cal</p>
          </div>
          <div>
            <p>
              Duration
            </p>
            <p className="text-blue font-orbitron font-bold text-xl">12 hours <br />40 minutes</p>
          </div>
        </calculation>
      </container>
    </>
  )
}


// const Header = () => {
//   const currentDate = new Date();
//   const currentWeekday = currentDate.toLocaleString("default", {weekday: "long",});
//   const currentDay = currentDate.getDate();
//   const currentMonth = currentDate.toLocaleString("default", {month: "short",});
//   return (
//     <div>
//       <h1 className="text-32 font-bold font-orbitron mt-10 sm:mt-14  md:mt-0">Dashboard</h1>
//       <p className="font-roboto-mono">
//         {currentWeekday}, {currentDay} {currentMonth}
//       </p>
//     </div>
//   );
// };


export default Chart;