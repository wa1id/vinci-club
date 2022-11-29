import React from 'react';
import PersonalTrainerCard from '../Card/PersonalTrainerCard';
import data from 'src/data/personal-trainers';
import Heading from '../Heading/Heading';

const PersonalTrainers = () => {
  return (
    <div className='bg-black w-full flex flex-col items-center py-16 p-4 md:p-20 '>
      <div className='max-w-7xl'>
        <div className='w-full gap-5 flex items-center justify-center  lg:justify-between flex-wrap lg:flex-nowrap'>
          {/* TODO: i18 */}
          <Heading
            aboveHeading='Personal '
            belowHeading='Trainers'
            headingClassName='text-white'
            lineClassName='bg-secondary'
          />
          <div className='flex items-center justify-center lg:justify-end w-full'>
            <p className='text-white text-center w-full md:w-96'>
              {/* TODO: i18 */}
              Its ultimate aim is to help individuals and businesses in the
              coaching industry promote their speeches, services, and
              consultancies to the world easier.
            </p>
          </div>
        </div>

        <div className='flex flex-wrap gap-5 justify-center items-center p-6 my-12 md:my-24'>
          {data.map((item) => (
            <PersonalTrainerCard
              key={item.id}
              image={item.image}
              name={item.name}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalTrainers;
