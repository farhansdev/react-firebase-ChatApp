import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../database/firebase.config';
import { useNavigate,  } from 'react-router-dom';


const UserList = () => {
  const navigate = useNavigate('');
  // const [myUid, setUid] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = collection(db, 'users');
      const userSnapshot = await getDocs(usersCollection);
      const userList = userSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setUsers(userList);
    };

    fetchUsers();
  }, []);

  // const getUsers = async () => {
  //   // let uid = await localStorage.getItem("userId")
  //   // setUid(uid)
  //   const list = []
  //   const dbSnap = await getDocs(collection(db, 'users'));
  //   dbSnap.forEach(item => {
  //     list.push(item.data())
  //     console.log(list)
  //   });
  //   setUsers(users);
  // };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">User List</h1>
      <div className="bg-white rounded-lg shadow-lg">
        {users.map(item => (
          <div key={item.id} onClick={() => navigate('/Chatscreen', { state: item })} className="flex justify-between items-center p-4 border-b border-gray-200">
            <div>
              <p className="text-xl font-semibold">{item.name}</p>
              <p className="text-gray-600">{item.email}</p>
            </div>
            <div>
              <button className='text-xl font-semibold text-gray-800'>Message</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default UserList;
