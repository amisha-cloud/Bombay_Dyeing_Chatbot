import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function AuthScreen({ isLogin = true, onStart }) {
  const [employeeId, setEmployeeId] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = () => {
    if (employeeId.trim() && (!isLogin || fullName.trim())) {
      onStart?.(employeeId);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 space-y-4">
        <h2 className="text-xl font-bold text-center text-blue-800">
          {isLogin ? "Login" : "Signup"}
        </h2>

        {!isLogin && (
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-3 py-2 border rounded text-sm"
          />
        )}

        <input
          type="text"
          placeholder="Employee ID"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
          className="w-full px-3 py-2 border rounded text-sm"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 text-sm"
        >
          {isLogin ? "Login" : "Register"}
        </button>

        <p className="text-center text-xs text-gray-500">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <NavLink
            to={isLogin ? "/signup" : "/login"}
            className="text-blue-600 font-semibold hover:underline"
          >
            {isLogin ? "Signup" : "Login"}
          </NavLink>
        </p>
      </div>
    </div>
  );
}
