import { useQuery } from "react-query";
import styled from "styled-components";
import { cartList, CartListInterface } from "../api/cart";

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
  console.log("확인", data?.data[0].price);
  return (
    <Height className="flex flex-col h-full justify-center items-center bg-gray-200">
      {data?.data.length == 0 ? (
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
        <div className="w-3/5 bg-white rounded-xl">
          <Solid className="font-semibold text-xl py-5 pl-7">장바구니</Solid>
          <div className="flex flex-col items-center">
            <img
              className="w-64 h-64 mb-4 rounded-xl cursor-pointer"
              src={data?.data.thumb}
            />
            <div className="text-xs text-gray-500 mb-1">페이퍼플래닛</div>
            <div className="font-medium mb-7 cursor-pointer hover:underline">
              {data?.data.productName}
            </div>
            <div className="flex mb-3">
              <div className="font-semibold mr-1 text-sm">
                {data?.data.price}원
              </div>
              <div className="text-we_pink mr-1 font-medium text-sm">20%</div>
              <div className="text-gray-500 line-through text-sm">3000원</div>
            </div>
          </div>
        </div>
      )}
    </Height>
  );
};

export default Cart;
