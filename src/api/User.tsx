import { api } from "./axios";

export interface SignUpInterface {
  email: string;
  password: string;
  name: string;
  gender: string;
  phone: string;
}

export interface SignInInterface {
  email: string;
  password: string;
}

// export interface AcessTokenInterface {
//   accessToken: string;
// }

export interface UserInfoInterface {
  email: string;
  name: string;
  gender: string;
  phone: string;
  userCode: string;
  accessToken: string;
}

export const emailSignUp = async (body: SignUpInterface) => {
  try {
    return await api.post("/user/signUp/email", body);
  } catch (err) {
    console.log(err);
  }
};

export const emailSignIn = async (body: SignInInterface) => {
  try {
    return await api.post("/auth/email/signIn", body);
  } catch (err) {
    console.log(err);
  }
};

// x-access-auth
export const userInfo = async (body: UserInfoInterface) => {
  try {
    const { accessToken } = body;
    return await api.get("/user/info", {
      headers: {
        "x-access-auth": accessToken,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
