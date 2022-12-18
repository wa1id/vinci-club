import classNames from "classnames";
import { getWeek, nextDay, startOfWeek } from "date-fns";
import Heading from "src/components/Heading/Heading";
import useCalendar from "src/hooks/useCalendar";
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from "react";
import BecomeAMember from "src/components/form/BecomeAMember";
import GetTheNewsFrom from "src/components/GetTheNewsFrom/GetTheNewsFrom";

const Calendar = () => {

  let [isOpen, setIsOpen] = useState(false);


  /**
   * Current schedule for calendar:
      title: Kickboks
      monday-friday
      17:00 - 18:00 // 5 - 6
      18:15 - 19:15 // 6:15 - 7:15
        20:30 - 21:30
   */
  const { firstDayOfWeek } = useCalendar();

  console.log(nextDay(firstDayOfWeek, 2));

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
        className={classNames(
          className,
          "relative mt-px hidden sm:col-start-1 sm:flex "
        )}
        style={style}
      >
        <a
          href="#"
          className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-gray-100 p-2 text-xs leading-5 items-center justify-center hover:bg-black"
        >
          <p className="order-1 font-semibold text-gray-700 group-hover:text-white">
            {title}
          </p>
          <p className="text-gray-500 group-hover:text-white">
            <time dateTime={start}>{start}</time> -{" "}
            <time dateTime={end}>{end}</time>
          </p>
        </a>
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
          style={{
            gridRow: "164 / span 18",
            gridColumn: `${i + 1} / span 1`,
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
          style={{
            gridRow: "187 / span 18",
            gridColumn: `${i + 1} / span 1`,
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
          style={{
            gridRow: "227 / span 18",
            gridColumn: `${i + 1} / span 1`,
          }}
        />
      );
    }
    return events;
  };

  return (
    <div className='bg-primary'>
      <Transition
        appear
        show={isOpen}
        as={Fragment}
      >
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className='relative z-50'
        >
          <div
            className='fixed inset-0 bg-black/30'
            aria-hidden='true'
          />
          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='mx-auto w-full max-w-xl bg-white transform'>
                  <div className='px-5'>
                    <Dialog.Title className='text-3xl font-bold text-gray-900 uppercase my-4'>
                      Lid worden
                    </Dialog.Title>
                    <Dialog.Description>
                      Als je het Inschrijvingsformulier invult doorheen de maand
                      december en tijdens onze opendeurweek jouw inschrijving
                      komt vervolledigen dan kan jij genieten van de eerste
                      maand gratis sporten. Geldig op alle abonnementen mits er
                      wordt gekozen voor een jaarabonnement.
                    </Dialog.Description>
                  </div>

                  <BecomeAMember />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <div className=' w-full flex justify-center flex-col md:flex-row relative py-6'>
        <div className='flex-1 text-center w-full '>
          {/* TODO: i18 */}
          <Heading
            aboveHeading={''}
            belowHeading={'Calendar'}
            headingClassName='text-white'
            lineClassName='bg-secondary'
          />
          <p className='text-lg max-w-3xl m-auto font-normal mt-6 text-white'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
            voluptatem!
          </p>
        </div>
      </div>
      <div className='flex h-full flex-col'>
        <div className='flex flex-auto flex-col overflow-auto bg-white'>
          <div
            style={{ width: '165%' }}
            className='flex max-w-full flex-none flex-col sm:max-w-none md:max-w-full'
          >
            <div className='sticky top-0 z-10 flex-none bg-white shadow ring-1 ring-black ring-opacity-5 sm:pr-8'>
              <div className='grid grid-cols-7 text-sm leading-6 text-gray-500 sm:hidden'>
                <button
                  type='button'
                  className='flex flex-col items-center pt-2 pb-3'
                >
                  M{' '}
                  <span className='mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900'>
                    {firstDayOfWeek.getDate()}
                  </span>
                </button>
                <button
                  type='button'
                  className='flex flex-col items-center pt-2 pb-3'
                >
                  D{' '}
                  <span className='mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900'>
                    {nextDay(firstDayOfWeek, 2).getDate()}
                  </span>
                </button>
                <button
                  type='button'
                  className='flex flex-col items-center pt-2 pb-3'
                >
                  W{' '}
                  <span className='mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-black font-semibold text-white'>
                    {nextDay(firstDayOfWeek, 3).getDate()}
                  </span>
                </button>
                <button
                  type='button'
                  className='flex flex-col items-center pt-2 pb-3'
                >
                  D{' '}
                  <span className='mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900'>
                    {nextDay(firstDayOfWeek, 4).getDate()}
                  </span>
                </button>
                <button
                  type='button'
                  className='flex flex-col items-center pt-2 pb-3'
                >
                  V{' '}
                  <span className='mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900'>
                    {nextDay(firstDayOfWeek, 5).getDate()}
                  </span>
                </button>
                <button
                  type='button'
                  className='flex flex-col items-center pt-2 pb-3'
                >
                  Z{' '}
                  <span className='mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900'>
                    {nextDay(firstDayOfWeek, 6).getDate()}
                  </span>
                </button>
                <button
                  type='button'
                  className='flex flex-col items-center pt-2 pb-3'
                >
                  Z{' '}
                  <span className='mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900'>
                    {nextDay(firstDayOfWeek, 0).getDate()}
                  </span>
                </button>
              </div>

              <div className='-mr-px hidden grid-cols-7 divide-x divide-gray-100 border-r border-gray-100 text-sm leading-6 text-gray-500 sm:grid'>
                <div className='col-end-1 w-14' />
                <div className='flex items-center justify-center py-3'>
                  <span>
                    Ma{' '}
                    <span className='items-center justify-center font-semibold text-gray-900'>
                      {firstDayOfWeek.getDate()}
                    </span>
                  </span>
                </div>
                <div className='flex items-center justify-center py-3'>
                  <span>
                    Di{' '}
                    <span className='items-center justify-center font-semibold text-gray-900'>
                      {nextDay(firstDayOfWeek, 2).getDate()}
                    </span>
                  </span>
                </div>
                <div className='flex items-center justify-center py-3'>
                  <span className='flex items-baseline'>
                    Wo{' '}
                    <span className='ml-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-black font-semibold text-white'>
                      {nextDay(firstDayOfWeek, 3).getDate()}
                    </span>
                  </span>
                </div>
                <div className='flex items-center justify-center py-3'>
                  <span>
                    Do{' '}
                    <span className='items-center justify-center font-semibold text-gray-900'>
                      {nextDay(firstDayOfWeek, 4).getDate()}
                    </span>
                  </span>
                </div>
                <div className='flex items-center justify-center py-3'>
                  <span>
                    Vr{' '}
                    <span className='items-center justify-center font-semibold text-gray-900'>
                      {nextDay(firstDayOfWeek, 5).getDate()}
                    </span>
                  </span>
                </div>
                <div className='flex items-center justify-center py-3'>
                  <span>
                    Za{' '}
                    <span className='items-center justify-center font-semibold text-gray-900'>
                      {nextDay(firstDayOfWeek, 6).getDate()}
                    </span>
                  </span>
                </div>
                <div className='flex items-center justify-center py-3'>
                  <span>
                    Zo{' '}
                    <span className='items-center justify-center font-semibold text-gray-900'>
                      {nextDay(firstDayOfWeek, 0).getDate()}
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className='flex flex-auto'>
              <div className='sticky left-0 w-14 flex-none bg-white ring-1 ring-gray-100' />
              <div className='grid flex-auto grid-cols-1 grid-rows-1'>
                {/* Horizontal lines */}
                <div
                  className='col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100'
                  style={{
                    gridTemplateRows: 'repeat(32, minmax(3.5rem, 1fr))',
                  }}
                >
                  <div className='row-end-1 h-7'></div>
                  <div>
                    <div className='sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400'>
                      8:00
                    </div>
                  </div>
                  <div />
                  <div>
                    <div className='sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400'>
                      9:00
                    </div>
                  </div>
                  <div />
                  <div>
                    <div className='sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400'>
                      10:00
                    </div>
                  </div>
                  <div />
                  <div>
                    <div className='sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400'>
                      11:00
                    </div>
                  </div>
                  <div />
                  <div>
                    <div className='sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400'>
                      12:00
                    </div>
                  </div>
                  <div />
                  <div>
                    <div className='sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400'>
                      13:00
                    </div>
                  </div>
                  <div />
                  <div>
                    <div className='sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400'>
                      14:00
                    </div>
                  </div>
                  <div />
                  <div>
                    <div className='sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400'>
                      15:00
                    </div>
                  </div>
                  <div />
                  <div>
                    <div className='sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400'>
                      16:00
                    </div>
                  </div>
                  <div />
                  <div>
                    <div className='sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400'>
                      17:00
                    </div>
                  </div>
                  <div />
                  <div>
                    <div className='sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400'>
                      18:00
                    </div>
                  </div>
                  <div />
                  <div>
                    <div className='sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400'>
                      19:00
                    </div>
                  </div>
                  <div />
                  <div>
                    <div className='sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400'>
                      20:00
                    </div>
                  </div>
                  <div />
                  <div>
                    <div className='sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400'>
                      21:00
                    </div>
                  </div>
                  <div />
                  <div>
                    <div className='sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400'>
                      22:00
                    </div>
                  </div>
                  <div />
                  <div />
                </div>

                {/* Vertical lines */}
                <div className='col-start-1 col-end-2 row-start-1 hidden grid-cols-7 grid-rows-1 divide-x divide-gray-100 sm:grid sm:grid-cols-7'>
                  <div className='col-start-1 row-span-full' />
                  <div className='col-start-2 row-span-full' />
                  <div className='col-start-3 row-span-full' />
                  <div className='col-start-4 row-span-full' />
                  <div className='col-start-5 row-span-full' />
                  <div className='col-start-6 row-span-full' />
                  <div className='col-start-7 row-span-full' />
                  <div className='col-start-8 row-span-full w-8' />
                </div>

                {/* Events */}
                <ol
                  className='col-start-1 col-end-2 row-start-1 grid grid-cols-1 sm:grid-cols-7 sm:pr-8'
                  style={{
                    gridTemplateRows:
                      '1.75rem repeat(288, minmax(0, 1fr)) auto',
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
  );
};

export default Calendar;
