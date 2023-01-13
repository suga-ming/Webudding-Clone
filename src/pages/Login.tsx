import { useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { emailSignIn, SignInInterface } from "../api/User";
import { isAccessToken, isLogin, isRefreshToken } from "../store/recoil";

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useRecoilState(isLogin);
  const setAccessToken = useSetRecoilState(isAccessToken);
  const setRefreshToken = useSetRecoilState(isRefreshToken);
  // const [token, setAccessTocken] = useRecoilState(isAccessToken);
  // const [reToken, setRefreshToken] = useRecoilState(isRefreshToken);
  const { register, handleSubmit } = useForm<SignInInterface>();
  const onSubmit = async (data: SignInInterface) => {
    const res = await emailSignIn(data);
    const resultCode = res?.data.data.resultCode;
    if (resultCode === 1) {
      const { accessToken, refreshToken } = res?.data.data.data;
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
      setLogin(true);
      alert("로그인 성공");
      navigate("/");
    } else if (resultCode === 1102) alert("존재하지 않는 계정입니다");
    else if (resultCode === 1103) alert("비밀번호가 틀립니다");
    else if (resultCode === 1101) alert("로그인에 실패하셨습니다");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center"
    >
      <div className="flex justify-center font-semibold text-lg py-8">
        이메일 로그인
      </div>
      <div className="flex flex-col items-center w-full">
        <article className="w-full flex justify-center">
          <input
            {...register("email")}
            className="bg-gray-200 rounded-3xl w-full h-10 pl-3 max-w-[318px] placeholder:text-gray-400 focus:outline-none"
            placeholder="이메일"
          />
        </article>
        <article className="w-full flex justify-center">
          <input
            {...register("password")}
            type="password"
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
        <button className="w-full bg-we_pink max-w-[318px] h-11 rounded-lg text-white flex justify-center items-center font-semibold">
          로그인
        </button>
      </div>
    </form>
  );
};

export default Login;
