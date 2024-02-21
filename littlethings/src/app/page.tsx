'use client';
import './globals.css';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white flex justify-center items-center">
      <div className="bg-white/40 backdrop-blur-lg border border-gray-200 rounded-md shadow-lg overflow-hidden p-10 h-3/5 w-2/5">
        <h2 className="text-custom-gray mb-12 text-center text-3xl font-extrabold">
          LITTLETHINGS
        </h2>
        <form>
          <div className="mb-4">
            <input
              id="email"
              type="text"
              name="email"
              placeholder="Email"
              className="py-2 px-3 border border-gray-300 focus:border-gray-300 focus:outline-none focus:ring focus:ring-gray-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
            />
          </div>
          <div className="mb-4">
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              className="py-2 px-3 border border-gray-300 focus:border-gray-300 focus:outline-none focus:ring focus:ring-gray-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
            />
          </div>

          <div className="mt-6">
            <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-custom-gray border border-transparent rounded-md font-semibold capitalize text-white hover:bg-gray-700 active:bg-gray-700 focus:outline-none focus:border-gray-700 focus:ring focus:ring-gray-200 disabled:opacity-25 transition">
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
