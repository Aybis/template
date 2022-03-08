import Cookies from 'js-cookie';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Profile() {
  let navigate = useNavigate();
  const handlerLogout = () => {
    Cookies.remove('session');
    navigate('/', { replace: true });
  };

  return (
    <div className="relative bg-zinc-50 flex justify-center items-center flex-col space-y-4 min-h-screen">
      <Link to="/dashboard">Dashboard</Link>

      <h1>Hi you are logged in</h1>
      <button
        onClick={handlerLogout}
        className="bg-red-500 text-white px-4 py-2 rounded-md shadow-lg shadow-red-500/50 font-semibold">
        Logout
      </button>
    </div>
  );
}
