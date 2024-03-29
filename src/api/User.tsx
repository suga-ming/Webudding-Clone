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

export interface UserInfoUpdateInterface {
  name: string;
  gender: string;
  phone: string;
  password: string;
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
export const userInfo = async (accessToken: string) => {
  try {
    return await api.get("/user/info", {
      headers: {
        "x-access-auth": accessToken,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const userInfoUadate = async (
  body: UserInfoUpdateInterface,
  accessToken: string
) => {
  try {
    return await api.patch("/user/update", body, {
      headers: {
        "x-access-auth": accessToken,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const userDelete = async (accessToken: string) => {
  try {
    return await api.delete("/user/delete", {
      headers: {
        "x-access-auth": accessToken,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
