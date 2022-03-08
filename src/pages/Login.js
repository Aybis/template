import Cookies from 'js-cookie';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Login() {
  let location = useLocation();
  const navigate = useNavigate();
  const setCookies = () => {
    Cookies.set('session', 'test', { expires: 0.5 });
    Cookies.remove('redirect');
    navigate(location.state?.from?.pathname || '/', { replace: true });
  };

  return (
    <div className="relative bg-zinc-50 flex flex-col space-y-4 min-h-screen justify-center items-center">
      <h1>Please login to continue</h1>
      <button
        onClick={setCookies}
        className="bg-blue-500 px-5 py-2 rounded-md text-white font-medium">
        Login
      </button>
    </div>
  );
}
