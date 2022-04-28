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

export default function UserDetail() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState();
  const getUsers = async () => {
    const { data } = await axios.get(
      `http://13.125.152.225:3000/api/users/${id}`
    );
    setUser(data.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <NavBar />
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
                    {user.name}
                  </h2>
                  <dt className="font-medium text-7xl text-gray-900">
                    {user.power}
                  </dt>
                </div>
                <p className="mt-4 text-gray-500">{user.email}</p>

                <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">monitor</dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      {user.monitor}
                    </dd>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">mouse</dt>
                    <dd className="mt-2 text-sm text-gray-500">{user.mouse}</dd>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">keyboard</dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      {user.keyboard}
                    </dd>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">desktop</dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      {user.desktop}
                    </dd>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">notebook</dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      {user.notebook}
                    </dd>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">sticker</dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      {user.sticker}
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
                  ].map((d, i) => {
                    return (
                      <VictoryPolarAxis
                        dependentAxis
                        key={i}
                        label={d}
                        labelPlacement="perpendicular"
                        style={{ tickLabels: { fill: "none" } }}
                        axisValue={d}
                      />
                    );
                  })}
                  <VictoryBar
                    style={{ data: { fill: "#23B8E6", width: 40 } }}
                    data={[
                      { x: "monitor", y: parseInt(user.monitor) },
                      { x: "mouse", y: parseInt(user.mouse) },
                      { x: "keyboard", y: parseInt(user.keyboard) },
                      { x: "desktop", y: parseInt(user.desktop) },
                      { x: "notebook", y: parseInt(user.notebook) },
                      { x: "sticker", y: parseInt(user.sticker) },
                    ]}
                  />
                </VictoryChart>
              </div>
              <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
                  alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                  className="bg-gray-100 rounded-lg"
                />
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
                  alt="Top down view of walnut card tray with embedded magnets and card groove."
                  className="bg-gray-100 rounded-lg"
                />
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
                  alt="Side of walnut card tray with card groove and recessed card area."
                  className="bg-gray-100 rounded-lg"
                />
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
                  alt="Walnut card tray filled with cards and card angled in dedicated groove."
                  className="bg-gray-100 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
