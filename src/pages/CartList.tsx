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
    <Solid className="w-full rounded-xl py-4 ">
      <div className="flex items-center">
        <img
          className="w-24 h-24 mb-4 ml-8 rounded-xl cursor-pointer mr-3"
          src={thumb}
        />
        <div>
          <div className="text-xs text-gray-500 mb-1">페이퍼플래닛</div>
          <div className="font-medium mb-2 cursor-pointer hover:underline">
            {name}
          </div>
          <div className="flex mb-1">
            <div className="font-semibold mr-1 text-sm">{price}원</div>
            <div className="text-we_pink mr-1 font-medium text-sm">20%</div>
            <div className="text-gray-500 line-through text-sm">3000원</div>
          </div>
          <div className="text-gray-500 text-sm mb-5">
            결제완료 후 3일간 다운로드 가능
          </div>
        </div>
      </div>
    </Solid>
  );
};

export default CartList;
