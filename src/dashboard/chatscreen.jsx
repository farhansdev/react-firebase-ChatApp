import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { addDoc, collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../database/firebase.config';
import Navbar from './navbar';

export default function Chat() {

  const navigate = useNavigate()
  const { state } = useLocation();
  const [messages, setMessages] = useState([]);
  const [userList, setUserList] = useState([]);

  useEffect(() => {

    const q = query(collection(db, "chat"), where(state.uid, "==", true), where(state.myUid, "==", true));
    const unsubscribe = onSnapshot(q, (docSnap) => {
      const list = [];
      docSnap.forEach((doc) => {
        list.push(doc.data());
      });
      console.log(list, "list")
      setUserList(list);
    });

    return () => unsubscribe();

  }, [])

  const sendMsg = async () => {
    addDoc(collection(db, "chat"), {
      messages,
      [state.myUid]: true,
      [state.uid]: true,
      createdAt: Date.now()
    })
    setMessages("")
  }

  return (
    <>
    <Navbar />
    <div className="w-full bg-white h-screen  flex flex-col">
      <div className="w-full flex items-center p-4 bg-blue-500 text-white">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png"
          alt="Profile"
          className="border border-white rounded-full w-12 h-12 mr-4"
        />
        <div>
          <h1 className="text-xl font-semibold">{state.name}</h1>
          <p className="text-sm text-green-200">Online</p>
        </div>
      </div>

      <div className='bg-gray-100 h-[80vh]'>
        {userList.map(item =>  (
          <div key={item.uid}  onClick={() => navigate('/chatscreen', { state: {...item, myUid } })} className="flex justify-between items-center p-4 border-b border-gray-200">
            <div className='flex items-center'>
              <h1 className="text-xl font-semibold">{item.message}</h1>
            </div>
           </div>
        ))}
      </div>
      <div className="flex items-center border-t border-gray-300 pt-5 px-2">
        <input
          type="text"
          value={messages}
          placeholder="Type a message..."
          onChange={e => setMessages(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button onClick={sendMsg} className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Send
        </button>
      </div>
    </div>
    </>
  );
}

