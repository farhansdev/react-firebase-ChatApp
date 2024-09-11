import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Loading = () => {

  const navigate = useNavigate();

  useEffect(()=> {
     checkUser()
  }, [])

  const checkUser = async () => {
    const userId = await localStorage.getItem("userId");
    if(userId !== null) navigate('/chatlist')
      else navigate('/login')
  }
 
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex space-x-2">
        <img src='https://cdn.pixabay.com/animation/2023/10/08/03/19/03-19-26-213_512.gif' className='h-32 w-32' />
      </div>
    </div>
  );
};

export default Loading;
