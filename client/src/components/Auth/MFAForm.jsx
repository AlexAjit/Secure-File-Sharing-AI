import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { mfa } from '../../features/authSlice';

function MFAForm({ email }) {
  const [code, setCode] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(mfa({ email, code }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <div className="mb-4">
        <label className="block text-blue mb-2" htmlFor="code">MFA Code</label>
        <input type="text" id="code" value={code} onChange={(e) => setCode(e.target.value)} className="w-full px-3 py-2 border rounded-lg bg-white text-black" />
      </div>
      <button type="submit" className="w-full bg-blue text-white py-2 rounded-lg">Verify</button>
    </form>
  );
}

export default MFAForm;