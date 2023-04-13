import { twMerge } from 'tailwind-merge';
import Image from '../Image/Image';

export interface ProductDetailProps {
  category: string;
  status: string;
  description: string;
  remainTime: string;
  auctionPeriod: string; //추후에 어떤 식으로 데이터를 받아올지 몰라서 string으로 우선 넣었습니다.
  price: string;
  startPrice: string;
  children?: string;
  className?: string;
}

export default function ProductDetail({
  category,
  status,
  description,
  remainTime,
  auctionPeriod,
  price,
  startPrice,
  children,
  className,
}: ProductDetailProps) {
  return (
    <>
      <div
        className={twMerge(`w-[1046px] flex font-line-seed-sans-kr`, className)}
      >
        <div>
          <Image
            size={'lg'}
            src={'/src/assets/SampleImage.png'}
            alt={'상품 이미지 입니다.'}
          />
        </div>
        <div className={twMerge(`w-[420px] ml-10`)}>
          <h2
            className={twMerge(
              `border-b-[1px] h-[60px] mt-2 text-xl font-bold`
            )}
          >
            A+uction 제품
          </h2>
          <div className={twMerge(`border-b-[1px] h-[118px] mt-8`)}>
            <p className="text-l mb-2">
              <span className="mr-6 font-bold">상품 카테고리</span>
              {category}
            </p>
            <p className="text-l mb-2">
              <span className="mr-6 font-bold">상태</span>
              {status}
            </p>
            <p className="text-l mb-2">
              <span className="mr-6 font-bold">설명</span>
              {description}
            </p>
          </div>
          <div className={twMerge(`border-b-[1px] h-[80px] mt-8`)}>
            <p className="text-l mb-2 flex justify-between">
              <span className="mr-6 font-bold">남은시간</span>
              <span className="text-Red font-bold">{remainTime}</span>
            </p>
            <p className="text-l mb-2 flex justify-between">
              <span className="mr-6 font-bold">경매기간</span>
              <span>{auctionPeriod}</span>
            </p>
          </div>
          <div className={twMerge(`h-[70px] mt-8`)}>
            <p className="text-l mb-2 flex justify-between">
              <span className="mr-6 font-bold">현재가</span>
              <span className="text-Red font-bold">{price}</span>
            </p>
            <p className="text-l mb-2 flex justify-between">
              <span className="mr-6 font-bold">시작가</span>
              <span>{startPrice}</span>
            </p>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
