import React, { useState, useEffect } from "react";
import axios from "axios";
import Actionbutton from "./Actionbutton";

const Card = () => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://fit-up-project-backend.onrender.com/activities"
      );
      console.log(response.data);
      setActivities(response.data);
    };
    getData();
  }, []);

  return (
    <>
      {activities.map((activity)=> (
        <div className="bg-run bg-cover w-343 h-324 rounded-lg mb-6 text-white relative">
          <div className="flex justify-end ">
            {/* menu */}
            <Actionbutton />

            {/* text */}
            <div className="absolute bottom-0 left-0 py-6 px-4">
              <h2 className="text-2xl font-bold font-orbitron">{activity.activity_name}</h2>
              <p className="font-roboto-mono">
              {activity.activity_desc}
              </p>
              <p className="mt-4 text-sm font-roboto-mono text-white-op70">
              {activity.activity_date} ({activity.activity_duration})
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
