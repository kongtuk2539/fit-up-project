import React from "react";
import Header from "./Header";
import Card from "./Card";
import Createmobile from "./Createmobile";
import Default from "./Default";
// import Form from "../form/Form";

const Rightsection = () => {
  const haveCard = true;
  return (
    <>
      <div className="py-6 px-4 bg-black-dark text-white">
        <Header />
        {haveCard ? (
          <>
            <Card />
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
