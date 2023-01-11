import styled from "styled-components";

const Solid = styled.div`
  border-bottom: 1px solid gray;
`;

const Height = styled.div`
  height: calc(100vh - 180px);
`;

const Cart = () => {
  return (
    <Height className="flex flex-col h-full justify-center items-center bg-gray-200">
      <div className="w-3/5 bg-white rounded-xl">
        <Solid className="font-semibold text-xl py-5 pl-7">장바구니</Solid>
        <div className="flex flex-col items-center">
          <div className="pt-24 mb-5">장바구니에 담긴 상품이 없습니다</div>
          <div className="w-full mb-32 bg-we_pink max-w-[318px] h-11 rounded-lg text-white flex justify-center items-center font-semibold">
            장바구니 담으러 가기
          </div>
        </div>
      </div>
    </Height>
  );
};

export default Cart;
