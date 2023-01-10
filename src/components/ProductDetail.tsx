import styled from "styled-components";

const Border = styled.div`
  border-bottom: 1px solid rgb(209 213 219);
`;

const ProductDetail = () => {
  return (
    <div className="px-40">
      <Border className="flex justify-center mt-5 pb-10">
        <div className="w-80 h-80 bg-pink-300 mr-10 rounded-xl" />
        <div className="w-1/3">
          <div className="font-semibold mb-7 text-xl">
            만년형 종이질감 올인원 플래너
          </div>
          <Border className="flex justify-between pb-2 items-center mb-7">
            <div className="flex">
              <div className="font-medium mr-2 text-base">12,000원</div>
              <div className="text-we_pink mr-2 font-medium text-base">52%</div>
              <div className="text-gray-500 line-through text-base">
                25,000원
              </div>
            </div>
            <div>
              <svg
                className="w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z" />
              </svg>
            </div>
          </Border>
          <span className="px-3 py-1 bg-gray-200 text-sm rounded-xl">
            페이퍼플래닛
          </span>
          <div className="mt-7">
            <div className="flex justify-between items-center mb-3">
              <div className="flex">
                <div className="w-20">작가</div>
                <div className="text-gray-500">페이퍼플래닛</div>
              </div>
              <div className="text-sm underline text-gray-500">
                작가 제품 더 보러가기 {">"}
              </div>
            </div>
            <div className="flex items-center mb-3">
              <div className="w-20">구매 혜택</div>
              <div className="text-gray-500">240p 적립 예정</div>
            </div>
            <div className="flex items-center mb-7">
              <div className="w-20">구매 후기</div>
              <svg
                className="w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="rgba(255,57,91)"
                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                />
              </svg>
              <svg
                className="w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="rgba(255,57,91)"
                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                />
              </svg>
              <svg
                className="w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="rgba(255,57,91)"
                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                />
              </svg>
              <svg
                className="w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="rgba(255,57,91)"
                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                />
              </svg>
              <svg
                className="w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="rgba(255,57,91)"
                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                />
              </svg>

              <div className="text-gray-500 ml-3">(63)</div>
            </div>
          </div>
          <div className="flex">
            <div className="flex justify-center items-center rounded-md w-2/5 py-1 bg-gray-200 mr-3">
              장바구니
            </div>
            <div className="flex justify-center items-center rounded-md w-2/5 py-1 bg-we_pink text-white font-medium">
              구매하기
            </div>
            <div className="flex flex-col items-center ml-5">
              <svg
                className="w-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="rgb(107 114 128)"
                  d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"
                />
              </svg>
              <div className="text-gray-500 text-sm">185</div>
            </div>
          </div>
        </div>
      </Border>
      <Border className="flex flex-col items-center mt-8 pb-12">
        <div className="flex flex-col items-center mb-5">
          <div>만년형이라고 하이퍼링크를 포기할 수 없다!!</div>
          <div>데일리 위클리 먼슬리까지 꼼꼼하게 들어있는 플래너로</div>
          <div>한 해를 알차게 보내보아요~!</div>
        </div>
        <div className="font-semibold">
          이제품은 종이질감 제품입니다. 다른컬러는 포함되어있지 않습니다.,
        </div>
      </Border>
    </div>
  );
};

export default ProductDetail;
