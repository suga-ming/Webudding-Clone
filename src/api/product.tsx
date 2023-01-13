import { api } from "./axios";

export interface productInterface {
  id: number;
  productName: string;
  thumb: string;
  price: number;
  rating: number;
  detail: string;
}

export const productList = async () => {
  try {
    return await api.get("/product");
  } catch (err) {
    console.log(err);
  }
};
