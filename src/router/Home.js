import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { usersApi } from "../api";
import DevBanner from "../components/DevBanner";
import NavBar from "../components/NavBar";

const Home = ({ userId, setUserId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState();
  const getUsers = async () => {
    const { data } = await axios.get("http://13.125.152.225:3000/api/users");
    setUserData(data.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  // console.log(isLoading);
  // console.log(userData);
  return (
    <>
      <NavBar userId={userId} setUserId={setUserId} />
      <div className="w-full flex flex-col items-center">
        {isLoading ? (
          <div>
            <h1>Loading....</h1>
          </div>
        ) : (
          userData.map((user, index) => (
            <DevBanner userObj={user} key={index} />
          ))
        )}
      </div>
    </>
  );
};

export default Home;
