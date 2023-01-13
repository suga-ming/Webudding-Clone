import { useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { cartList, CartListInterface } from "../api/cart";
import CartList from "./CartList";

const Solid = styled.div`
  border-bottom: 1px solid rgb(209 213 219);
`;

const Height = styled.div`
  height: calc(100vh - 165px);
`;

const Cart = () => {
  const { isLoading, data } = useQuery<CartListInterface>([`product`], () =>
    cartList()
  );
  console.log(data?.data);
  console.log("확인", data?.data.length);
  console.log(typeof data?.data.length);
  console.log("확인", data?.data[0].price);
  return (
    <Height className="flex flex-col h-full justify-center items-center bg-gray-200">
      {isLoading ? (
        <>isLoading...</>
      ) : data?.data.length ? (
        <div className="w-3/5 bg-white rounded-xl">
          <Solid className="font-semibold text-xl py-5 pl-7">장바구니</Solid>
          <div className="flex flex-col items-center">
            <div className="pt-24 mb-5">장바구니에 담긴 상품이 없습니다</div>
            <div className="w-full mb-32 bg-we_pink max-w-[318px] h-11 rounded-lg text-white flex justify-center items-center font-semibold">
              장바구니 담으러 가기
            </div>
          </div>
        </div>
      ) : (
        <div className="w-4/5 bg-white rounded-xl mb-5 flex flex-col justify-center items-center">
          <Solid className="w-full font-semibold text-xl py-5 pl-7">
            장바구니
          </Solid>
          {data?.data.map((item) => (
            <CartList
              name={item.productName}
              thumb={item.thumb}
              price={item.price}
            />
          ))}
        </div>
      )}
    </Height>
  );
};

export default Cart;
