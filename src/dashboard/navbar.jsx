import React from 'react';
import Swal from 'sweetalert2';
import { auth } from '../database/firebase.config';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await auth.signOut();
      Swal.fire({
        title: 'User  Succesfuly Logout!',
        text: 'Do you want to continue',
        icon: 'success',
        confirmButtonText: 'Okay'
      })
      navigate('/login');
    } catch (error) {
      Swal.fire({
        title: 'Something Went Wrong!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Okay'
      })
    }
  }

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">Dashboard</div>
        <div className="space-x-4">
          <a href="" className="text-white hover:text-gray-200">Home</a>
          <a href="" className="text-white hover:text-gray-200">Admin Panel</a>
          <button onClick={handleLogout} className="text-white hover:text-gray-200">Log Out</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
