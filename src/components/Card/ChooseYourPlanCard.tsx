import React from 'react';
import { TiTick } from 'react-icons/ti';
import InfoWithIcon from '../Info/InfoWithIcon';
import { FiArrowUpRight } from 'react-icons/fi';


interface Props {
  name: string;
  price: number;
  info: string[];
  isSuitable?:boolean
}

const ChooseYourPlanCard: React.FC<Props> = (props) => {

  const { name, price, info, isSuitable} = props

  return (
    <div className='bg-plan rounded-lg border-primary border-2 max-w-sm w-full'>
      <h3 className='font-bold text-3xl uppercase px-4 py-6 text-center'>
        {name}
      </h3>
      <p className='bg-secondary text-primary text-center  font-bold p-4 text-[40px]'>
        <span>
          €{price}{' '}
          <span className='font-normal text-xl'>
            /per month
            <sup>*</sup>
          </span>
        </span>
        {isSuitable && (
          <small className='text-[15px]'>
            This plan is suitable for newbies
          </small>
        )}
      </p>
      <div className='flex flex-col justify-center items-center gap-5 w-full px-8 py-12'>
        {info.map((text) => (
          <InfoWithIcon
            key={text}
            icon={<TiTick className='text-white' />}
            info={text}
          />
        ))}
      </div>

      <button className='border-primary border-2 hover:bg-[#BDD3E3] text-primary flex items-center justify-center gap-2 px-12 py-4 rounded-full my-6 mx-auto text-[22px] uppercase'>
        Choose <FiArrowUpRight />
      </button>
    </div>
  );
};

export default ChooseYourPlanCard;
