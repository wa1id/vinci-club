import React from 'react';
import RecursiveList from 'src/components/lists/RecursiveList';
import termsAndConditionsData from 'src/data/terms-and-conditions';

const TermsAndConditions = () => {
  return (
    <div className='p-4 md:p-8 '>
      <h1 className='text-xl md:text-4xl font-bold text-black uppercase text-center underline'>
        Terms and Conditions
      </h1>

      <div className='flex flex-col gap-4 mt-4'>
        {termsAndConditionsData.map((data, index) => {
          return (
            <RecursiveList
              key={index}
              {...data}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TermsAndConditions;
