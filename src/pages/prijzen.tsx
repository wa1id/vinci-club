import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import React from "react";
import Heading from "src/components/Heading/Heading";

const Prijzen = () => {
  const subscriptions = [
    {
      subscription: "Bronze",
      activities: "Fitness",
      twelve: "€ 19,95/mnd",
      six: "€ 24,95/mnd",
      three: "€ 29,95/mnd",
      one: "€ 39,95/mnd",
    },
    {
      subscription: "Bronze student",
      activities: "Fitness",
      twelve: "€ 16,95/mnd",
      six: "€ 19,95/mnd",
      three: "€ 24,95/mnd",
      one: "€ 39,95/mnd",
    },
    {
      subscription: "Silver",
      activities: "Kickboks",
      twelve: "€ 19,95/mnd",
      six: "",
      three: "",
      one: "",
    },
    {
      subscription: "Gold",
      activities: "Fitness + Kickboks",
      twelve: "€ 29,95/mnd",
      six: "€ 34,95/mnd",
      three: "€ 39,95/mnd",
      one: "€ 49,95/mnd",
    },
  ];

  const beurtenkaart = [
    {
      subscription: "Fitness + Kickboks",
      duration: "",
      six: "€ 140/20 beurten",
      four: "€ 80/10 beurten ",
      two: "€ 45/5 beurten",
      day: "€ 10/beurt",
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
            Bekijk overzicht van al onze lidmaatschappen
          </p>
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
                        3 maanden
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
                          {item.three}
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
                        Geldigheid
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
                        4 maanden
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        2 maanden
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        onmiddellijk
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
                          {item.duration}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.six}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.four}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.two}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.day}
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
