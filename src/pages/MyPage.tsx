import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { userInfo, UserInfoInterface } from "../api/User";
import { isAccessToken } from "../store/recoil";

const Solid = styled.div`
  border-bottom: 1px solid rgb(209 213 219);
`;

const Solid2 = styled.div`
  border: 1px solid gray;
`;

const Height = styled.div`
  height: calc(100vh - 165px);
`;

const MyPage = () => {
  const accessToken = useRecoilValue(isAccessToken);
  // const { isLoading, data } = useQuery<UserInfoInterface>(
  //   ["userInfo", accessToken],
  //   () => userInfo(accessToken)
  // );
  return (
    <Height className="flex flex-col h-full justify-center items-center bg-gray-200">
      <div className="w-3/6 bg-white rounded-xl">
        <Solid className="font-semibold text-xl py-5 pl-7">
          회원 정보 수정
        </Solid>
        <div className="flex mt-8 mb-5">
          <div className="w-[72px] h-[72px] rounded-full ml-8 bg-we_pink" />
          <div className="ml-6">
            <div className="flex items-end">
              {/* <div className="text-xl font-semibold mr-2">{data?.name}</div> */}
              <div className="flex items-center text-sm text-gray-400">
                <div>1999-01-16</div>
                <div className="h-3 w-px mx-1 bg-gray-400" />
                {/* <div>{data?.gender}</div> */}
              </div>
            </div>
            <div className="font-semibold text-gray-600 my-1">
              {/* {data?.email} */}
            </div>
            {/* <div>{data?.phone}</div> */}
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
        <div className="flex justify-center items-center">
          <div className="w-full mb-10 bg-we_pink max-w-[650px] h-11 rounded-lg text-white flex justify-center items-center text-sm font-semibold">
            변경 정보 저장하기
          </div>
        </div>
      </div>
    </Height>
  );
};

export default MyPage;
