import React from "react";
import Header from "./Header";
import Card from "./Card";
import Createmobile from "./Createmobile";
import Default from "./Default";

// useEffect(() => {
//   const getDataById = async () => {
//     const response = await axios.get(
//       "https://fit-up-project-backend.onrender.com/activities/651edfb83fcee8250bbe6df1"
//     );
//     console.log(response.data);
//     setActivities(response.data);
//   };
//   getDataById();
// }, []);

const Rightsection = () => {
 const haveCard = false;
 
  // // const haveCard = checkTodayCardExists(userId); // Assuming you have the userId available
  // // const checkTodayCardExists = () => {
  // //   const today = new Date();
  // // }
  return (
    <>
      <div className="  text-white">
        {/* <Header /> */}
        {haveCard ? (
          <>
            <Card />
            <Createmobile />
          </>
        ) : (
          <Default />
        )}
      </div> 
      <Card/>
    </>
  );
};

export default Rightsection;
