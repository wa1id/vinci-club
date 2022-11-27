import React from 'react'
import PersonalTrainerCard from '../Card/PersonalTrainerCard';
import data from 'src/data/personal-trainers'



const PersonalTrainers = () => {
  return (
    <div className='bg-black w-full p-4 md:p-20 flex justify-center gap-5 flex-wrap'>
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
  );
}

export default PersonalTrainers