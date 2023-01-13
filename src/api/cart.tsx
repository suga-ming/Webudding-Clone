import { api } from "./axios";

interface AddCartInterface {
  productId: number;
}

export interface CartListInterface {
  resultCode: number;
  data: [
    {
      cartId: number;
      thumb: string;
      productName: string;
      price: number;
      quantity: number;
      length?: number;
    }
  ];
}

export const cartAdd = async (body: AddCartInterface) => {
  try {
    return await api.post("/cart", body);
  } catch (err) {
    console.log(err);
  }
};

export const cartList = async () => {
  try {
    return await api.get("/cart").then((res) => res.data.data);
  } catch (err) {
    console.log(err);
  }
};
