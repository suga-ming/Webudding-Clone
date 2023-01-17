import { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";
import styled from "styled-components";
import {
  userDelete,
  userInfo,
  UserInfoInterface,
  userInfoUadate,
  UserInfoUpdateInterface,
} from "../api/User";
import { isAccessToken, isLogin, isRefreshToken } from "../store/recoil";

const Solid = styled.div`
  border-bottom: 1px solid rgb(209 213 219);
`;

const Solid2 = styled.div`
  border: 1px solid gray;
`;

const Input = styled.input`
  border: 1px solid gray;
`;

const Height = styled.form`
  /* height: calc(100vh - 165px); */
  /* margin-top: 165px; */
`;

const MyPage = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const accessToken = useRecoilValue(isAccessToken);
  const isLoginReset = useResetRecoilState(isLogin);
  const isAccessTokenReset = useResetRecoilState(isAccessToken);
  const isRefreshTokenReset = useResetRecoilState(isRefreshToken);

  const navigate = useNavigate();

  if (accessToken !== "") {
    userInfo(accessToken).then((res) => {
      const resultCode = res?.data?.data.resultCode;
      const data = res?.data?.data?.data;
      setName(data?.name);
      setGender(data?.gender);
      setEmail(data?.email);
      setPhone(data?.phone);
    });
  }

  const { register, handleSubmit, reset } = useForm<UserInfoUpdateInterface>();
  const onSubmit = async (data: UserInfoUpdateInterface) => {
    console.log("data", data);
    const res = await userInfoUadate(data, accessToken);
    const resultCode = res?.data.data.resultCode;
    if (resultCode === 1) {
      setName("name");
      setGender("gender");
      setPhone("phone");
      alert("정보 수정 완료");
    } else if (resultCode === 1021) alert("정보 수정 실패");
  };

  const deleteCart = async (accessToken: string) => {
    const res = await userDelete(accessToken);
    console.log(res);
    const resultCode = res?.data.data.resultCode;
    if (resultCode == 1) {
      alert("탈퇴되셨습니다");
      isLoginReset();
      isAccessTokenReset();
      isRefreshTokenReset();
      navigate("/");
    } else if (resultCode == 1031) {
      alert("탈퇴 실패");
    }
  };

  return (
    <Height
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col h-full justify-center items-center bg-gray-200"
    >
      <div className="w-3/6 bg-white rounded-xl my-8">
        <Solid className="font-semibold text-xl py-5 pl-7">
          회원 정보 수정
        </Solid>
        <div className="flex mt-8 mb-5">
          <div className="w-[72px] h-[72px] rounded-full ml-8 bg-we_pink" />
          <div className="ml-6">
            <div className="flex items-end">
              <div className="text-xl font-semibold mr-2">{name}</div>
              <div className="flex items-center text-sm text-gray-400">
                <div>1999-01-16</div>
                <div className="h-3 w-px mx-1 bg-gray-400" />
                <div>{gender}</div>
              </div>
            </div>
            <div className="font-semibold text-gray-600 my-1">{email}</div>
            <div>{phone}</div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Solid2 className="w-full mb-5 h-11 rounded-lg  max-w-[650px] flex justify-center items-center text-sm font-medium">
            휴대전화 인증으로 개인 정보 수정/입력
          </Solid2>
        </div>
        <div className="flex flex-col ml-8">
          <div className="text-gray-600 mb-2">약관 동의 여부</div>
          <article className="flex items-center text-sm font-semibold">
            <input className="accent-we_pink" type="checkbox" checked />
            <div className="ml-2">이메일 수신 동의</div>
          </article>
          <article className="flex items-center text-sm font-semibold mt-1">
            <input className="accent-we_pink" type="checkbox" checked />
            <div className="ml-2">SMS 수신 동의</div>
          </article>
          <div className="flex items-center pt-4 mb-7 text-sm text-gray-600">
            <div>비밀번호 변경하기</div>
            <svg
              className="w-3 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="rgb(107 114 128)"
                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
              />
            </svg>
          </div>
        </div>
        <div className="px-8">
          <div className="mb-2">이름</div>
          <Input
            {...register("name")}
            // value={name}
            className="w-full h-10 rounded-lg pl-2 placeholder:text-sm mb-4"
            placeholder="이름을 입력해주세요"
          ></Input>
        </div>
        <div className="px-8">
          <div className="mb-2">폰 번호</div>
          <Input
            {...register("phone")}
            // value={phone}
            className="w-full h-10 rounded-lg pl-2 placeholder:text-sm mb-4"
            placeholder="폰 번호를 입력해주세요"
          />
        </div>
        <div className="px-8">
          <div className="mb-2">성별</div>
          <Input
            {...register("gender")}
            // value={gender}
            className="w-full h-10 rounded-lg pl-2 placeholder:text-sm mb-4"
            placeholder="성별을 입력해주세요"
          />
        </div>
        <div className="px-8 mb-8">
          <div className="mb-2">새 비밀번호</div>
          <Input
            {...register("password")}
            type="password"
            className="w-full h-10 rounded-lg pl-2 placeholder:text-sm"
            placeholder="영문자, 숫자, 특수문자로 이루어진 8~20자"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <button className="w-full mb-5 bg-we_pink max-w-[650px] h-11 rounded-lg text-white flex justify-center items-center text-sm font-semibold cursor-pointer">
            변경 정보 저장하기
          </button>
          <div
            onClick={() => deleteCart(accessToken)}
            className="w-full mb-10 bg-gray-500 max-w-[650px] h-11 rounded-lg text-white flex justify-center items-center text-sm font-semibold cursor-pointer"
          >
            회원 탈퇴하기
          </div>
        </div>
      </div>
    </Height>
  );
};

export default MyPage;
