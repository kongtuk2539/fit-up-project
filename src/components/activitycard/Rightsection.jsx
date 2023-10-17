import React from "react";
import Header from "./Header";
import Card from "./Card";
import Createmobile from "./Createmobile";
import Default from "./Default";

// const checkTodayCardExists = async (userId) => {
//   // Your MongoDB query logic here
//   const today = new Date().toISOString().slice(0, 10); // Get the current date in YYYY-MM-DD format
//   try {
//     // Your MongoDB retrieval logic here
//     // Fetch the user's data and check if there is a card for today
//     // Return true if today's card exists for the user, otherwise return false
//   } catch (error) {
//     console.error(error);
//     return false; // Handle any errors and return false
//   }
// };

const Rightsection = () => {
  // const haveCard = false;
  // const haveCard = checkTodayCardExists(userId); // Assuming you have the userId available
  // const checkTodayCardExists = () => {
  //   const today = new Date();
  // }
  return (
    <>
      {/* <div className=" bg-black-dark text-white">
        {haveCard ? (
          <>
            <Card />
            <Createmobile />
          </>
        ) : (
          <Default />
        )}
      </div> */}
      <Card/>
    </>
  );
};

export default Rightsection;
