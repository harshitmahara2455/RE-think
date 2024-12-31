import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

function ProtectedRoute({ children }) {
  const [user] = useAuthState(auth);

  if (!user) {
    return <Navigate to="/auth" />;
  }

  return children;
}

export default ProtectedRoute;
