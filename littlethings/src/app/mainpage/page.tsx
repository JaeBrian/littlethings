'use client';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

export default function Home() {
  const [activeButton, setActiveButton] = useState('');
  const handleButtonClick = (button: 'weekly' | 'monthly') => {
    setActiveButton(button);
  };

  return (
    <>
      <div className="text-pink-100 text-center text-5xl mt-20">
        LITTLE THINGS
      </div>
      <div className="flex mt-40 justify-center items-center space-x-10">
        <button
          className={clsx(
            'bg-transparent font-semibold py-4 px-6 border rounded w-1/5',
            {
              'bg-green-500 text-white border-transparent':
                activeButton === 'weekly',
              'text-green-700 border-green-500': activeButton !== 'weekly',
            }
          )}
          onClick={() => handleButtonClick('weekly')}
        >
          WEEKLY
        </button>
        <button
          className={clsx(
            'bg-transparent font-semibold py-4 px-6 border rounded w-1/5',
            {
              'bg-green-500 text-white border-transparent':
                activeButton === 'monthly',
              'text-green-700 border-green-500': activeButton !== 'monthly',
            }
          )}
          onClick={() => handleButtonClick('monthly')}
        >
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
