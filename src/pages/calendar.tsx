import classNames from "classnames";
import { add, Day, getDay, isSunday, nextDay } from "date-fns";
import Heading from "src/components/Heading/Heading";
import useCalendar from "src/hooks/useCalendar";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import BecomeAMember from "src/components/form/BecomeAMember";
import GetTheNewsFrom from "src/components/GetTheNewsFrom/GetTheNewsFrom";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const dayLabels = ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"];
const dayLabelsMobile = ["Z", "M", "D", "W", "D", "V", "Z"];

const Calendar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { firstDayOfWeek } = useCalendar();

  const EventItem = ({
    title,
    start,
    end,
    className,
    style = { gridRow: "200 / span 22" },
  }: {
    title: string;
    start: string;
    end: string;
    className?: string;
    style?: React.CSSProperties;
  }) => {
    return (
      <li
        className={classNames(className, "relative mt-px sm:col-start-3")}
        style={style}
      >
        <div className="text-white absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-black p-2 text-xs leading-5 items-center justify-center">
          <div className="order-1 font-semibold">{title}</div>
          <div>
            <time dateTime={start}>{start}</time> -{" "}
            <time dateTime={end}>{end}</time>
          </div>
        </div>
      </li>
    );
  };

  // render monday to friday 17-18
  const renderMondayToFriday = () => {
    const events = [];
    for (let i = 0; i < 5; i++) {
      events.push(
        <EventItem
          key={`event-${i}-1`}
          title="Kickboks"
          start="17:00"
          end="18:00"
          className={
            (i + 1) % 7 === selectedDate.getDay() ? "flex" : "hidden sm:flex"
          }
          style={{
            gridRow: "163 / span 20",
            gridColumn: `${
              (i + 1) % 7 === selectedDate.getDay() ? 1 : i + 1
            } / span 1`,
          }}
        />
      );
    }
    return events;
  };

  // render monday to friday 18:15 - 19:15
  const renderMondayToFriday2 = () => {
    const events = [];
    for (let i = 0; i < 5; i++) {
      events.push(
        <EventItem
          key={`event-${i}-2`}
          title="Kickboks"
          start="18:15"
          end="19:15"
          className={
            (i + 1) % 7 === selectedDate.getDay() ? "flex" : "hidden sm:flex"
          }
          style={{
            gridRow: "185 / span 20",
            gridColumn: `${
              (i + 1) % 7 === selectedDate.getDay() ? 1 : i + 1
            } / span 1`,
          }}
        />
      );
    }
    return events;
  };

  // render monday to friday 20:30 - 21:30
  const renderMondayToFriday3 = () => {
    const events = [];
    for (let i = 0; i < 5; i++) {
      events.push(
        <EventItem
          key={`event-${i}-3`}
          title="Kickboks"
          start="20:30"
          end="21:30"
          className={
            (i + 1) % 7 === selectedDate.getDay() ? "flex" : "hidden sm:flex"
          }
          style={{
            gridRow: "226 / span 20",
            gridColumn: `${
              (i + 1) % 7 === selectedDate.getDay() ? 1 : i + 1
            } / span 1`,
          }}
        />
      );
    }
    return events;
  };

  const renderMobileDates = () => {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      dates.push(
        <button
          key={i}
          type="button"
          className="flex flex-col items-center pt-2 pb-3"
          onClick={() => setSelectedDate(add(firstDayOfWeek, { days: i }))}
        >
          {dayLabelsMobile[(new Date().getDay() + 1 + i) % 7]}{" "}
          <span
            className={classNames(
              (i + 1) % 7 === getDay(selectedDate)
                ? "bg-black text-white rounded-full"
                : "text-gray-900",
              "mt-1 flex h-8 w-8 items-center justify-center font-semibold text-white"
            )}
          >
            {firstDayOfWeek.getDate() + i}
          </span>
        </button>
      );
    }

    return dates;
  };

  const renderDates = () => {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      dates.push(
        <div key={i} className="flex items-center justify-center py-3">
          <span className="flex items-baseline">
            {dayLabels[(new Date().getDay() + 1 + i) % 7]}{" "}
            <span
              className={classNames(
                (i + 1) % 7 === getDay(new Date())
                  ? "bg-black text-white rounded-full flex h-8 w-8"
                  : "text-gray-900",
                "ml-1.5 items-center justify-center font-semibold"
              )}
            >
              {firstDayOfWeek.getDate() + i}
            </span>
          </span>
        </div>
      );
    }

    return dates;
  };

  return (
    <>
      <Head>
        <title>Groepslessen - Vinci Club Deurne</title>
      </Head>
      <div className="bg-primary">
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="relative z-50"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="mx-auto w-full max-w-xl bg-white transform">
                    <div className="px-5">
                      <Dialog.Title className="text-3xl font-bold text-gray-900 uppercase my-4">
                        Lid worden
                      </Dialog.Title>
                      <Dialog.Description>
                        Als je het Inschrijvingsformulier invult doorheen de
                        maand december en tijdens onze opendeurweek jouw
                        inschrijving komt vervolledigen dan kan jij genieten van
                        de eerste maand gratis sporten. Geldig op alle
                        abonnementen mits er wordt gekozen voor een
                        jaarabonnement.
                      </Dialog.Description>
                    </div>

                    <BecomeAMember />
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        <div className=" w-full flex justify-center flex-col md:flex-row relative py-6">
          <div className="flex-1 text-center w-full ">
            {/* TODO: i18 */}
            <Heading
              aboveHeading={""}
              belowHeading="Groepslessen"
              headingClassName="text-white"
              lineClassName="bg-secondary"
            />
            <p className="text-md max-w-3xl m-auto font-normal mt-6 text-white">
              Bekijk alle groepslessen in de kalender hieronder.
            </p>
          </div>
        </div>
        <div className="flex h-full flex-col">
          <div className="flex flex-auto flex-col bg-white">
            <div className="flex max-w-full flex-none flex-col sm:max-w-none md:max-w-full">
              <div className="sticky top-0 z-10 flex-none bg-white shadow ring-1 ring-black ring-opacity-5 sm:pr-8">
                <div className="grid grid-cols-7 text-sm leading-6 text-gray-500 sm:hidden">
                  {renderMobileDates()}
                </div>

                <div className="-mr-px hidden grid-cols-7 divide-x divide-gray-100 border-r border-gray-100 text-sm leading-6 text-gray-500 sm:grid">
                  <div className="col-end-1 w-14" />
                  {renderDates()}
                </div>
              </div>
              <div className="flex flex-auto">
                <div className="sticky left-0 w-14 flex-none bg-white ring-1 ring-gray-100" />
                <div className="grid flex-auto grid-cols-1 grid-rows-1">
                  {/* Horizontal lines */}
                  <div
                    className="col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100"
                    style={{
                      gridTemplateRows: "repeat(32, minmax(3rem, 1fr))",
                    }}
                  >
                    <div className="row-end-1 h-7"></div>
                    <div>
                      <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                        8:00
                      </div>
                    </div>
                    <div />
                    <div>
                      <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                        9:00
                      </div>
                    </div>
                    <div />
                    <div>
                      <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                        10:00
                      </div>
                    </div>
                    <div />
                    <div>
                      <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                        11:00
                      </div>
                    </div>
                    <div />
                    <div>
                      <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                        12:00
                      </div>
                    </div>
                    <div />
                    <div>
                      <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                        13:00
                      </div>
                    </div>
                    <div />
                    <div>
                      <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                        14:00
                      </div>
                    </div>
                    <div />
                    <div>
                      <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                        15:00
                      </div>
                    </div>
                    <div />
                    <div>
                      <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                        16:00
                      </div>
                    </div>
                    <div />
                    <div>
                      <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                        17:00
                      </div>
                    </div>
                    <div />
                    <div>
                      <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                        18:00
                      </div>
                    </div>
                    <div />
                    <div>
                      <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                        19:00
                      </div>
                    </div>
                    <div />
                    <div>
                      <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                        20:00
                      </div>
                    </div>
                    <div />
                    <div>
                      <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                        21:00
                      </div>
                    </div>
                    <div />
                    <div>
                      <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                        22:00
                      </div>
                    </div>
                    <div />
                    <div />
                  </div>

                  {/* Vertical lines */}
                  <div className="col-start-1 col-end-2 row-start-1 hidden grid-cols-7 grid-rows-1 divide-x divide-gray-100 sm:grid sm:grid-cols-7">
                    <div className="col-start-1 row-span-full" />
                    <div className="col-start-2 row-span-full" />
                    <div className="col-start-3 row-span-full" />
                    <div className="col-start-4 row-span-full" />
                    <div className="col-start-5 row-span-full" />
                    <div className="col-start-6 row-span-full" />
                    <div className="col-start-7 row-span-full" />
                    <div className="col-start-8 row-span-full w-8" />
                  </div>

                  {/* Events */}
                  <ol
                    className="col-start-1 col-end-2 row-start-1 grid grid-cols-1 sm:grid-cols-7 sm:pr-8"
                    style={{
                      gridTemplateRows:
                        "1.75rem repeat(288, minmax(0, 1fr)) auto",
                    }}
                  >
                    {renderMondayToFriday()}
                    {renderMondayToFriday2()}
                    {renderMondayToFriday3()}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        <GetTheNewsFrom />
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

export default Calendar;
