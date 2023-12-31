'use client';

import React from 'react';
import Link from 'next/link';
import styles from './nav.module.css';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import ThemeToggle from '@/components/ToggleBtn/ThemeToggle'
import { ThemeContext } from '@/context/ThemeContext';

const links = [
  {
    id: 1,
    name: 'Home',
    path: '/',
  },
  {
    id: 2,
    name: 'Portfolio',
    path: '/portfolio',
  },
  {
    id: 3,
    name: 'Blog',
    path: '/blog',
  },
  {
    id: 4,
    name: 'About',
    path: '/about',
  },
  {
    id: 5,
    name: 'Contact',
    path: '/contact',
  },
  {
    id: 6,
    name: 'Dashboard',
    path: '/dashboard',
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const { theme } = React.useContext(ThemeContext);

  const themeFontColors = (item) => {
    return theme === 'dark'
      ? classNames(
          item.current
            ? 'bg-gray-900 text-white'
            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
          'block rounded-md px-3 py-1 text-base font-medium'
        )
      : classNames(
          item.current
            ? 'bg-gray-900 text-white'
            : 'text-gray-700 hover:bg-gray-800 hover:text-white',
          'block rounded-md px-3 py-1 text-base font-medium'
        );
  };
  return (
    <Disclosure as='nav'>
      {({ open }) => (
        <>
          <div className='px-2 sm:px-6 lg:px-8'>
            <div className='relative flex h-16 items-center justify-evenly'>
              <div className='absolute inset-y-0 left-0 flex items-center md:hidden'>
                <Disclosure.Button
                  className='relative inline-flex items-center 
                justify-between rounded-md p-2 
                text-gray-400 hover:bg-gray-700 
                hover:text-white focus:outline-none 
                focus:ring-2 focus:ring-inset focus:ring-white'
                >
                  <span className='absolute -inset-0.5' />
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div
                className='flex flex-1 justify-center 
                md:items-stretch md:justify-between'
              >
                <div className='flex items-center '>
                  <Link
                    href='/'
                    className={
                      theme === 'dark'
                        ? 'text-white text-2xl font-bold'
                        : 'text-gray-900 text-2xl font-bold'
                    }
                  >
                    Yamisagi
                  </Link>
                </div>
                <div className='hidden md:flex md:ml-12'>
                  <div className='flex items-center'>
                    <ThemeToggle />
                    {links.map((item) => (
                      <Link
                        key={item.name}
                        href={item.path}
                        className={themeFontColors(item)}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <button className={styles.logout}>Logout</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='md:hidden'>
            <div className='space-y-1 px-2 pb-3 pt-2'>
              <ThemeToggle />
              {links.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  href={item.path}
                  className={themeFontColors(item)}
                  aria-current={item.current ? 'page' : undefined}
                >
                  <Link
                    key={item.name}
                    href={item.path}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-1 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
