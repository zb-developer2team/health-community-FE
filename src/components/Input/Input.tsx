import { twMerge } from 'tailwind-merge';
import Image from '../Image/Image';

export interface InputProps {
  type: 'text' | 'search';
  placeholder:
    | 'email'
    | 'password'
    | 'passwordCheck'
    | 'name'
    | 'number'
    | 'searchProduct'
    | 'productName'
    | 'startPrice'
    | 'bidding';
  imageType: 'email' | 'password' | 'name' | 'number' | 'none';
  maxLength?: number;
  minLength?: number;
  className?: string;
}

export default function Input({
  type,
  placeholder,
  imageType,
  className,
  ...props
}: InputProps) {
  const inputType = {
    text: 'text',
    search: 'search',
  };

  const form = {
    email: '이메일을 입력해주세요',
    password: '비밀번호를 입력해주세요',
    passwordCheck: '비밀번호를 다시 한 번 입력해주세요',
    name: '이름을 입력해주세요',
    number: '전화번호를 입력해주세요',
    searchProduct: '찾으시는 물품을 검색해보세요',
    productName: '물품 이름을 입력해주세요',
    startPrice: '시작가를 입력해주세요',
    bidding: '최소 응찰가격을 입력해주세요.',
  };

  const image = {
    email: '/src/assets/mail.png',
    password: '/src/assets/lock.png',
    name: '/src/assets/name.png',
    number: '/src/assets/smartphone-call.png',
    none: '',
  };

  return (
    <div className="relative">
      <input
        type={`${inputType[type]}`}
        placeholder={`${form[placeholder]}`}
        className={twMerge(
          'w-[360px] h-[50px] text-base border-b-2 border-Gray pl-[50px] focus:border-Orange outline-none font-line-seed-sans-kr',
          className
        )}
      />
      {`${image[imageType]}` === '' ? (
        ''
      ) : (
        <Image
          src={`${image[imageType]}`}
          alt={`${image[imageType]} 이미지입니다.`}
          className={twMerge(
            'w-[30px] h-[30px] bg-transparent absolute top-1/2 left-[5px] -translate-y-1/2'
          )}
        />
      )}
    </div>
  );
}
