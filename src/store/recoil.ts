import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const isLogin = atom({
  key: "isLogin", // * state의 이름
  default: false, // * state의 값
  effects_UNSTABLE: [persistAtom], // * 현재 아톰의 state를 localStorage에 자동 저장 => 새로고침시에도 유지
});

export const isAccessToken = atom({
  key: "acessToken",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const isRefreshToken = atom({
  key: "refreshToken",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const isUserInfo = atom({
  key: "userInfo",
  default: {},
  effects_UNSTABLE: [persistAtom],
});
