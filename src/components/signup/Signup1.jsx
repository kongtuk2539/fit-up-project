import React, { useState } from "react";
// import "../App.css";
import Header from "./component/header";
import Topsection from "./component/topsection";
import Divider from "./component/Divider";
import Form1 from "./component/Form1";
import Page2 from "./Signup2";
import GoogleButton from "../signincomponents/GoogleButton";
import axios from "axios";

const Signup1 = () => {
  const [data, setData] = useState({});
  const [isNext, setIsNext] = useState(false);

  const createUser = (formData2) => {
    const formData = {
      user_firstName: data.firstname,
      user_lastName: data.lastname,
      user_email: data.email,
      user_username: formData2.username,
      user_password: data.password,
      user_birthDate: formData2.dob.startDate,
      user_Gender: formData2.gender,
      user_weight: formData2.weight,
      user_height: formData2.height,
      user_image: formData2.urlimg || 'https://res.cloudinary.com/depnyvk3i/image/upload/v1697558091/img/gipe5emvoyfgnhvcjg7b.png'
    };

    console.log('create => ', formData);

    return new Promise((resolve, reject) => {
      axios
        .post('https://fit-up-project-backend.onrender.com/users/', formData)
        .then(async (response) => {
          let result = await response
          console.log('API Response:', result.data); // Check the structure of the response
          console.log('create => ', result.data);
          resolve(true);
        })
        .catch((error) => {
          console.error('Error fetching user data:', error.response.data.message);
          reject(false);
        })
        .finally(() => {
        });
    });
  };

  console.log(data)

  return (
    <div className="dialog-container z-50 flex justify-center items-center h-full animate-in zoom-in-50 bg-gray-op90">
      <div className="bg-black-medium w-[375px] h-full lg:w-[423px] lg:p-10">
        {
          isNext ? (<Page2 createUser={createUser} />) :
            <div>
              <Header />
              <div className="px-4 py-6 lg:px-0 lg:pt-2">
                <Topsection />
                <div className="py-6">
                  <GoogleButton />
                </div>
                <Divider />
                <Form1 setData={setData} setIsNext={setIsNext} />
              </div>
            </div>
        }
      </div>
    </div>
  );
};

export default Signup1;
