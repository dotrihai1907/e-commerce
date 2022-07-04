import Vector from "../../assets/vectors/Vector.png";

import { useState } from "react";

function Register() {
  const [type, setType] = useState("password");

  const handleChangeType = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  return (
    <div className="absolute top-[17.5%] left-[21.1%] w-[832px] h-[395px] rounded-[20px] bg-white shadow-form overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 right-[50%] bg-[#FAF096]">
        <h1 className=" absolute top-[68px] w-full text-[68px] leading-[80px] text-center font-[700] not-italic">
          Shop App
        </h1>
        <img
          src={Vector}
          alt="Shop App"
          className="absolute bottom-[20.76%] right-[34%] w-[133px] h-[150px]"
        />
      </div>

      <div className="absolute right-0 left-[50%] bottom-0 top-0">
        <div className="absolute w-[319.17px] h-[278px] top-[17.2%] right-[11.3%] bottom-[12.4%]">
          <h1 className="text-[24px] font-[700] leading-[28px] h-[28px] not-italic ">
            Welcome to Shop App
          </h1>
          <input
            type="username"
            placeholder="User Name"
            className="absolute pl-[9px] top-[58px] left-[11px] input focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email@mail.com"
            className="absolute pl-[9px] top-[95px] left-[11px] input focus:outline-none"
          />
          <label>
            <input
              type={type}
              placeholder="Password"
              className="absolute pl-[9px] top-[132px] left-[11px] input focus:outline-none"
            />
            <div
              className="absolute top-[136px] right-[16.2px] font-[700] text-[12px] leading-[14px] text-[#585757] not-italic w-[48px] h-[14px] cursor-pointer flex justify-end"
              onClick={handleChangeType}
            >
              Show
            </div>
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            className="absolute pl-[9px] top-[169px] left-[11px] input focus:outline-none"
          />
          <button className="absolute hover:opacity-80 top-[212px] left-[11px] w-[296px] bg-[#FFD333] rounded-[5px] h-[37px] font-[700] text-[24px] leading-[28.13px]">
            Register
          </button>
          <div className="absolute cursor-pointer top-[262px] w-[295px] h-[16px] text-center font-[700] text-[14px] leading-[16.41px] not-italic text-[#646464]">
            Login
          </div>
        </div>
        <div className="absolute w-[31px] h-[31px] top-[2.5%] right-[2.4%] bg-white box-border border-1 border-[#E4E4E4] border-solid shadow-form rounded-[50%]">
          <h1 className="font-red_rose not-italic font-[700] text-[24px] leading-[30px] text-[#626060] text-center">
            x
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Register;
