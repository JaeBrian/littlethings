import './App.css';
import store from './store';
import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const count = store((state) => state.count);
  const increase = store((state) => state.increase);

  useEffect(() => {
    // Fetch the message from the server
    fetch('/hello')
      .then((response) => response.text()) // Assuming the server response is plain text
      .then((data) => {
        setMessage(data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setMessage('Failed to fetch message');
      });
  }, []); // The empty array means this effect runs once on mount

  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="text-center p-10 bg-white rounded-lg shadow-xl">
        <div className="text-2xl font-bold text-gray-800 mb-4">{count}</div>
        <button
          onClick={increase}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 transition ease-in duration-200"
        >
          Increase
        </button>
        <p>SERVER: {message}</p>
      </div>
    </div>
  );
}

export default App;
