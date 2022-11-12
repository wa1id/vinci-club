import React from 'react';

export interface IRecursiveList {
  id: number;
  title?: string;
  info?: string[] | IRecursiveList[];
}

const RecursiveList = (props: IRecursiveList) => {
  const { id, title, info } = props;

  return (
    <div className='flex flex-col gap-2 mt-4'>
      <h1 className='font-semibold'>
        {id}. {title}
      </h1>
      <div className='px-4'>
        {info?.map((info, index) => {
          if (typeof info === 'string') {
            return (
              <p key={index}>
                <span className='font-semibold'>
                  {id}.{index + 1}.
                </span>
                {info}
              </p>
            );
          }

          if(typeof info === 'object') {
            return (
              <RecursiveList
                key={index}
                {...info}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default RecursiveList;
