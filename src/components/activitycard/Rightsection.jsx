import React, { useState, useEffect } from "react";
import Card from "./Card";
import Createmobile from "./Createmobile";
import Default from "./Default";
import axios from "axios";

const Rightsection = () => {
  const [haveCard, setHaveCard] = useState(false);
  const [activities, setActivities] = useState([]);
  const [reload, setReload] = useState(false);


  const getTodayDataById = async () => {
    try {
      const response = await axios.get(
        "https://fit-up-project-backend.onrender.com/activities/getToday/651edfb83fcee8250bbe6df1",
        {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTJlYjE0NjYwYzQ0MGY4MzFkYTJhNTAiLCJmaXJzdG5hbWUiOiJpc0xvYWRpbmdfMTEiLCJsYXN0bmFtZSI6ImlzTG9hZGluZ18xMSIsInVzZXJuYW1lIjoiaXNMb2FkaW5nXzExIiwiZW1haWwiOiJpc0xvYWRpbmdfMTFAMTIzNC5jb20iLCJpYXQiOjE2OTc2ODUwMDUsImV4cCI6MTY5NzY4ODYwNX0.1WCrUqU_9JDZqGocW_fnXOiRYci_Ov6dATHHyOT-Y2k'
          }
        }
      );
      console.log(response.data);
      setActivities(response.data);
      if (response.data.length > 0) {
        setHaveCard(true);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      // Any cleanup or final tasks can be done here
      // This block will be executed regardless of whether the request was successful or failed
    }
  };

  useEffect(() => {
    getTodayDataById();
  }, [reload]);

  return (
    <>
      <div className="  text-white">
        {/* <Card/> */}
        {haveCard ? (
          <>
            <Createmobile activities={activities} />
            <Card activities={activities} setActivities={setActivities} reload={reload} setReload={setReload} />
          </>
        ) : (
          <Default />
        )}
      </div>
    </>
  );
};

export default Rightsection;
