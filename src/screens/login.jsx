import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { auth } from '../database/firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';


const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleLogin(e) {
  setIsLoading(true)
    e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
      .then(async (response) => {
      const uid = response.user.uid
      localStorage.setItem("userId", uid)
      setIsLoading(false)
      console.log("User logged in successfully!");
      Swal.fire({
        title: 'User  Succesfuly Login!',
        icon: 'success',
      })
       navigate('/chats')
    })
      .catch((error) => {
        Swal.fire({
          title: 'Something Went Wrong!',
          text: error.message,
          icon: 'error',
        })
        setIsLoading(false)
      })
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Login</h2>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder='name@gmail.com'
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              placeholder='. . . . . . .'
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
              <div className='flex justify-between items-center text-blue-700 pt-4'>
             <Link to="/Signup" className="font-semibold underline">Sign up</Link>
            <p>Forgot Password?</p>

          </div>
          </div>
          <button
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Login
          </button>
      </div>
    </div>
  );
};

export default Login;
