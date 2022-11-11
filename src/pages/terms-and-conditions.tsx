import React from 'react';
import data from 'src/data/terms-and-conditions';

const TermsAndConditions = () => {
  return (
    <div className='p-8'>
      <h1 className='text-4xl font-bold text-red-600 uppercase text-center'>
        Terms and Conditions
      </h1>

      {data.map((item) => {
        return (
          <div
            key={item.id}
            className='flex flex-col gap-2 mt-4'
          >
            <h1 className='font-semibold'>
              {item.id}. {item.title}
            </h1>
            <div className='px-4'>
              {item.info.map((info, index) => {
                return (
                  <p key={index}>
                    <span className='font-semibold'>
                      {item.id}.{index + 1}.
                    </span>
                    {info}
                  </p>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TermsAndConditions;
