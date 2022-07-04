import Vector from "../../assets/vectors/Vector.png";
import { useState } from "react";

import { useDispatch } from "react-redux";

import { login } from "../../redux/auth/action";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login(email, password));
  };

  return (
    <div className="absolute top-[-20.5%] left-[-30.9%] w-[832px] h-[395px] rounded-[20px] bg-white shadow-form overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 right-[50%]">
        <div className="absolute w-[319.17px] h-[247px] top-[12.9%] left-[11.3%]">
          <h1 className="text-[24px] font-[700] leading-[28px] not-italic ">
            Welcome to Shop App
          </h1>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email@mail.com"
            className="absolute pl-[9px] top-[80px] left-[11.65px] input focus:outline-none"
          />
          <label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              className="absolute pl-[9px] top-[132px] left-[11.65px] input focus:outline-none"
            />
            <div className="absolute flex justify-end top-[136px] right-[16.2px] font-[700] text-[12px] leading-[14px] text-[#383737] not-italic w-[48px] h-[14px] cursor-pointer">
              Forgot?
            </div>
          </label>
          <button
            onClick={handleLogin}
            className="absolute hover:opacity-80 top-[177px] left-[11.65px] w-[296px] bg-[#FFD333] rounded-[5px] h-[37px] font-[700] text-[24px] leading-[28.13px]"
          >
            Login
          </button>
          <div className="absolute cursor-pointer top-[231px] w-[319.17px] h-[37px] text-center font-[700] text-[14px] leading-[16px] not-italic text-[#646464]">
            Create An Account
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
          onClick={handleHidden}
          className="cursor-pointer absolute w-[31px] h-[31px] top-[2.5%] right-[2.4%] bg-white box-border border-1 border-[#E4E4E4] border-solid shadow-form rounded-[50%]"
        >
          <h1 className="font-red_rose not-italic font-[700] text-[24px] leading-[30px] text-[#626060] text-center">
            x
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Login;
