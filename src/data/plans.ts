import { IChooseYourPlanCardProps } from 'src/components/Card/ChooseYourPlanCard';

{
  /* TODO: i18 */
}

const data: IChooseYourPlanCardProps[] = [
  {
    id: 1,
    name: 'bronze',
    price: 19.95,
    studentPrice: 16.95,
    info: ['Fitness', 'Cardio-apparatuur', 'Gewichtstraining']
  },
  {
    id: 2,
    name: 'silver',
    price: 19.95,
    info: ['Kickboks', 'Kickboks groepslessen', 'Kickboksring']
  },
  {
    id: 3,
    name: 'gold',
    price: 29.95,
    info: [
      'Fitness',
      'Cardio-apparatuur',
      'Gewichtstraining',
      'Kickboks',
      'Kickboks groepslessen',
      'Kickboksring'
    ]
  }
];

export default data;
