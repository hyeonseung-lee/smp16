import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import * as V from "victory";
import {
  VictoryPolarAxis,
  VictoryTheme,
  VictoryChart,
  VictoryBar,
} from "victory";

export default function Profile({ userId, setUserId }) {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState();
  // console.log(userId);
  const getUsers = async () => {
    const { data } = await axios.get(
      `http://13.125.152.225:3000/api/users/${userId}`
    );
    setUserData(data.data);
    // console.log(userData);
    setIsLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <NavBar userId={userId} setUserId={setUserId} />
      {isLoading ? (
        <div>
          <h1>Loading....</h1>
        </div>
      ) : (
        <div>
          <div className="bg-white">
            <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    {userData.user.name}
                  </h2>
                  <dt className="font-medium text-7xl text-gray-900">
                    {parseInt(userData.user.power)}
                  </dt>
                </div>
                <p className="mt-4 text-gray-500">{userData.user.email}</p>

                <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">monitor</dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      {userData.user.monitor}
                    </dd>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">mouse</dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      {userData.user.mouse}
                    </dd>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">keyboard</dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      {userData.user.keyboard}
                    </dd>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">desktop</dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      {userData.user.desktop}
                    </dd>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">notebook</dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      {userData.user.notebook}
                    </dd>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">sticker</dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      {userData.user.sticker}
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="w-full">
                <VictoryChart polar theme={VictoryTheme.material}>
                  {[
                    "monitor",
                    "mouse",
                    "keyboard",
                    "desktop",
                    "notebook",
                    "sticker",
                  ].map((data, idx) => {
                    return (
                      <VictoryPolarAxis
                        dependentAxis
                        key={idx}
                        label={data}
                        labelPlacement="perpendicular"
                        style={{ tickLabels: { fill: "none" } }}
                        axisValue={data}
                      />
                    );
                  })}
                  <VictoryBar
                    style={{ data: { fill: "#23B8E6", width: 40 } }}
                    data={[
                      {
                        x: "monitor",
                        y: parseFloat(userData.normalized.monitor),
                      },
                      { x: "mouse", y: parseFloat(userData.normalized.mouse) },
                      {
                        x: "keyboard",
                        y: parseFloat(userData.normalized.keyboard),
                      },
                      {
                        x: "desktop",
                        y: parseFloat(userData.normalized.desktop),
                      },
                      {
                        x: "notebook",
                        y: parseFloat(userData.normalized.notebook),
                      },
                      {
                        x: "sticker",
                        y: parseFloat(userData.normalized.sticker),
                      },
                    ]}
                  />
                </VictoryChart>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
