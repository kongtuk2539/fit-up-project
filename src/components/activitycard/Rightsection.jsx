import React from "react";
import Header from "./Header";
import Card from "./Card";
import Createmobile from "./Createmobile";
import Default from "./Default";

const Rightsection = () => {
  const haveCard = false;
  return (
    <>
      <div className=" bg-black-dark text-white">
        {/* <Header /> */}
        {haveCard ? (
          <>
            <Card />
            <Createmobile />
          </>
        ) : (
          <Default />
        )}
        {/* <Form/> */}

        {/* <Header />
        <Card/>
        <Createmobile/>
        <Default/> */}
      </div>
    </>
  );
};

export default Rightsection;
