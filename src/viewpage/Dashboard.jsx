import React, { useState, useEffect } from "react";
import Circle from "../components/circle/Circle";
import Chart from "../components/bar-chart/Chart";
import Rightsection from "../components/activitycard/Rightsection";
import Sidebar from "../components/sidebar-ham/Sidebar";
import Hamber from "../components/sidebar-ham/Hamber";
import Sideham from "../components/sidebar-ham/Sideham";
import Layout from "../components/sidebar-ham/Layout";
import Header from "../components/activitycard/Header";
import { useAuth } from "../components/auth/AuthContext";
import CircleMyLoader from "../components/circle/CircleMyLoader";
import CircleMobileMyLoader from "../components/circle/CircleMobileMyLoader";
import axiosService from "../service/axiosService";
import { Scrollbar } from 'react-scrollbars-custom';


function Dashboard() {
  const auth = useAuth();
  const [user, setUser] = useState(null)
  const [coinPercentState, setCoinPercentState] = useState(0)
  const [coinUser, setCoinUser] = useState(0)
  const [balance, setBalance] = useState(0)

  const scrollbarStyle = {
    width: 380,
    height: 800,
  };


  useEffect(() => {
    const getData = async () => {
      try {
        const method = 'GET';
        const url = `https://fit-up-project-backend.onrender.com/users/${auth.user._id}`; //.env
        const body = {}

        const response = await axiosService(method, url, body);
        setUser(response);

        const coinPercent2 = (100 * response.user_coin) / 30000
        setCoinPercentState(coinPercent2)
        setCoinUser(response.user_coin)
        setBalance(response.balance)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    getData()


  }, [auth.user])




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
      <div
        className={`grid grid-cols-4 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-12 gap-6 px-10  mx-auto w-full`}
      >
        <div className="w-full col-start-1 col-end-13 ">
          <div className="flex justify-between pt-10">
            <div className="text-white ">
              <Header />
            </div>
            <div className="hidden lg:inline  ">
              <Hamber />
            </div>
          </div>
        </div>
        {/* //Mobile */}
        <div className="w-[380px] h-[450px] col-start-auto col-end-2 sm:col-end-4 rounded-lg inline lg:hidden">
          <div className="">
            <Scrollbar style={{ width: 380, height: 450 }}>
              <Rightsection />
            </Scrollbar>;
          </div>
        </div>
        <div className="w-full h-auto col-start-auto col-end-2 sm:col-end-4 inline lg:hidden">
          <div className="flex flex-col gap-6">
            {user ? (<div className=" w-343 lg:w-full h-537 lg:h-324 rounded-lg bg-black-medium bg-opacity-60 bg-blur-xl py-6 px-4 lg:px-0 lg:flex">
              <Circle coinPercentState={coinPercentState} coinUser={coinUser} balance={balance} />
            </div>) : <CircleMobileMyLoader />}
            <div className="w-721 h-508 mb-8">
              <Chart />
            </div>
          </div>
        </div>

        {/* //desktop */}
        <div className="w-full h-856 col-start-1 col-end-7 lg:col-end-9 hidden lg:inline">
          <div className="flex flex-col gap-6">
            {user ? <div className="w-343 lg:w-full h-537 lg:h-324 rounded-lg bg-black-medium bg-opacity-60 bg-blur-xl py-6 px-4 lg:px-0 lg:flex"><Circle coinPercentState={coinPercentState} coinUser={coinUser} balance={balance} /></div> : <CircleMyLoader />}
            <div className=" w-721 h-508">
              <Chart />
            </div>
          </div>
        </div>

        <div className="min-w-auto w-[380px] min-h-auto h-[800px] col-start-9 col-end-13 rounded-lg hidden lg:inline">
          <div className="">
            <Scrollbar style={scrollbarStyle} >
              <Rightsection />
            </Scrollbar>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Dashboard;
