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
    <div className=" bg-black-dark min-h-screen  mx-auto">
      {/* Sidebar */}
      {/* <Sidebar setStatus={setStatus} /> */}

      <div className="fixed">
        {/* <Sidebar />
        <Hamber /> */}
      </div>
      {/* Main Content */}
      <div className={`grid grid-cols-6 gap-6 px-10  mx-auto w-full`}>
        <div className="w-full col-start-1 col-end-13">
          <div className="flex justify-between py-10">
            <div className="text-white ">
              <Header />
            </div>
            <div className="hidden md:inline  ">
              <Hamber />
            </div>
          </div>
        </div>
        <div className="w-full h-856  col-start-1 col-end-9">
          <div className="flex flex-col gap-6">
            <div className="w-721">
              <Circle />
            </div>
            <div className=" w-721 h-508">
              <Chart />
            </div>
          </div>
        </div>
        <div className="w-auto h-856 col-start-1 col-end-6 rounded-lg ">
          <div className="h-856">
            <Rightsection />
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Dashboard;
