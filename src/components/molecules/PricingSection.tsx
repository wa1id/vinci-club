// components/layout.js

import { CheckIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Button } from '../Button/Button';

const tiers = [
  {
    name: 'Bronze Ladies Only',
    nameBackground: 'bg-orange-200',
    href: '#',
    priceMonthly: 24,
    subPriceMonthly: 95,
    description: 'Fitness',
    features: ['Ladies only', 'Cardiotraining', 'Gewichtstraining']
  },
  {
    name: 'Silver (-16j)',
    nameBackground: 'bg-gray-100',
    href: '#',
    priceMonthly: 24,
    subPriceMonthly: 95,
    description: 'Kickboks',
    features: ['Jeugd -16 jaar', 'Kickboks in de ring', 'Kickboks groepslessen']
  },
  {
    name: 'Gold (+16j)',
    nameBackground: 'bg-yellow-200',
    href: '#',
    priceMonthly: 34,
    subPriceMonthly: 95,
    description: 'Kickboks',
    features: ['+16 jaar', 'Kickboks in de ring', 'Kickboks groepslessen']
  }
];

export const PricingSection = () => {
  const { t } = useTranslation('common');

  return (
    <div>
      <div className="py-12 bg-plan">
        <div className="relative">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-3 lg:gap-5 lg:space-y-0">
              {tiers.map(tier => (
                <div
                  key={tier.name}
                  className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                    <div>
                      <motion.h3
                        initial={{ y: -30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.75, ease: 'easeOut' }}
                        className={classNames(
                          'inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase text-primary',
                          tier.nameBackground
                        )}
                        id="tier-standard"
                      >
                        {tier.name}
                      </motion.h3>
                    </div>
                    <motion.div
                      initial={{ y: -30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.75,
                        delay: 0.2,
                        ease: 'easeOut'
                      }}
                      className="mt-4 flex text-6xl font-extrabold"
                    >
                      €{tier.priceMonthly}
                      <sup className="text-base">{tier.subPriceMonthly}</sup>
                      <div className="items-baseline">
                        <span className="ml-1 text-2xl font-medium text-gray-500">
                          /mnd <sup>*</sup>
                        </span>
                      </div>
                    </motion.div>
                    <p className="mt-5 text-lg text-primary">
                      {tier.description}
                    </p>
                  </div>
                  <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-100 space-y-6 sm:p-10 sm:pt-6">
                    <ul role="list" className="space-y-4">
                      {tier.features.map(feature => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon
                              className="h-6 w-6 text-green-500"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="ml-3 text-base text-primary">
                            {feature}
                          </p>
                        </li>
                      ))}
                    </ul>

                    <Link href="/signup">
                      <Button className="w-full text-center" variant="primary">
                        {t('Become member')}
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
          <div className="max-w-md mx-auto lg:max-w-5xl">
            <sup>
              * prijs geldig bij jaarlijks lidmaatschap. Scroll naar beneden
              voor een volledige prijslijst.
            </sup>
            <div className="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center shadow-lg">
              <div className="flex-1">
                <div>
                  <h3 className="inline-flex font-bold tracking-wide uppercase">
                    De club uitproberen? Gebruik onze handige beurtenkaart!
                  </h3>
                </div>
                <div className="mt-4 text-lg text-primary">
                  Zelf ervaren wat Vinci Club voor jou kan betekenen of wil je
                  een vriend(in) meenemen? We hebben ook beurtenkaarten en
                  dagpassen. Voor amper € 14,95/beurt ontdek je alle
                  faciliteiten (fitness ladies only) van onze club. Kom het
                  gerust eens uitproberen.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
