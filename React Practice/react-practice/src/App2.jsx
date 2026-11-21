import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';

//yaha security guard component lagega
function ProtectedRoute({ isLoggedIn, children }) {
    //agar use logged in nahi hai toh usko login page pe bhejna hoga
    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }
    //agar user logged in hai toh usko andar ki cheeza dikhengii
    return children;
}

//yaha pages rahenge
function LoginPage({ onLogin }) {
    return (
    <div className="p-6 text-center space-y-4">
      <h2 className="text-2xl font-bold">Login Page</h2>
      <button
        onClick={onLogin}
        className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg font-semibold cursor-pointer"
      >
        Login Now
      </button>
    </div>
  );
}

function DashboardPage({ onLogout }) {
    return (
    <div className="p-6 text-center space-y-4">
      <h2 className="text-2xl font-bold text-emerald-400">Secret Dashboard</h2>
      <p className="text-slate-400">Sirf logged-in users hi yeh page dekh sakte hain.</p>
      <button
        onClick={onLogout}
        className="bg-rose-600 hover:bg-rose-500 px-4 py-2 rounded-lg font-semibold cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
}

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <BrowserRouter>
        <div className="min-h-screen bg-slate-950 text-white">
        {/* Simple Navbar */}
        <nav className="flex gap-4 p-4 bg-slate-900 border-b border-slate-800">
          <Link to="/login" className="hover:text-indigo-400">Login</Link>
          <Link to="/dashboard" className="hover:text-indigo-400">Dashboard</Link>
        </nav>

        <Routes>
            <Route
                path="/login"
                element={<LoginPage onLogin={() => setIsLoggedIn(true)} />}
            />

            {/* Protected Route */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute isLoggeedIn={isLoggedIn}>
                  <DashboardPage onLogout={() => setIsLoggedIn(false)} />
                </ProtectedRoute>
              }
            />

            {/* Yaha default route hoga */}
            <Route path="*"
              element={<Navigate to="/login" replace />} />
            </Routes>        
          </div>
        </BrowserRouter>
    );
}

export default App;
