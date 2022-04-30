/* This example requires Tailwind CSS v2.0+ */
import { PaperClipIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

const AboutUs = ({ userId, setUserId }) => {
  return (
    <>
      <NavBar userId={userId} setUserId={setUserId} />
      <div className=" bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            About us.
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Software Maestro Team 16
          </p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                박정무
              </dd>
              <div>
                <div className="flex justify-between mr-10">
                  <dt className="text-sm font-medium text-gray-500">Backend</dt>
                  <dt className="text-sm font-medium text-gray-500">
                    JavaScript, Node.js
                  </dt>
                  <dt className="text-sm font-medium text-gray-500">
                    박붕어입니다.
                  </dt>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                고강현
              </dd>
              <div>
                <div className="flex justify-between mr-10">
                  <dt className="text-sm font-medium text-gray-500">Backend</dt>
                  <dt className="text-sm font-medium text-gray-500">
                    JavaScript, Node.js
                  </dt>
                  <dt className="text-sm font-medium text-gray-500">
                    나아가는 개발자 Go강현입니다.
                  </dt>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                최민준
              </dd>
              <div>
                <div className="flex justify-between mr-10">
                  <dt className="text-sm font-medium text-gray-500">Backend</dt>
                  <dt className="text-sm font-medium text-gray-500">
                    JavaScript, Node.js
                  </dt>
                  <dt className="text-sm font-medium text-gray-500">
                    가치를 만드는 개발자가 되고싶은 최민준입니다.
                  </dt>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                이현승
              </dd>
              <div>
                <div className="flex justify-between mr-10">
                  <dt className="text-sm font-medium text-gray-500">
                    Frontend
                  </dt>
                  <dt className="text-sm font-medium text-gray-500">
                    ReactJS, ReactNative
                  </dt>
                  <dt className="text-sm font-medium text-gray-500">
                    기능을 위한 디자인. 이현승입니다.
                  </dt>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                서일
              </dd>
              <div>
                <div className="flex justify-between mr-10">
                  <dt className="text-sm font-medium text-gray-500">
                    랜딩페이지
                  </dt>
                  <dt className="text-sm font-medium text-gray-500">
                    Python, Sklearn
                  </dt>
                  <dt className="text-sm font-medium text-gray-500">
                    폐기된 이전 기획의 추천시스템을 맡은 ML 잡범입니다.
                  </dt>
                </div>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
