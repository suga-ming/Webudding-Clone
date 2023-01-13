import styled from "styled-components";

const Solid = styled.div`
  border-bottom: 1px solid rgb(209 213 219);
`;

interface CartListProps {
  thumb: string;
  name: string;
  price: number;
}

const CartList = ({ thumb, name, price }: CartListProps) => {
  return (
    <div>
      <div className="w-3/5 bg-white rounded-xl">
        <Solid className="font-semibold text-xl py-5 pl-7">장바구니</Solid>
        <div className="flex flex-col items-center">
          <img
            className="w-64 h-64 mb-4 rounded-xl cursor-pointer"
            src={thumb}
          />
          <div className="text-xs text-gray-500 mb-1">페이퍼플래닛</div>
          <div className="font-medium mb-7 cursor-pointer hover:underline">
            {name}
          </div>
          <div className="flex mb-3">
            <div className="font-semibold mr-1 text-sm">{price}원</div>
            <div className="text-we_pink mr-1 font-medium text-sm">20%</div>
            <div className="text-gray-500 line-through text-sm">3000원</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
