import React from "react";
import Circle from "../components/circle/Circle";
import Chart from "../components/bar-chart/Chart";
import Rightsection from "../components/activitycard/Rightsection";
import Sidebar from "../components/sidebar-ham/Sidebar";
import Hamber from "../components/sidebar-ham/Hamber";
import Sideham from "../components/sidebar-ham/Sideham";
import Layout from "../components/sidebar-ham/Layout";
import Header from "../components/activitycard/Header";
function Dashboard() {
  return (
    // <Layout>
    <div className=" bg-transparent min-h-screen  mx-auto">
      {/* Sidebar */}
      {/* <Sidebar setStatus={setStatus} /> */}

      <div className="fixed">
        {/* <Sidebar />
        <Hamber /> */}
      </div>
      {/* Main Content */}
      <div className={`grid grid-cols-4 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-12 gap-6 px-10  mx-auto w-full`}>
        <div className="w-full col-start-1 col-end-13 border border-red">
          <div className="flex justify-between pt-10">
            <div className="text-white border border-red">
              <Header />
            </div>
            <div className="hidden lg:inline  ">
              <Hamber />
            </div>
          </div>
        </div>
        {/* //Mobile */}
        <div className="border border-red w-auto h-auto col-start-auto col-end-2 sm:col-end-4 rounded-lg inline lg:hidden">
          <div className="">
            <Rightsection />
          </div>
        </div>
        <div className="w-full h-856 col-start-auto col-end-2 sm:col-end-4 border border-red inline lg:hidden">
          <div className="flex flex-col gap-6">
            <div className="w-721">
              <Circle />
            </div>
            <div className=" w-721 h-508">
              <Chart />
            </div>
          </div>
        </div>

        {/* //desktop */}
        <div className="w-full h-856 col-start-1 col-end-7 lg:col-end-9 border border-red hidden lg:inline">
          <div className="flex flex-col gap-6">
            <div className="w-721">
              <Circle />
            </div>
            <div className=" w-721 h-508">
              <Chart />
            </div>
          </div>
        </div>

        <div className="w-auto h-auto col-start-9 col-end-13 rounded-lg hidden lg:inline border border-red">
          <div className="">
            <Rightsection />
            <div />
            <div />
            <div />
            );
}

            export default Dashboard;
