import { BsFillShieldLockFill } from "react-icons/bs";
import { FiDelete } from "react-icons/fi";
import { useState } from "react";
import "./styles.css";
import { Battery, CellularSignal, Wifi } from "../assets/image";

const LockScreenPin = () => {
  const [input, setInput] = useState<string>("");

  const backSpace: any = <FiDelete />;

  let listNumbers: Array<any> = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "#",
    "0",
    backSpace,
  ];

  const listIndexs: Array<number> = [1, 2, 3, 4];

  const time: any = new Date();
  let hours: number = time.getHours();
  let minutes: number = time.getMinutes();

  function handleClick(keyboard: string): any {
    setInput((prevInput: any): any => {
      return `${prevInput}${keyboard}`.slice(0, 4);
    });
  }

  const keyboards = listNumbers.map((keyboard, index) => (
    <div key={index}>
      <button
        onClick={() => {
          handleClick(keyboard);
          if (keyboard === backSpace) {
            setInput(input.slice(0, input.length - 1));
          }
        }}
        type="button"
        className="w-14 h-14 py-2.5 px-5 mr-2 mb-2 text-xl font-medium text-gray-900 focus:outline-none bg-white rounded-[50%] border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
        {keyboard}
      </button>
    </div>
  ));

  // console.log("length: ", input.length);
  console.log("input: ", input);

  return (
    <>
      {/* Status Bar */}
      <div className="flex justify-between">
        <div className="time text-sm">
          <a>
            {hours}:{minutes < 10 ? `0${minutes}` : minutes}
          </a>
        </div>
        <div className="options flex gap-1">
          <i>
            <img src={CellularSignal} alt="" className="w-5" />
          </i>
          <i>
            <img src={Wifi} alt="" className="w-5" />
          </i>
          <i>
            <img src={Battery} alt="" className="w-5 " />
          </i>
        </div>
      </div>

      {/* Password */}
      <div className="flex flex-col mt-8">
        <div className="flex justify-center">
          <i>
            <BsFillShieldLockFill />
          </i>
        </div>
        <p className="mt-4 text-sm font-semibold">Confirm your new PIN</p>
        <div className="flex justify-center gap-3 mt-6">
          {listIndexs.map((index) => {
            return (
              <div key={index}>
                <div
                  className={` w-3 h-3 border-2 rounded-[50%] border-solid border-black ${
                    input.length >= index ? "bg-black" : ""
                  } ${input.length >= 4 ? "shaking" : ""}`}></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Keyboard */}
      <div className="flex justify-center mt-10">
        <div className="max-w-[196px] flex flex-wrap">{keyboards}</div>
      </div>
      <p className="mt-28 text-xs text-gray-400">
        This keeps your account secure
      </p>
    </>
  );
};

export default LockScreenPin;
