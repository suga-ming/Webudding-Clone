import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { isLogin } from "../store/recoil";

const Logo = styled.img`
  width: 170px;
  margin-right: 20px;
  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
  height: 48px;
  background-color: #eeeeee;
  border: none;
  border-radius: 25px;
  &::placeholder {
    padding-left: 18px;
    color: #a4a4a4;
    font-size: 14px;
  }
`;

const SearchSvg = styled.svg`
  width: 20px;
`;

const DownSvg = styled.svg`
  width: 10px;
`;

const Header = () => {
  const [login, setLogin] = useRecoilState(isLogin);
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  const goLogin = () => {
    navigate("/login");
  };
  const goSignUp = () => {
    navigate("/join");
  };
  const goCart = () => {
    navigate("/cart");
  };
  return (
    <div>
      <div className="w-full h-8 mt-2 text-white flex justify-center items-center text-xs font-medium bg-we_pink">
        위버딩과 함께할 작가님을 모집중이에요!
      </div>
      <div className="flex px-40 items-center py-5">
        <Logo onClick={goHome} src={logo} />
        <div className="relative w-full">
          <Input placeholder="지금 2023을 검색해보세요!"></Input>
          <SearchSvg
            className="absolute top-3 right-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="#a4a4a4"
              d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"
            />
          </SearchSvg>
        </div>
        <div className="flex w-96 items-center justify-between mx-6">
          <div className="flex">
            <div className="mr-2">1위</div>
            <div className="font-semibold">가계부</div>
          </div>
          <div>
            <DownSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                fill="gray"
                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
              />
            </DownSvg>
          </div>
        </div>
        <div className="w-80 flex items-center">
          <div className="cursor-pointer" onClick={goLogin}>
            로그인
          </div>
          <div className="w-px h-3 mx-2 bg-gray-200" />
          <div className="cursor-pointer" onClick={goSignUp}>
            회원가입
          </div>
        </div>
        <div className="flex">
          <svg
            onClick={goCart}
            className="w-6 mr-4 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
          </svg>
          <svg
            className="w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
          </svg>
        </div>
      </div>
      <div className="flex justify-between px-44 pb-4">
        <div className="flex">
          <div className="px-4">카테고리</div>
          <div className="px-4">BEST</div>
          <div className="px-4">NEW</div>
          <div className="px-4">브랜드리스트</div>
          <div className="px-4">MD's Pick</div>
          <div className="px-4">버딩클래스</div>
          <div className="px-4">HEZY</div>
          <div className="px-4">버디플롯</div>
        </div>
        <div className="flex items-center">
          <div className="text-xs">이벤트</div>
          <div className="w-px h-3 mx-2 bg-gray-300" />
          <div className="text-xs">공지사항</div>
          <div className="w-px h-3 mx-2 bg-gray-300" />
          <div className="text-xs">고객지원</div>
        </div>
      </div>
      <div className="w-full h-px bg-gray-200" />
    </div>
  );
};

export default Header;
