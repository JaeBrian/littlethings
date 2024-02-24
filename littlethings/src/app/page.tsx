'use client';
import './globals.css';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassord] = useState('');

  const router = useRouter();

  const loginHandler = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const body = {
      username: username,
      password: password,
    };

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      console.log('check', data);

      if (!response.ok) {
        throw new Error(data.message || 'something went wrong');
      }

      console.log('login in successful', data);

      router.push(`/mainpage/${data.id}`);
    } catch (error) {
      console.error('login failed', error);
    }
  };

  return (
    <div className="w-full min-h-screen bg-white flex justify-center items-center">
      <div className="bg-white/40 backdrop-blur-lg border border-gray-200 rounded-md shadow-lg overflow-hidden p-10 h-3/5 w-2/5">
        <h2 className="text-custom-gray mb-12 text-center text-3xl font-extrabold">
          LITTLETHINGS
        </h2>
        <form>
          <div className="mb-4">
            <input
              id="Username"
              type="text"
              name="Username"
              placeholder="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              className="py-2 px-3 border border-gray-300 focus:border-gray-300 focus:outline-none focus:ring focus:ring-gray-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
            />
          </div>
          <div className="mb-4">
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassord(e.target.value);
              }}
              className="py-2 px-3 border border-gray-300 focus:border-gray-300 focus:outline-none focus:ring focus:ring-gray-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              onClick={loginHandler}
              className="w-full inline-flex items-center justify-center px-4 py-2 bg-custom-gray border border-transparent rounded-md font-semibold capitalize text-white hover:bg-gray-700 active:bg-gray-700 focus:outline-none focus:border-gray-700 focus:ring focus:ring-gray-200 disabled:opacity-25 transition"
            >
              Sign In
            </button>
          </div>
          <div className="mt-6 text-center">
            <Link href="/signup" className="text-black hover:underline">
              Create An Account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
