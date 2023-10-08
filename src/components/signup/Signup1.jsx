import React from "react";
// import "../App.css";
import Header from "./component/header";
import Topsection from "./component/topsection";
import Divider from "./component/Divider";
import Form1 from "./component/Form1";
import NextButton from "./component/nextbutton";
import GoogleButton from "../signincomponents/GoogleButton";

const Signup1 = () => {
  return (
    <div className="bg-black-medium w-[375px] h-full lg:w-[423px] lg:p-10">
      <Header />
      <div className="px-4 py-6 lg:px-0 lg:pt-2">
        <Topsection />
        <div className="py-6">
            <GoogleButton/>
        </div>
        <Divider/>
        <Form1/>
        {/* <NextButton/> */}
      </div>
    </div>
  );
};

export default Signup1;
