import { IChooseYourPlanCardProps } from 'src/components/Card/ChooseYourPlanCard';

{
  /* TODO: i18 */
}

const data: IChooseYourPlanCardProps[] = [
  {
    id: 1,
    name: 'bronze',
    price: 19.9,
    info: [
      '24/7 training in all studios',
      'Courses live and with licensed trainers',
      'Personal introductory training',
      'Access to all training areas',
      'FIT STAR audio guide',
      'Weight training and fitness equipment',
      'Free WiFi',
    ],
  },
  {
    id: 2,
    name: 'silver',
    price: 21.9,
    info: [
      '24/7 training in all studios',
      'Courses live and with licensed trainers',
      'Personal introductory training',
      'Access to all training areas',
      'FIT STAR audio guide',
      'Weight training and fitness equipment',
      'Free WiFi',
    ],
    subtitle: 'This plan is suitable for newbies',
    isSubtitle: true,
  },
  {
    id: 3,
    name: 'gold',
    price: 29.9,
    info: [
      '24/7 training in all studios',
      'Courses live and with licensed trainers',
      'Personal introductory training',
      'Access to all training areas',
      'FIT STAR audio guide',
      'Weight training and fitness equipment',
      'Free WiFi',
    ],
  },
];

export default data;
