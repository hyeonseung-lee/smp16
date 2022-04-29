import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "@material-tailwind/react/tailwind.css";
import Progress from "@material-tailwind/react/Progress";
import PaginationItem from "@material-tailwind/react/PaginationItem";
import Icon from "@material-tailwind/react/Icon";

import axios from "axios";

const SignIn = () => {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [step, setStep] = useState(0);
  const [monitor, setMonitor] = useState([]);
  const [mouse, setMouse] = useState([]);
  const [keyboard, setKeyboard] = useState([]);
  const [desktop, setDesktop] = useState([]);
  const [notebook, setNotebook] = useState([]);
  const [sticker, setSticker] = useState([]);
  const items = [monitor, mouse, keyboard, desktop, notebook, sticker];
  const itemsInEng = [
    "monitor",
    "mouse",
    "keyboard",
    "desktop",
    "notebook",
    "sticker",
  ];
  const itemsInKo = [
    "모니터",
    "마우스",
    "키보드",
    "데스크탑",
    "노트북",
    "스티커",
  ];
  const changeHandler = (e) => {
    const value = e.target.value;
    const target = e.target.id;
    // console.log(target, value);
    switch (target) {
      case "price":
        setPrice(value);
        break;
      case "device":
        setItem(value);
        break;
    }
  };

  const onClickRight = (e) => {
    e.preventDefault();
    if (step < itemsInEng.length - 1) {
      setStep(step + 1);
    }
    switch (step) {
      case 0:
        setMonitor([item, price]);
        break;
      case 1:
        setMouse([item, price]);
        break;
      case 2:
        setKeyboard([item, price]);
        break;
      case 3:
        setDesktop([item, price]);
        break;
      case 4:
        setNotebook([item, price]);
        break;
      case 5:
        setSticker([item, price]);
        break;
    }
    setItem("");
    setPrice("");
  };
  const onClickLeft = (e) => {
    e.preventDefault();
    if (0 < step) {
      setStep(step - 1);
    }
  };
  const postUserData = () => {
    console.log(items);
  };
  const onClickSubmit = (e) => {
    e.preventDefault();
    setSticker(price);
    setPrice("");
    // api post
    // navigete home
  };
  // useEffect(postUserData(), sticker);
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
              처음이신가요?
            </h2>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              당신의 도구를 소개해주세요.
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              이름 {"  -  "} 이메일@이메일.com
              {/* <Link
                to="/aboutUs"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                개발도 장비빨
              </Link> */}
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="text-sm flex justify-center">
              <a href="#" className="text-xl font-medium text-black">
                {step < 5
                  ? `${itemsInKo[step]}는 어떤걸 쓰시나요?`
                  : `${itemsInKo[step]}는 몇 개를 붙이셨나요?`}
              </a>
            </div>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="flex items-center">
              {step > 0 ? (
                <PaginationItem ripple="dark">
                  <button onClick={onClickLeft}>
                    <Icon name="keyboard_arrow_left" />
                  </button>
                </PaginationItem>
              ) : (
                <></>
              )}

              {step < 5 ? (
                <div className="w-11/12 mr-2 rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="device" className="sr-only">
                      기종
                    </label>
                    <input
                      id="device"
                      value={item}
                      name="device"
                      onChange={changeHandler}
                      type="device"
                      autoComplete="device"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="기종"
                    />
                  </div>
                  <div>
                    <label htmlFor="price" className="sr-only">
                      가격
                    </label>
                    <input
                      id="price"
                      value={price}
                      name="price"
                      onChange={changeHandler}
                      type="number"
                      autoComplete="price"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="가격 ₩ (숫자만 입력해주세요.)"
                    />
                  </div>
                </div>
              ) : (
                <div className="w-11/12 mr-2 rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="price" className="sr-only">
                      갯수
                    </label>
                    <input
                      id="price"
                      value={price}
                      name="price"
                      onChange={changeHandler}
                      type="number"
                      autoComplete="price"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="갯수 (숫자만 입력해주세요.)"
                    />
                  </div>
                  <div className="">
                    <button
                      type="submit"
                      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={async (e) => {
                        await onClickSubmit(e);
                        await postUserData(e);
                      }}
                    >
                      제출하기
                    </button>
                  </div>
                </div>
              )}
              {step < itemsInEng.length - 1 ? (
                <PaginationItem ripple="dark">
                  <button onClick={onClickRight}>
                    <Icon name="keyboard_arrow_right" />
                  </button>
                </PaginationItem>
              ) : (
                <></>
              )}
            </div>
            <Progress
              color="blue"
              value={parseInt(((step + 1) / itemsInEng.length) * 100)}
              percentage={false}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
