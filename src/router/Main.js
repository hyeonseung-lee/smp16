import React, { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import validator from "validator";

const Main = ({ userId, setUserId }) => {
  // console.log(userId);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [isNew, setIsNew] = useState(false);
  const [certNum, setCertNum] = useState();
  const navigate = useNavigate();
  const validateEmail = (email) => {
    if (validator.isEmail(email)) {
      return false;
    } else {
      return true;
    }
  };
  const changeHandler = (e) => {
    const value = e.target.value;
    const target = e.target.id;
    // console.log(target, value);
    switch (target) {
      case "name":
        setName(value);
        break;
      case "email-address":
        setEmail(value);
        break;
    }
  };
  const certChangeHandler = (e) => {
    const value = e.target.value;
    setCertNum(value);
  };

  const onClick = (e) => {
    e.preventDefault();
    // console.log(email, name);
    if (validateEmail(email)) {
      alert("이메일을 확인해주세요!");
    } else {
      const login = axios
        .post("http://13.125.152.225:3000/api/users/login", {
          email: email,
          name: name,
        })
        .then(function (response) {
          console.log("response");
          console.log(response);
          console.log(response.data.statusCode);
          console.log(response.data.data.id);
          setUserId(response.data.data.id);
          navigate(`/profile`);
        })
        .catch(function (error) {
          // console.log("error");
          // console.log(error);
          alert("방문해주셔서 감사합니다. \n 가입을 진행하겠습니다.");
          alert("입력해주신 메일로 전송된 인증번호를 입력해주세요");
          // console.log(email);
          sendCertEmailAndGetCertToken();
        });
    }
  };
  const sendCertEmailAndGetCertToken = async () => {
    console.log(email);
    const sendEmail = await axios
      .post("http://13.125.152.225:3000/api/users/signup/send", {
        email: email,
      })
      .then(function (response) {
        console.log(response.data.statusCode);
        setIsNew(true);
      })
      .catch(function (error) {
        console.log("error");
        console.log(error);
      });
  };

  const checkCert = (e) => {
    e.preventDefault();
    console.log("checkCert", certNum);
    const getCertNum = axios
      .post("http://13.125.152.225:3000/api/users/signup/chkToken", {
        email: email,
        token: certNum,
      })
      .then(function (response) {
        console.log(response);
        alert(response.data.data);
        navigate("/signIn", { state: { name, email } });
      })
      .catch(function (error) {
        console.log("error");
        console.log(error);
        alert("인증번호가 틀렸습니다.");
      });
  };
  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <Link to="/">
              <img
                className="mx-auto h-28 w-auto"
                src="https://sw-maestro.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe97f0af5-bb39-4ac6-9c41-fcbc96082cbf%2Flogo(250).png?table=block&id=d3ef903a-5073-43c9-be87-831ac7515b15&spaceId=461dcd9b-30d0-4f58-92fa-01a38636821b&width=250&userId=&cache=v2"
                alt="Workflow"
              />
            </Link>

            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              장인도 도구를 가린다.
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              16팀 {"  -  "}
              <Link
                to="/aboutUs"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                개발도 장비빨
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  onChange={changeHandler}
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="name" className="sr-only">
                  name
                </label>
                <input
                  id="name"
                  name="name"
                  onChange={changeHandler}
                  type="name"
                  autoComplete="current-name"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
                />
              </div>
              {isNew ? (
                <div>
                  <label htmlFor="certNum" className="sr-only">
                    인증번호 6자리
                  </label>
                  <input
                    id="certNum"
                    name="certNum"
                    onChange={certChangeHandler}
                    type="name"
                    autoComplete="current-name"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="인증번호 6자리"
                  />
                </div>
              ) : (
                <></>
              )}
            </div>

            {/* <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div> */}

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={isNew ? checkCert : onClick}
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                {isNew ? "인증하기" : "함께하기"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Main;
