/* This example requires Tailwind CSS v2.0+ */
import { Dialog, Transition } from '@headlessui/react';
import {
  MapIcon,
  MenuIcon,
  AnnotationIcon,
  ChartBarIcon,
  ViewGridIcon,
  UserGroupIcon,
  SpeakerphoneIcon,
  XIcon,
  BellIcon,
} from '@heroicons/react/outline';
import {
  AnnotationIcon as AnnotationIconActive,
  ChartBarIcon as ChartBarIconActive,
  ViewGridIcon as ViewGridIconActive,
  UserGroupIcon as UserGroupIconActive,
  SpeakerphoneIcon as SpeakerphoneIconActive,
} from '@heroicons/react/solid';
import { Fragment, useState } from 'react';
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';
import { getImageFromAssets } from '../utils/hooks/routeAssets';
import 'react-calendar/dist/Calendar.css';

const navigation = [
  { name: 'Dashboard', href: '#', icon: ChartBarIcon, current: true },
  { name: 'Modules', href: '#', icon: ViewGridIcon, current: false },
  { name: 'Teams', href: '#', icon: UserGroupIcon, current: false },
  { name: 'Messages', href: '#', icon: AnnotationIcon, current: false },
  { name: 'Announcements', href: '#', icon: SpeakerphoneIcon, current: false },
  { name: 'Office Map', href: '#', icon: MapIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Home() {
  const [value, onChange] = useState(new Date());
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen h-full flex bg-apps-background">
        {/* Sidebar Mobile */}
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 lg:hidden"
            onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full">
              <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0">
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}>
                      <span className="sr-only">Close sidebar</span>
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                  <div className="flex-shrink-0 flex items-center space-x-2 ml-2">
                    <ViewGridIconActive className="text-zinc-800 h-5" />
                    <h1 className="text-lg font-bold text-zinc-800">APPS</h1>
                  </div>
                  <nav aria-label="Sidebar" className="mt-6">
                    <div className="px-2 space-y-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-apps-primary text-white'
                              : 'text-zinc-400 hover:bg-apps-primary hover:text-white',
                            'group flex items-center px-4 py-4 text-base font-medium rounded-md transition-all duration-300 ease-in-out',
                          )}>
                          <item.icon
                            className={classNames(
                              item.current
                                ? 'text-white'
                                : 'text-zinc-400 group-hover:text-white transition-all duration-300 ease-in-out',
                              'mr-4 h-6 w-6',
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </nav>
                </div>
                <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                  <a href="#" className="flex-shrink-0 group block">
                    <div className="flex items-center">
                      <div>
                        <img
                          className="inline-block h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                          Abdul Muchtar Astria
                        </p>
                        <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                          View profile
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true">
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:flex lg:flex-shrink-0">
          <div className="flex flex-col w-64">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex-1 flex flex-col min-h-0  bg-white">
              <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div className="flex items-center flex-shrink-0 px-4 space-x-2">
                  <ViewGridIconActive className="text-zinc-800 h-5" />
                  <h1 className="text-xl font-bold text-zinc-800"> APPS</h1>
                </div>
                <nav className="mt-10 flex-1" aria-label="Sidebar">
                  <div className="px-2 space-y-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-apps-primary text-white'
                            : 'text-zinc-400 hover:bg-apps-primary hover:text-white',
                          'group flex items-center px-4 py-4 text-base font-medium rounded-md transition-all duration-300 ease-in-out',
                        )}>
                        <item.icon
                          className={classNames(
                            item.current
                              ? 'text-white'
                              : 'text-zinc-400 group-hover:text-white transition-all duration-300 ease-in-out',
                            'mr-4 h-6 w-6',
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </nav>

                <div className="relative lg:mb-20 xl:mb-40 p-4">
                  <div className="w-full h-40 bg-zinc-50 rounded-lg"></div>
                </div>

                <div className="flex-shrink-0 flex border-t border-gray-200 p-4 xl:hidden">
                  <a href="#" className="flex-shrink-0 w-full group block">
                    <div className="flex items-center">
                      <div>
                        <img
                          className="inline-block h-9 w-9 rounded-full"
                          src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                          Abdul Muchtar Astria
                        </p>
                        <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                          Signout
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
          {/* Sidebar Mobile */}
          <div className="lg:hidden">
            <div className="flex items-center justify-between bg-zinc-50 border-b border-gray-200 px-4 py-1.5">
              <div>
                <img
                  className="h-8 w-auto"
                  src={getImageFromAssets('/assets/image/pins.png')}
                  alt="Workflow"
                />
              </div>
              <div>
                <button
                  type="button"
                  className="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900"
                  onClick={() => setSidebarOpen(true)}>
                  <span className="sr-only">Open sidebar</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 relative z-0 flex overflow-hidden">
            <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last bg-apps-background">
              {/* Start main area*/}
              <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
                <div className="relative mb-4 space-y-1 lg:block hidden">
                  <p className="text-xl font-semibold text-zinc-800">
                    Hi, Abdul Muchtar Astria
                  </p>
                  <p className="text-sm text-zinc-500">
                    Welcome back,nice to see you again
                  </p>
                </div>
                <div className="h-full border-2 border-gray-200 border-dashed rounded-lg p-0 lg:p-2">
                  Content
                </div>
              </div>
              {/* End main area */}
            </main>
            <aside className="hidden relative xl:order-last xl:flex xl:flex-col flex-shrink-0 w-96 border-r border-gray-200 overflow-y-auto bg-white">
              {/* Start secondary column (hidden on smaller screens) */}
              <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
                <div className="flex-shrink-0 flex mb-8 justify-between items-center space-x-5">
                  <p className="text-sm text-zinc-400">
                    Selasa, 22 February 2022
                  </p>
                  <div className="relative flex space-x-4 items-center">
                    <div className="relative">
                      <span className="h-2 w-2 rounded-full bg-red-500 absolute right-1"></span>
                      <BellIcon className="h-6 text-zinc-400" />
                    </div>
                    <a href="#" className="flex-shrink-0  group block">
                      <div className="flex items-center">
                        <img
                          className="inline-block h-9 w-9 rounded-lg"
                          src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                          alt=""
                        />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="h-full  border-dashed rounded-lg">
                  <Calendar
                    className="border-none bg-apps-background rounded-lg"
                    // tileClassName={[
                    //   'flex justify-center items-center hover:text-red-500 rounded-md',
                    //   ({ date, view }) => {
                    //     console.log(date, view);
                    //   },
                    // ].join(' ')}
                    tileClassName={({ date, view }) => [
                      'flex justify-center items-center hover:text-zinc-700  rounded-md',
                      date.toLocaleDateString('id-ID') ===
                      value.toLocaleDateString('id-ID')
                        ? 'bg-apps-primary'
                        : '',
                    ]}
                    onClickDay={(value, event) =>
                      console.log('Clicked day: ', value.getDate())
                    }
                    onChange={onChange}
                    value={value}
                  />
                </div>
              </div>
              {/* End secondary column */}
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
