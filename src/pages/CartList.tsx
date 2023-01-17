import styled from "styled-components";
import { cartDelete, cartPatch, CartPatchInterface } from "../api/cart";

const Solid = styled.div`
  border-bottom: 1px solid rgb(209 213 219);
`;

interface CartListProps {
  thumb: string;
  name: string;
  price: number;
  cartId: number;
  quantity: number;
}

const Minus = styled.button<{ quantity: number }>`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  border: ${(props) =>
    props.quantity == 1 ? "1px solid #d3d4d6" : "1px solid gray"};
  color: ${(props) => (props.quantity == 1 ? "#d3d4d6" : "gray")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`;

const Plus = styled.button<{ quantity: number }>`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  border: ${(props) =>
    props.quantity == 100 ? "1px solid #d3d4d6" : "1px solid gray"};
  color: ${(props) => (props.quantity == 100 ? "#d3d4d6" : "gray")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`;

const CartList = ({ thumb, name, price, cartId, quantity }: CartListProps) => {
  const deleteCart = async (cartId: number) => {
    const res = await cartDelete(cartId);
    const resultCode = res?.data.data.resultCode;
    if (resultCode == 1) {
      alert("장바구니 삭제 성공");
    } else if (resultCode == -1) {
      alert("요청값 에러");
    } else if (resultCode == 1231) {
      alert("장바구니 삭제 실패");
    }
  };

  const PatchCart = async (body: CartPatchInterface) => {
    const { plus, quantity } = body;
    if (plus === false) {
      if (quantity === 1) {
        alert(`1보다 작은 수량입니다`);
      } else {
        const res = await cartPatch(body);
        console.log(res);
        const resultCode = res?.data.data.resultCode;
        if (resultCode == 1) {
          alert("장바구니 수정 성공");
        } else if (resultCode == -1) {
          alert("요청값 에러");
        } else if (resultCode == 1231) {
          alert("장바구니 수정 실패");
        }
      }
    } else {
      const res = await cartPatch(body);
      console.log(res);
      const resultCode = res?.data.data.resultCode;
      if (resultCode == 1) {
        alert("장바구니 수정 성공");
      } else if (resultCode == -1) {
        alert("요청값 에러");
      } else if (resultCode == 1231) {
        alert("장바구니 수정 실패");
      }
    }
  };
  // const onMinus = () => {
  //   if (quantity > 1) {
  //     plus(false)
  //   } else {
  //     quantity;
  //   }
  // };
  // const onPlus = () => {
  //   if (quantity > 100) {
  //     quantity;
  //   } else {
  //     plus(true)
  //   }
  // };
  return (
    <Solid className="w-full rounded-xl py-4 px-8 flex items-center justify-between">
      <div className="flex items-center">
        <img
          className="w-24 h-24 mb-4 rounded-xl cursor-pointer mr-3"
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
      <div className="flex">
        <div className="flex items-center mr-7">
          <Minus
            onClick={() => PatchCart({ cartId, plus: false, quantity })}
            quantity={quantity}
          >
            -
          </Minus>
          <div className="mx-2">{quantity}</div>
          <Plus
            onClick={() => PatchCart({ cartId, plus: true, quantity })}
            quantity={quantity}
          >
            +
          </Plus>
        </div>

        <button
          onClick={() => deleteCart(cartId)}
          className="text-xl text-gray-500"
        >
          x
        </button>
      </div>
    </Solid>
  );
};

export default CartList;
