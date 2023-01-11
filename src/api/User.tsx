import { api } from "./axios";

export interface SignUpInterface {
  email: string;
  password: string;
  name: string;
  gender: string;
  phone: string;
}

export const emailSignUp = async (body: SignUpInterface) => {
  try {
    return await api.post("/user/signUp/email", body);
  } catch (err) {
    console.log(err);
  }
};
