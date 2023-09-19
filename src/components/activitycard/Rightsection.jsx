import React from "react";
import Header from "./Header";
import Card from "./Card";
import Createmobile from "./Createmobile";
import Default from "./Default";

const Rightsection = () => {
  return (
    <>
      <div className="py-6 px-4 bg-black-dark text-white">
        <Header />
        <Card/>
        <Createmobile/>
        <Default/>
      </div>
    </>
  );
};

export default Rightsection;
