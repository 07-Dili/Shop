import { useState } from 'react';

const FloatingInput = ({ label, type }) => {
  return (
    <div className="relative w-full mt-4">
      <input
        type={type}
        id={label}
        placeholder=" "
        className="peer w-full border border-black rounded-lg px-3 pt-5 pb-2 focus:outline-none focus:border-black"
      />
      <label
        htmlFor={label}
        className="absolute left-3 top-2.5 bg-white px-1 text-sm text-gray-600 transition-all duration-200 
                 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base 
                 peer-placeholder-shown:text-gray-400 
                 peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-black"
        style={{ transform: 'translateY(-50%)' }}
      >
        {label}
      </label>
    </div>
  );
};

const LoginModal = ({ isOpen, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault(); // ⛔ Prevent page reload

    // Placeholder logic — replace with actual logic
    if (isSignUp) {
      console.log('Sign up user');
    } else {
      console.log('Login user');
    }

    // Optionally close the modal after action
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-[90%] max-w-md p-6 rounded-lg shadow-xl relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl font-semibold text-gray-600 hover:text-black"
        >
          &times;
        </button>

        {/* SHOP Title */}
        <h2 className="text-3xl font-bold tracking-widest text-center mb-6 mt-2">
          <span className="text-indigo-600">S</span>
          <span className="text-pink-500">H</span>
          <span className="text-green-500">O</span>
          <span className="text-yellow-500">P</span>
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {isSignUp && <FloatingInput label="Name" type="text" />}
          <FloatingInput label="Email" type="email" />
          <FloatingInput label="Password" type="password" />
          {isSignUp && <FloatingInput label="Phone" type="tel" />}

          <button
            type="submit"
            className={`w-full ${
              isSignUp ? 'mt-6' : 'mt-8'
            } bg-black text-white py-2 rounded hover:opacity-90 transition`}
          >
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>
        </form>

        {/* Toggle text */}
        <p className="text-center mt-4 text-sm">
          {isSignUp ? (
            <>
              Already have an account?{' '}
              <button className="text-black font-medium" onClick={() => setIsSignUp(false)}>
                Login
              </button>
            </>
          ) : (
            <>
              If you're a new user,{' '}
              <button className="text-black font-medium" onClick={() => setIsSignUp(true)}>
                Sign Up
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
