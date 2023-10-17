import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import CustomTooltip from "./CustomTooltip";
import CustomBar from "./CustomBar";

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

const Chart = () => {
  return (
    <>
      {/* mt-24 mr-24 ml-56 mb-40 */}
      <container className="bg-[#2C2C2E] flex lg:flex-row flex-col w-[343px] lg:w-721 h-[589px] lg:h-508 font-roboto-mono rounded-lg ">
        <div className="flex flex-col mt-[24px] w-512 h-430">
          <heading className="w-156 h-41 mt-0 ml-[16px] lg:ml-[24px] absolute">
            <p className="text-white ">Weekly Performance</p>
            <p className="text-black-light ">(20 Sun - 26 Sat)</p>
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
              <CartesianGrid strokeDasharray="5 5" vertical={false} strokeOpacity='20%' />
              <XAxis dataKey="name" />
              <YAxis domain={[0, 1000]} />
              <Tooltip cursor={{ fill: 'transparent' }} content={<CustomTooltip />} />

              <Bar dataKey="cal" fill={'#54D2FF'} shape={<CustomBar />} barSize={40} />

            </BarChart>
          </chart>

          {/* mobile */}
          <chart className="h-373 mt-[118px] ml-0 lg:hidden">
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
              <CartesianGrid strokeDasharray="5 5" vertical={false} strokeOpacity='20%' />
              <XAxis dataKey="name" />
              <YAxis domain={[0, 1000]} />
              <Tooltip
                //labelStyle={{width: 70, height:49} }
                // wrapperStyle={{ backgroundColor: '#000' }} 
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

export default Chart