import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center font-semibold text-lg py-8">
        이메일 로그인
      </div>
      <div className="flex flex-col items-center w-full">
        <article className="w-full flex justify-center">
          <input
            className="bg-gray-200 rounded-3xl w-full h-10 pl-3 max-w-[318px] placeholder:text-gray-400 focus:outline-none"
            placeholder="이메일"
          />
        </article>
        <article className="w-full flex justify-center">
          <input
            className="bg-gray-200 rounded-3xl w-full h-10 pl-3 max-w-[318px] placeholder:text-gray-400 focus:outline-none my-5"
            placeholder="비밀번호"
          />
        </article>
        <div className="flex justify-between w-full max-w-[318px] mt-2 mb-7">
          <div>
            <input type="checkbox" />
            <span className="ml-2">로그인 상태 유지</span>
          </div>
          <div className="underline">회원정보를 잊으셨나요?</div>
        </div>
        <div className="w-full bg-we_pink max-w-[318px] h-11 rounded-lg text-white flex justify-center items-center font-semibold">
          로그인
        </div>
      </div>
    </div>
  );
};

export default Login;
