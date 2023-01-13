import { api } from "./axios";

interface AddCartInterface {
  productId: number;
}

export const cartAdd = async (body: AddCartInterface) => {
  try {
    return await api.post("/cart", body);
  } catch (err) {
    console.log(err);
  }
};
