import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { addDoc, collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../database/firebase.config';

const ChatScreen = () => {
  const [message, setMessage] = useState([]);
  const { state } = useLocation();
  const [chatList, setChatList] = useState([]);


  useEffect(() => {
    const q = query(collection(db, "chat"), where(state.id, "==", true))
    const unsubscribe = onSnapshot(q, (docSnap) => {
      const list = [];
      docSnap.forEach((doc) => {
        list.push(doc.data())
        console.log(list)
      });
      setChatList(list);

    })
    return unsubscribe();
  }, [])

  const sendMsg = async () => {
    addDoc(collection(db, 'chat'), {
      message,
      // [state.myUid]: true,
      [state.id]: true,
      createdAt: Date.now()
    });
    setMessage("")
  }

  
return (




  <div className="w-full bg-white h-screen  flex flex-col">
    <div className="w-full flex items-center p-4 bg-blue-500 text-white">
      {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_jV-Yv--JXhAIaOewLWeXuBG7NFL7Sg6Yaw&s" className='text-white h-8 w-8' onClick={() => navigate('/Chatlist')} /> */}
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
      {chatList.map(item => (
        <div key={item.uid} onClick={() => navigate('/Chatscreen', { state: item })} className="flex justify-between items-center p-4 border-b border-gray-200">
          <div className='flex items-center'>
            <h1 className="text-xl font-semibold">{item.message}</h1>
          </div>
        </div>

      ))}
    </div>
    <div className="flex items-center border-t border-gray-300 pt-5 px-2">
      <input
        type="text"
        value={message}
        placeholder="Type a message..."
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button onClick={sendMsg} className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        Send
      </button>
    </div>
  </div>

);
}

export default ChatScreen;
