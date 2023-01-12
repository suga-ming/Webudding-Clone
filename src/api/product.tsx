import { api } from "./axios";

export interface productInterface {
  resultCode: number;
  data: {
    items: {
      id: number;
      productName: string;
      thumb: string;
      price: number;
      rating: number;
      detail: string;
    };
    count: 0;
  };
}

export const productList = async (body: productInterface) => {
  try {
    return await api.get("/product", body);
  } catch (err) {
    console.log(err);
  }
};
