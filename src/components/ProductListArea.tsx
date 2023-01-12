import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import styled from "styled-components";
import { productInterface, productList } from "../api/product";
import ProductList from "./ProductList";

const DownSvg = styled.svg`
  width: 13px;
  transform: rotate(270deg);
  margin-left: 7px;
`;

const ACategory = styled.span`
  border: 2px solid rgba(255, 57, 91);
  border-radius: 15px;
  color: rgba(255, 57, 91);
  font-weight: 600;
  margin-right: 7px;
`;

const Category = styled.span`
  border: 2px solid gray;
  border-radius: 15px;
  color: gray;
  font-weight: 400;
  margin-right: 7px;
`;

const ProductListArea = () => {
  //   const { isLoading, data } = useQuery<[productInterface]>(
  //     "productList",
  //     productList
  //   );

  // const [product, setProduct] = useState([]);
  // useEffect(() => {
  //   (async (data) => {
  //     const res = await productList(data);
  //     setProduct(res.data);
  //   })();
  // }, []);

  return (
    <div>
      <div className="px-40">
        <div className="flex justify-between items-center">
          <div className="font-semibold text-2xl py-6 ">BEST ITEMS</div>
          <div className="flex">
            <div className="text-we_pink font-semibold">전체보러가기</div>
            <DownSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                fill="rgba(255,57,91)"
                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
              />
            </DownSvg>
          </div>
        </div>
        <div className="mb-6">
          <ACategory className="border-2 border-red px-3 py-1 text-sm">
            다이어리/플래너
          </ACategory>
          <Category className="border-2 border-red px-3 py-1 text-sm">
            노트패드/노트
          </Category>
          <Category className="border-2 border-red px-3 py-1 text-sm">
            스티커/ACC
          </Category>
          <Category className="border-2 border-red px-3 py-1 text-sm">
            모바일
          </Category>
          <Category className="border-2 border-red px-3 py-1 text-sm">
            폰트
          </Category>
          <Category className="border-2 border-red px-3 py-1 text-sm">
            일러스트
          </Category>
          <Category className="border-2 border-red px-3 py-1 text-sm">
            e북
          </Category>
          <Category className="border-2 border-red px-3 py-1 text-sm">
            PPT템플릿
          </Category>
          <Category className="border-2 border-red px-3 py-1 text-sm">
            캘린더
          </Category>
          <Category className="border-2 border-red px-3 py-1 text-sm">
            브러쉬
          </Category>
          <Category className="border-2 border-red px-3 py-1 text-sm">
            학습자료
          </Category>
        </div>
      </div>
      <div className="flex px-40">
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
      </div>
    </div>
  );
};

export default ProductListArea;
