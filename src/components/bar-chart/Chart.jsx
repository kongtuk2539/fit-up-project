import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
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
      <container className="bg-[#2C2C2E] inline-block w-721 h-508 mt-24 mr-24 ml-56 mb-40">

        <div className="flex flex-col mt-24 ml-24 w-512 h-430">
          <heading className="w-156 h-41 mt-0 ml-0">
            <p className="text-white">Weekly Performance</p>
          </heading>
          <chart className="h-373 mt-16 ml-0">
            <BarChart
              width={512}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis domain={[0, 1000]} />
              <Tooltip cursor={{ fill: 'transparent' }} content={<CustomTooltip />} />

              <Bar dataKey="cal" fill={'#54D2FF'} shape={<CustomBar />} barSize={40} />

            </BarChart>
          </chart>
        </div>

        <calculation>
          <p>
            total
          </p>
          <p>
            Duration
          </p>
        </calculation>
      </container>
    </>
  )
}

export default Chart