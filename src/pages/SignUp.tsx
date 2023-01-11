import React from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const goEmail = () => {
    navigate("/join/email");
  };
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center font-semibold text-lg py-8">
          회원가입
        </div>
        <div className="w-full relative bg-yellow-300 max-w-[380px] h-11 rounded-lg text-black flex justify-center items-center font-semibold">
          <svg
            className="w-5 top-0 bottom-0 left-5 my-auto  absolute"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" />
          </svg>
          <div className="text-sm">카카오로 3초 만에 시작하기</div>
        </div>
        <div
          onClick={goEmail}
          className="mt-5 w-full relative text-sm bg-gray-100 max-w-[380px] h-11 rounded-lg text-black flex justify-center items-center font-semibold cursor-pointer"
        >
          이메일로 가입하기
        </div>
      </div>
    </div>
  );
};

export default SignUp;
