import React from 'react';
import PersonalTrainerCard from '../Card/PersonalTrainerCard';
import Heading from '../Heading/Heading';
import PersonalTrainer1Img from 'public/nora.jpeg';
import PersonalTrainer2Img from 'public/pt-placeholder.jpeg';

const data = [
  {
    id: 1,
    image: PersonalTrainer1Img,
    name: 'Nora Ledou',
    title: 'Head of Personal Training',
    description:
      'I’m really passionate about sports, especially since I discovered crossfit a few years ago. Being active is a big part of my life and I couldn’t live without it anymore.',
    socials: { instagram: 'https://www.instagram.com/gezondmetnora/' }
  },
  {
    id: 2,
    image: PersonalTrainer2Img,
    name: 'Jij',
    title: 'Personal Trainer',
    description:
      'Ben jij een personal trainer en wil je graag bij ons je diensten aanbieden? Neem dan contact met ons op via het contactformulier.',
    placeholder: true
  }
];

const PersonalTrainers = () => {
  return (
    <div className="bg-black w-full flex flex-col items-center py-16 p-4 md:p-20 ">
      <div className="max-w-7xl">
        <div className="w-full gap-5 flex items-center justify-center  lg:justify-between flex-wrap lg:flex-nowrap">
          {/* TODO: i18 */}
          <Heading
            aboveHeading="Personal "
            belowHeading="Trainers"
            headingClassName="text-white"
            lineClassName="bg-secondary"
          />
          <div className="flex items-center justify-center lg:justify-end w-full">
            <p className="text-white text-center w-full md:w-96">
              {/* TODO: i18 */}
              Personal trainers helpen mensen met het behalen van hun
              fitnessdoelen door middel van begeleiding en persoonlijk
              afgestemde oefenprogramma&apos;s.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-5 justify-center items-center p-6 my-12 md:my-24">
          {data.map(item => (
            <PersonalTrainerCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalTrainers;
