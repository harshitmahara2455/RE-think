import React, { useState, useEffect } from 'react';
import { auth } from '../Firebase';  // Ensure Firebase is correctly initialized
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';  // Firebase methods for login and signup
import { useNavigate } from 'react-router-dom';  // For navigation after successful login/signup
import { doc, getDoc, setDoc, collection } from 'firebase/firestore';
import { db } from '../Firebase'

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSignUp, setIsSignUp] = useState(true);  // State to toggle between Sign-Up and Sign-In
  const navigate = useNavigate();

  // Check if the user is logged in and redirect accordingly
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        // Check if it's the first time the user is logging in
        const userDocRef = doc(db, 'users', user.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (!userDocSnap.exists()) {
          // If the user is logging in for the first time, direct them to the profile page
          navigate('/profile');
        } else {
          // If the user is already registered, direct them to the home page
          navigate('/home');
        }
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        // Sign-Up Flow
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Create a new user document in Firestore to mark them as a registered user
        await setDoc(doc(db, 'users', user.uid), {
          email: user.email,
          profileCompleted: false, // First-time user, profile is not completed yet
        });

        alert('Registration successful');
        navigate('/profile');  // Redirect to profile page after successful sign-up
      } else {
        // Sign-In Flow
        await signInWithEmailAndPassword(auth, email, password);
        alert('Login successful');
      }
    } catch (err) {
      setError(err.message);  // Set error message to state
    }
  };

  return (
    <div className="auth-page min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 py-6 w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center">{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>} {/* Show error message */}
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
              required
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </button>
          </div>
        </form>

        {/* Toggle between Sign-Up and Sign-In */}
        <div className="mt-4 text-center">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-blue-500 hover:text-blue-700"
          >
            {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
