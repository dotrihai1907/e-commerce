import Vector from "../../assets/vectors/Vector.png";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectDeviceId } from "../../redux/auth/selector";

import { verifyEmail } from "../../redux/auth/action";

function Verify() {
  const [token, setToken] = useState();

  const deviceId = useSelector(selectDeviceId);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBackHome = () => {
    navigate("/");
  };

  const handleVerifyEmail = () => {
    dispatch(verifyEmail(token, deviceId));
  };
  return (
    <div className="absolute top-[17.5%] left-[21.1%] w-[832px] h-[395px] rounded-[20px] bg-white shadow-form overflow-hidden z-[50]">
      <div className="absolute left-0 top-0 bottom-0 right-[50%]">
        <div className="absolute w-[319.17px] h-[243px] top-[12.9%] left-[11.3%]">
          <h1 className="text-[24px] font-[700] leading-[28px] not-italic ">
            Verify Email
          </h1>
          <p className="absolute top-[35px] w-[295px] h-[14px] not-italic font-[400] text-[12px] leading-[14px] text-black">
            Please enter the code sent to your registered email to verify
          </p>
          <input
            value={token}
            onChange={(e) => setToken(e.target.value)}
            type="code"
            placeholder="Code"
            className="absolute pl-[9px] top-[100px] left-[11.65px] input focus:outline-none "
          />
          <button
            onClick={handleVerifyEmail}
            className="absolute hover:opacity-80 top-[177px] left-[11.65px] w-[296px] bg-[#FFD333] rounded-[5px] h-[37px] font-[700] text-[24px] leading-[28.13px]"
          >
            Verify
          </button>
          <div
            onClick={handleBackHome}
            className="absolute cursor-pointer top-[227px] w-[295px] h-[16px] text-center font-[700] text-[14px] leading-[16.41px] not-italic text-[#646464]"
          >
            Back Home
          </div>
        </div>
      </div>

      <div className="absolute bg-[#FAF096] right-0 left-[50%] bottom-0 top-0">
        <h1 className=" absolute top-[68px] w-full text-[68px] leading-[80px] text-center font-[700] not-italic">
          Shop App
        </h1>
        <img
          src={Vector}
          alt="Shop App"
          className="absolute bottom-[20.76%] right-[34%] w-[133px] h-[150px]"
        />
        <div
          onClick={handleBackHome}
          className="absolute cursor-pointer w-[31px] h-[31px] top-[2.5%] right-[2.4%] bg-white box-border border-1 border-[#E4E4E4] border-solid shadow-form rounded-[50%]"
        >
          <h1 className="font-red_rose not-italic font-[700] text-[24px] leading-[30px] text-[#626060] text-center">
            x
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Verify;
