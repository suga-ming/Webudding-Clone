import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { productInterface } from "../api/product";

const Svg = styled.svg`
  width: 15px;
  margin-right: 4px;
`;

const ProductList = ({ id, productName, price }: productInterface) => {
  const navigate = useNavigate();
  const GoProductDetail = () => {
    navigate("/product");
  };
  return (
    <div className="mr-5">
      {/* <img /> */}
      <div
        onClick={GoProductDetail}
        className="w-64 h-64 bg-pink-300 mb-4 rounded-xl cursor-pointer"
      />
      <div className="text-xs text-gray-500 mb-1">페이퍼플래닛</div>
      <div
        onClick={GoProductDetail}
        className="font-medium mb-7 cursor-pointer hover:underline"
      >
        만년형 종이질감 올인원 플래너
      </div>
      <div className="flex mb-3">
        <div className="font-semibold mr-1 text-sm">12,000원</div>
        <div className="text-we_pink mr-1 font-medium text-sm">52%</div>
        <div className="text-gray-500 line-through text-sm">25,000원</div>
      </div>
      <div className="flex">
        <div className="flex mr-2">
          <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              fill="rgb(156 163 175)"
              d="M256 32C114.6 32 .0272 125.1 .0272 240c0 47.63 19.91 91.25 52.91 126.2c-14.88 39.5-45.87 72.88-46.37 73.25c-6.625 7-8.375 17.25-4.625 26C5.818 474.2 14.38 480 24 480c61.5 0 109.1-25.75 139.1-46.25C191.1 442.8 223.3 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32zM256.1 400c-26.75 0-53.12-4.125-78.38-12.12l-22.75-7.125l-19.5 13.75c-14.25 10.12-33.88 21.38-57.5 29c7.375-12.12 14.37-25.75 19.88-40.25l10.62-28l-20.62-21.87C69.82 314.1 48.07 282.2 48.07 240c0-88.25 93.25-160 208-160s208 71.75 208 160S370.8 400 256.1 400z"
            />
          </Svg>
          <div className="text-sm text-gray-400">63</div>
        </div>
        <div className="flex mr-2">
          <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              fill="rgb(156 163 175)"
              d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"
            />
          </Svg>
          <div className="text-sm text-gray-400">186</div>
        </div>
        <div className="flex mr-2">
          <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path
              fill="rgb(156 163 175)"
              d="M423.3 440.7c0 25.3-20.3 45.6-45.6 45.6s-45.8-20.3-45.8-45.6 20.6-45.8 45.8-45.8c25.4 0 45.6 20.5 45.6 45.8zm-253.9-45.8c-25.3 0-45.6 20.6-45.6 45.8s20.3 45.6 45.6 45.6 45.8-20.3 45.8-45.6-20.5-45.8-45.8-45.8zm291.7-270C158.9 124.9 81.9 112.1 0 25.7c34.4 51.7 53.3 148.9 373.1 144.2 333.3-5 130 86.1 70.8 188.9 186.7-166.7 319.4-233.9 17.2-233.9z"
            />
          </Svg>
          <div className="text-sm text-gray-400">Cart</div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
