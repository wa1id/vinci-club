import { Fragment, useRef, useEffect } from 'react';
import { BsChevronDown, BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { Menu, Transition } from '@headlessui/react';
import classNames from 'classnames';

const Calender = () => {
  /**
   * Current schedule for calendar:
      title: Kickboks
      monday-friday
      17:00 - 18:00 // 5 - 6
      18:15 - 19:15 // 6:15 - 7:15
        20:30 - 21:30
   */

  const EventItem = ({
    title,
    start,
    end,
    className,
    style = { gridRow: '200 / span 22' },
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
          'relative mt-px hidden sm:col-start-1 sm:flex '
        )}
        style={style}
      >
        <a
          href='#'
          className='group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-gray-100 p-2 text-xs leading-5 items-center justify-center hover:bg-black'
        >
          <p className='order-1 font-semibold text-gray-700 group-hover:text-white'>
            {title}
          </p>
          <p className='text-gray-500 group-hover:text-white'>
            <time dateTime={start}>{start}</time> -{' '}
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
          title='Kickboks'
          start='17:00'
          end='18:00'
          style={{
            gridRow: '164 / span 18',
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
          title='Kickboks'
          start='18:15'
          end='19:15'
          style={{
            gridRow: '187 / span 18',
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
          title='Kickboks'
          start='20:30'
          end='21:30'
          style={{
            gridRow: '227 / span 18',
            gridColumn: `${i + 1} / span 1`,
          }}
        />
      );
    }
    return events;
  };




  return (
    <div className='flex h-full flex-col'>
      <header className='relative z-20 flex flex-none items-center justify-between border-b border-gray-200 py-4 px-6'>
        <h1 className='text-lg font-semibold text-gray-900'>
          <time dateTime={new Date().toISOString()}>
            {new Date().toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </h1>
        {/* <div className='flex items-center'>
          <div className='flex items-center rounded-md shadow-sm md:items-stretch'>
            <button
              type='button'
              className='flex items-center justify-center rounded-l-md border border-r-0 border-gray-300 bg-white py-2 pl-3 pr-4 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50'
            >
              <span className='sr-only'>Previous month</span>
              <BsChevronLeft
                className='h-5 w-5'
                aria-hidden='true'
              />
            </button>
            <button
              type='button'
              className='hidden border-t border-b border-gray-300 bg-white px-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:relative md:block'
            >
              Today
            </button>
            <span className='relative -mx-px h-5 w-px bg-gray-300 md:hidden' />
            <button
              type='button'
              className='flex items-center justify-center rounded-r-md border border-l-0 border-gray-300 bg-white py-2 pl-4 pr-3 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50'
            >
              <span className='sr-only'>Next month</span>
              <BsChevronRight
                className='h-5 w-5'
                aria-hidden='true'
              />
            </button>
          </div>
          <div className='hidden md:ml-4 md:flex md:items-center'>
            <Menu
              as='div'
              className='relative'
            >
              <Menu.Button
                type='button'
                className='flex items-center rounded-md border border-gray-300 bg-white py-2 pl-3 pr-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50'
              >
                Week view
                <BsChevronDown
                  className='ml-2 h-5 w-5 text-gray-400'
                  aria-hidden='true'
                />
              </Menu.Button>

              <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <Menu.Items className='focus:outline-none absolute right-0 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
                  <div className='py-1'>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href='#'
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Day view
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href='#'
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Week view
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href='#'
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Month view
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href='#'
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Year view
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <div className='ml-6 h-6 w-px bg-gray-300' />
            <button
              type='button'
              className='focus:outline-none ml-6 rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            >
              Add event
            </button>
          </div>
          <Menu
            as='div'
            className='relative ml-6 md:hidden'
          >
            <Menu.Button className='-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500'>
              <span className='sr-only'>Open menu</span>
              <HiOutlineDotsHorizontal
                className='h-5 w-5'
                aria-hidden='true'
              />
            </Menu.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='focus:outline-none absolute right-0 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
                <div className='py-1'>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Create event
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className='py-1'>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Go to today
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className='py-1'>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Day view
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Week view
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Month view
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Year view
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div> */}
      </header>
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
                  10
                </span>
              </button>
              <button
                type='button'
                className='flex flex-col items-center pt-2 pb-3'
              >
                T{' '}
                <span className='mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900'>
                  11
                </span>
              </button>
              <button
                type='button'
                className='flex flex-col items-center pt-2 pb-3'
              >
                W{' '}
                <span className='mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-black font-semibold text-white'>
                  12
                </span>
              </button>
              <button
                type='button'
                className='flex flex-col items-center pt-2 pb-3'
              >
                T{' '}
                <span className='mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900'>
                  13
                </span>
              </button>
              <button
                type='button'
                className='flex flex-col items-center pt-2 pb-3'
              >
                F{' '}
                <span className='mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900'>
                  14
                </span>
              </button>
              <button
                type='button'
                className='flex flex-col items-center pt-2 pb-3'
              >
                S{' '}
                <span className='mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900'>
                  15
                </span>
              </button>
              <button
                type='button'
                className='flex flex-col items-center pt-2 pb-3'
              >
                S{' '}
                <span className='mt-1 flex h-8 w-8 items-center justify-center font-semibold text-gray-900'>
                  16
                </span>
              </button>
            </div>

            <div className='-mr-px hidden grid-cols-7 divide-x divide-gray-100 border-r border-gray-100 text-sm leading-6 text-gray-500 sm:grid'>
              <div className='col-end-1 w-14' />
              <div className='flex items-center justify-center py-3'>
                <span>
                  Mon{' '}
                  <span className='items-center justify-center font-semibold text-gray-900'>
                    10
                  </span>
                </span>
              </div>
              <div className='flex items-center justify-center py-3'>
                <span>
                  Tue{' '}
                  <span className='items-center justify-center font-semibold text-gray-900'>
                    11
                  </span>
                </span>
              </div>
              <div className='flex items-center justify-center py-3'>
                <span className='flex items-baseline'>
                  Wed{' '}
                  <span className='ml-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-black font-semibold text-white'>
                    12
                  </span>
                </span>
              </div>
              <div className='flex items-center justify-center py-3'>
                <span>
                  Thu{' '}
                  <span className='items-center justify-center font-semibold text-gray-900'>
                    13
                  </span>
                </span>
              </div>
              <div className='flex items-center justify-center py-3'>
                <span>
                  Fri{' '}
                  <span className='items-center justify-center font-semibold text-gray-900'>
                    14
                  </span>
                </span>
              </div>
              <div className='flex items-center justify-center py-3'>
                <span>
                  Sat{' '}
                  <span className='items-center justify-center font-semibold text-gray-900'>
                    15
                  </span>
                </span>
              </div>
              <div className='flex items-center justify-center py-3'>
                <span>
                  Sun{' '}
                  <span className='items-center justify-center font-semibold text-gray-900'>
                    16
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
                style={{ gridTemplateRows: 'repeat(32, minmax(3.5rem, 1fr))' }}
              >
                <div className='row-end-1 h-7'></div>
                <div>
                  <div className='sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400'>
                    8AM
                  </div>
                </div>
                <div />
                <div>
                  <div className='sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400'>
                    9AM
                  </div>
                </div>
                <div />
                <div>
                  <div className='sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400'>
                    10AM
                  </div>
                </div>
                <div />
                <div>
                  <div className='sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400'>
                    11AM
                  </div>
                </div>
                <div />
                <div>
                  <div className='sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400'>
                    12PM
                  </div>
                </div>
                <div />
                <div>
                  <div className='sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400'>
                    1PM
                  </div>
                </div>
                <div />
                <div>
                  <div className='sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400'>
                    2PM
                  </div>
                </div>
                <div />
                <div>
                  <div className='sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400'>
                    3PM
                  </div>
                </div>
                <div />
                <div>
                  <div className='sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400'>
                    4PM
                  </div>
                </div>
                <div />
                <div>
                  <div className='sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400'>
                    5PM
                  </div>
                </div>
                <div />
                <div>
                  <div className='sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400'>
                    6PM
                  </div>
                </div>
                <div />
                <div>
                  <div className='sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400'>
                    7PM
                  </div>
                </div>
                <div />
                <div>
                  <div className='sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400'>
                    8PM
                  </div>
                </div>
                <div />
                <div>
                  <div className='sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400'>
                    9PM
                  </div>
                </div>
                <div />
                <div>
                  <div className='sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400'>
                    10PM
                  </div>
                </div>
                <div />
                <div>
                  <div className='sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400'>
                    11PM
                  </div>
                </div>
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
                  gridTemplateRows: '1.75rem repeat(288, minmax(0, 1fr)) auto',
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
  );
};

export default Calender;
