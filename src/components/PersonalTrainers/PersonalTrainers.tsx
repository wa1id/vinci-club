import React from 'react'
import PersonalTrainerCard from '../Card/PersonalTrainerCard';
import data from 'src/data/personal-trainers'



const PersonalTrainers = () => {
  return (
    <div className='bg-black w-full flex flex-col items-center px-4 py-20 lg:p-32'>
      <div className='max-w-7xl'>
        <div className='w-full gap-5 grid lg:grid-cols-2 items-center'>
          <div>
            <h1 className='text-4xl md:text-7xl font-bold text-white text-center md:text-left uppercase font-drukwide'>
              Personal <br />
              <span
                className='relative drop-shadow-[0_3px_0_rgba(0,0,0,0.19)]'
                style={{ zIndex: '2' }}
              >
                Trainers
                <span
                  className='bg-secondary h-4 md:h-9 w-full absolute bottom-2 left-0  opacity-90'
                  style={{ zIndex: '-1' }}
                />
              </span>
            </h1>
          </div>
          <div className='flex items-center justify-end w-full'>
            <p className='text-white text-center w-full md:w-96'>
              Its ultimate aim is to help individuals and businesses in the
              coaching industry promote their speeches, services, and
              consultancies to the world easier.
            </p>
          </div>
        </div>

        <div className='w-full flex justify-between flex-wrap gap-5 my-12 md:my-24'>
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
}

export default PersonalTrainers