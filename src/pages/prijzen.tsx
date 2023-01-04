import { CheckIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "src/components/Button/Button";
import GetTheNewsFrom from "src/components/GetTheNewsFrom/GetTheNewsFrom";
import Heading from "src/components/Heading/Heading";

const Prijzen = () => {
  const { t } = useTranslation("common");

  const subscriptions = [
    {
      subscription: "Bronze",
      activities: "Fitness",
      twelve: "€ 24,95/mnd",
      six: "€ 29,95/mnd",
      one: "€ 39,95/mnd",
    },
    {
      subscription: "Silver (-16j)",
      activities: "Kickboks",
      twelve: "€ 24,95/mnd",
      six: "€ 29,95/mnd",
      one: "€ 39,95/mnd",
    },
    {
      subscription: "Gold (+16j)",
      activities: "Kickboks",
      twelve: "€ 34,95/mnd",
      six: "€ 39,95/mnd",
      one: "€ 49,95/mnd",
    },
  ];

  const beurtenkaart = [
    {
      subscription: "Fitness + Kickboks",
      price: "€ 14,95/beurt",
    },
  ];

  const tiers = [
    {
      name: "Bronze",
      nameBackground: "bg-orange-200",
      href: "#",
      priceMonthly: 24,
      subPriceMonthly: 95,
      description: "Fitness",
      features: ["Cardioapparatuur", "Gewichtstraining"],
    },
    {
      name: "Silver (-16j)",
      nameBackground: "bg-gray-100",
      href: "#",
      priceMonthly: 24,
      subPriceMonthly: 95,
      description: "Kickboks",
      features: ["Jeugd -16 jaar oud", "Kickboksring", "Kickboks groepslessen"],
    },
    {
      name: "Gold (+16j)",
      nameBackground: "bg-yellow-200",
      href: "#",
      priceMonthly: 34,
      subPriceMonthly: 95,
      description: "Kickboks",
      features: ["+16 jaar oud", "Kickboksring", "Kickboks groepslessen"],
    },
  ];

  return (
    <>
      <Head>
        <title>Abonnementen - Vinci Club</title>
      </Head>

      <div className="bg-noise bg-primary py-8 w-full flex justify-center flex-col md:flex-row relative">
        <div className="flex-1 text-center w-full ">
          {/* TODO: i18 */}
          <Heading
            aboveHeading="Prijzen"
            belowHeading="Vinci Club"
            headingClassName="text-white"
            lineClassName="bg-secondary"
          />
          <p className="text-lg text-white max-w-3xl m-auto font-normal mt-6">
            Overzicht van al onze lidmaatschappen. <br />
            Kies het lidmaatschap dat het beste bij jou past.
          </p>
        </div>
      </div>

      <div className="">
        <div className="py-12 bg-plan sm:py-16 lg:py-24">
          <div className="relative">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-3 lg:gap-5 lg:space-y-0">
                {tiers.map((tier) => (
                  <div
                    key={tier.name}
                    className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                  >
                    <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                      <div>
                        <h3
                          className={classNames(
                            "inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase text-primary",
                            tier.nameBackground
                          )}
                          id="tier-standard"
                        >
                          {tier.name}
                        </h3>
                      </div>
                      <div className="mt-4 flex text-6xl font-extrabold">
                        €{tier.priceMonthly}
                        <sup className="text-base">{tier.subPriceMonthly}</sup>
                        <div className="items-baseline">
                          <span className="ml-1 text-2xl font-medium text-gray-500">
                            /mnd <sup>*</sup>
                          </span>
                        </div>
                      </div>
                      <p className="mt-5 text-lg text-primary">
                        {tier.description}
                      </p>
                    </div>
                    <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-100 space-y-6 sm:p-10 sm:pt-6">
                      <ul role="list" className="space-y-4">
                        {tier.features.map((feature) => (
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
                      <Button
                        onClick={() => {}}
                        className="w-full text-center"
                        variant="primary"
                      >
                        {t("Become member")}
                      </Button>
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
                    <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-primary text-white">
                      beurtenkaart
                    </h3>
                  </div>
                  <div className="mt-4 text-lg text-primary">
                    Wens je Vinci Club uit te proberen of wil je een vriend(in)
                    meenemen? Dan kan je een beurtenkaart/dagpas kopen. Deze
                    geeft je toegang tot zowel de fitness als kickboks.voor
                    €14,95/beurt.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-10 space-y-16">
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Lidmaatschap
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Activiteiten
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        12 maanden
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        6 maanden
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        1 maand
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {subscriptions.map((item) => (
                      <tr key={item.subscription}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.subscription}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.activities}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.twelve}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.six}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.one}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Beurtenkaart/dagpas
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Prijs
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {beurtenkaart.map((item) => (
                      <tr key={item.subscription}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.subscription}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <GetTheNewsFrom />
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default Prijzen;
