import React from 'react';
import Navbar from './navbar';


const StatusScreen = () => {
  // Example users with statuses
  const users = [
    { name: 'Farhan', img: 'https://via.placeholder.com/100', status: 'Hello World!' },
    { name: 'Aarij', img: 'https://via.placeholder.com/100', status: 'Enjoying the beach.' },
    { name: 'Ahmed', img: 'https://via.placeholder.com/100', status: 'At a party!' },
    { name: 'Sadiq', img: 'https://via.placeholder.com/100', status: 'At a wedding!' },
    { name: 'Faraz', img: 'https://via.placeholder.com/100', status: 'At a Yildiz Palace!' },
    { name: 'Nisar', img: 'https://via.placeholder.com/100', status: 'At a Kiyaa maari!' },
    // Add more users here...
  ];

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Status Updates</h1>

      <div className="flex space-x-4 overflow-x-auto py-2">
        {/* My Status */}
        <div className="flex flex-col items-center space-y-2">
          <div className="relative w-24 h-24">
            <img
              src="https://via.placeholder.com/100" // Replace with user's own image
              alt="My Status"
              className="rounded-full object-cover w-full h-full border-4 border-teal-600"
            />
            <span className="absolute bottom-0 right-0 bg-green-600 text-white rounded-full h-6 w-6 flex items-center justify-center text-sm">
              +
            </span>
          </div>
          <p className="text-gray-600">My Status</p>
        </div>

        {/* Users' Status Cards */}
        {users.map((user, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <div className="w-24 h-24 relative">
              <img
                src={user.img}
                alt={user.name}
                className="rounded-full object-cover w-full h-full border-4 border-teal-500"
              />
            </div>
            <p className="text-gray-600">{user.name}</p>
          </div>
        ))}
      </div>

      {/* Story View Placeholder */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Stories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {users.map((user, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-800">{user.name}</h3>
              <p className="text-gray-500 mt-2">{user.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>

  );
};

export default StatusScreen;
