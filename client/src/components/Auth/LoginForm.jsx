// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { login } from '../../features/authSlice';

// function LoginForm() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await dispatch(login({ email, password }));
//   };

//   return (
//     // <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
//     //   <div className="mb-4">
//     //     <label className="block text-blue mb-2" htmlFor="email">Email</label>
//     //     <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border rounded-lg bg-white text-black" />
//     //   </div>
//     //   <div className="mb-6">
//     //     <label className="block text-blue mb-2" htmlFor="password">Password</label>
//     //     <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border rounded-lg bg-white text-black" />
//     //   </div>
//     //   <button type="submit" className="w-full bg-blue text-white py-2 rounded-lg">Login</button>
//     // </form>

//     <div className="flex h-screen">
//       <div className="w-1/2 bg-red-500 flex items-center justify-center p-12">
//         <div className="text-white text-center">
//           <h1 className="text-2xl font-bold">Storelt</h1>
//           <h2 className="text-4xl font-bold mt-4">Manage your files the best way</h2>
//           <p className="mt-2">This is a place where you can store all your documents.</p>
//           {/* Add your image or SVG here */}
//         </div>
//       </div>
//       <div className="w-1/2 flex items-center justify-center bg-white p-12">
//         <div className="w-80">
//           <h2 className="text-2xl font-semibold mb-6">Sign In</h2>
//           <form>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//                 Email
//               </label>
//               <input 
//                 type="email"
//                 id="email"
//                 placeholder="Enter your email"
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               />
//             </div>
//             <div className="mb-6">
//               <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//                 Password
//               </label>
//               <input 
//                 type="password"
//                 id="password"
//                 placeholder="Enter your password"
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//                 autoComplete="current-password"
//               />
//               </div>
//               </div>
//             <div className="flex items-center justify-between">
//               <button type="button" className="inline-block align-baseline font-bold text-sm text-red-500 hover:text-red-800">
//                 Forgot Password?
//               </button>
//               <label className="inline-block">
//                 <input type="checkbox" className="form-checkbox" />
//                 <span className="ml-2">Remember me</span>
//               </label>
//             </div>
//             <div className="flex items-center justify-between">
//               <button 
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
//                 type="button"
//               >
//                 Sign In
//               </button>
//               <a href="/signup" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
//                 Sign Up for an Account
//               </a>
//             </div>
//             </div>
//             </div>
//   );
// }

// export default LoginForm;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/authSlice';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(login({ email, password }));
  };

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="w-1/2 bg-red-500 flex items-center justify-center p-12">
        <div className="text-white text-center">
          <h1 className="text-2xl font-bold">Storelt</h1>
          <h2 className="text-4xl font-bold mt-4">Manage your files the best way</h2>
          <p className="mt-2">This is a place where you can store all your documents.</p>
          {/* Add your image or SVG here */}
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex items-center justify-center bg-white p-12">
        <div className="w-80">
          <h2 className="text-2xl font-semibold mb-6">Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                autoComplete="current-password"
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <button
                type="button"
                className="inline-block align-baseline font-bold text-sm text-red-500 hover:text-red-800"
              >
                Forgot Password?
              </button>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Remember me</span>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign In
              </button>
              <a
                href="/signup"
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              >
                Sign Up for an Account
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
