import React from 'react';
import RegisterForm from '../components/Auth/RegisterForm';

function Register() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-blue text-3xl mb-4">Register</h1>
      <RegisterForm />
    </div>
  );
}

export default Register;