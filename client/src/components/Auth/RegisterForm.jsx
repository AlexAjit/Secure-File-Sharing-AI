import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../features/authSlice';

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(register({ email, password }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <div className="mb-4">
        <label className="block text-blue mb-2" htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border rounded-lg bg-white text-black" />
      </div>
      <div className="mb-6">
        <label className="block text-blue mb-2" htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border rounded-lg bg-white text-black" />
      </div>
      <button type="submit" className="w-full bg-blue text-white py-2 rounded-lg">Register</button>
    </form>
  );
}

export default RegisterForm;