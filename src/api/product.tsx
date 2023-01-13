import { api } from "./axios";

export interface ProductInterface {
  resultCode: number;
  data: {
    items: [
      {
        id: number;
        productName: string;
        thumb: string;
        price: number;
        rating: number;
        detail: string;
      }
    ];
  };
  count: number;
}

export const productList = async () => {
  try {
    return await api.get("/product").then((res) => res.data.data);
  } catch (err) {
    console.log(err);
  }
};
