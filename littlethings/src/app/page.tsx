'use client';
import './globals.css';
import { useEffect, useState } from 'react';

export default function Home() {
  // const [message, setMessage] = useState('loading');
  // useEffect(() => {
  //   fetch('http://localhost:8080/api/home')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setMessage(data.message);
  //     });
  // }, []);

  return (
    <>
      <div className="text-pink-100 text-center text-5xl mt-20">
        LITTLE THINGS
      </div>
      <div className="flex mt-40 justify-center items-center space-x-10">
        <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-4 p-6 border border-green-500 hover:border-transparent rounded w-1/5">
          WEEKLY
        </button>
        <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-4 px-6 border border-green-500 hover:border-transparent rounded w-1/5">
          MONTHLY
        </button>
      </div>
      <div className="flex justify-center items-center mt-20">
        <div className="grid grid-cols-4 gap-3 mb-20">
          {/* Row 1 */}
          <div className="w-48 aspect-square border-4"></div>
          <div className="w-48 aspect-square border-4"></div>
          <div className="w-48 aspect-square border-4"></div>
          <div className="w-48 aspect-square border-4"></div>
          {/* Row 2 */}
          <div className="w-48 aspect-square border-4"></div>
          <div className="w-48 aspect-square border-4"></div>
          <div className="w-48 aspect-square border-4"></div>
          <div className="w-48 aspect-square border-4"></div>
          {/* Row 3 */}
          <div className="w-48 aspect-square border-4"></div>
          <div className="w-48 aspect-square border-4"></div>
          <div className="w-48 aspect-square border-4"></div>
          <div className="w-48 aspect-square border-4"></div>
          {/* Row 4 */}
          <div className="w-48 aspect-square border-4"></div>
          <div className="w-48 aspect-square border-4"></div>
          <div className="w-48 aspect-square border-4"></div>
          <div className="w-48 aspect-square border-4"></div>
        </div>
      </div>
    </>
  );
}
