import React, { useState, useEffect } from "react";
import Card from "./Card";
import Createmobile from "./Createmobile";
import Default from "./Default";
import axios from "axios";

const Rightsection = () => {
  const [haveCard, setHaveCard] = useState(false);
//  const haveCard = true;
  const [activities, setActivities] = useState([]);
  
 
    // const getTodayDataById = () => {
    //   // รอรับค่า id
    //   axios
    //     .get(
    //       "https://fit-up-project-backend.onrender.com/activities/getToday/651edfb83fcee8250bbe6df1"
    //     )
    //     .then((response) => {
    //       console.log(response.data);
    //       setActivities(response.data);
    //       if (activities.length > 0) {
    //         setHaveCard(true);
    //         console.log('length');
    //       }
    //       console.log('set', activities);
    //     })
    //     .catch((error) => {
    //       // Handle any errors from the request
    //       console.error("Error fetching data: ", error);
    //     })
    //     .finally(() => {
    //       // Any cleanup or final tasks can be done here
    //       // This block will be executed regardless of whether the request was successful or failed
    //     });
    // };

    const getTodayDataById = async () => {
      try {
        const response = await axios.get(
          "https://fit-up-project-backend.onrender.com/activities/getToday/651edfb83fcee8250bbe6df1"
        );
        console.log(response.data);
        setActivities(response.data);
        if (response.data.length > 0) {
          setHaveCard(true);
          console.log('length');
        }
        console.log('set', response.data);
      } catch (error) {
        // Handle any errors from the request
        console.error("Error fetching data: ", error);
      } finally {
        // Any cleanup or final tasks can be done here
        // This block will be executed regardless of whether the request was successful or failed
      }
    };

    useEffect(()=> {getTodayDataById()},[]);


  return (
    <>
      <div className="  text-white">
        {/* <Card/> */}
        {haveCard ? (
          <>
            <Card activities={activities} setActivities={setActivities} />
            <Createmobile />
          </>
        ) : (
          <Default />
        )}
      </div> 
    </>
  );
};

export default Rightsection;
