'use client';

import React from 'react';
import styles from './page.module.css';
import useSWR from 'swr';
import { notFound } from 'next/navigation';

const Dashboard = () => {
  // Next JS is highly recommended to use SWR for fetching data
  // When we want to fetch data from API in Client Side Rendering
  // https://swr.vercel.app/

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
      'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPID_API_HOST,
    },
  };
  const url =
    'https://daily-knowledge.p.rapidapi.com/sustainable-development-goals-en.json';
  const fetcher = (url) =>
    fetch(url, options).then((res) =>
      res.json().catch((err) => {
        if (res.status === 404) {
          return notFound();
        }
      })
    );

  const { data, error, isLoading } = useSWR(url, fetcher);
  console.log(data);

  return (
    <div className={styles.container}>
      {isLoading && (
        <div className='text-center text-blue-500 font-bold text-2xl'>
          Loading...
        </div>
      )}
      {error && (
        <div className='text-center text-red-500 font-bold text-2xl'>
          Error...
        </div>
      )}
      {data && (
        <div className='flex flex-col'>
          {/* When we want to use
              SVG which is coming from API -- String
              We need to use dangerouslySetInnerHTML -- IF IT IS SAFE !!
              https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml          
          */}
          <div
            style={{ width: '50%', margin: '1rem auto', color: '#7b149d' }}
            dangerouslySetInnerHTML={{ __html: data?.image }}
          />
          <h1 className='text-3xl font-bold text-center mb-4'>{data.title}</h1>
          <p className='text-center mb-4'>{data.introduction}</p>
          <p className='text-center mb-4'> {data?.manifest}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
