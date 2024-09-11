import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../database/firebase.config';
import { useNavigate,  } from 'react-router-dom';
import Navbar from './navbar';

export default function Chat() {

  const navigate = useNavigate('');
  const [myUid, setUid] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    let uid = await localStorage.getItem("userId")
    setUid(uid)
    const list = []
    const dbSnap = await getDocs(collection(db, 'users'))
    dbSnap.forEach(item => {
      list.push(item.data())
    })
    setUsers(list, "list")
  }

  return (
    <>
    <Navbar />
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">User List</h1>
      <div className="bg-zinc-500 rounded-lg shadow-lg">
        {users.map(item => (
          <div key={item.uid} onClick={() => navigate('/chatscreen', { state: {...item, myUid } })} className="flex justify-between items-center p-4 border-b cursor-pointer border-gray-200">
          <img
        src="https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png"
        alt="Profile"
        className="border border-white rounded-full w-12 h-12 mr-4"
      />
      <div className="flex-1 text-gray-100">
              <p className="text-xl font-semibold">{item.name}</p>
              <p className="">{item.email}</p>
              </div>
            <div>
              <button className='text-xl font-semibold text-gray-100'>Message</button>
            </div>
          </div>
        ))}
      </div>

    </div>
    </>
  );
};

