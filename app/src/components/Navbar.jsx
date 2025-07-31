import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Navbar() {
  const { user, signOut } = useAuth();
  return (
    <nav className="bg-gradient-to-r from-green-500 to-green-600 shadow-lg p-4">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Link to="/" className="font-bold text-2xl text-white hover:text-green-100 transition-colors">
          🧑‍🍳 AI Recipe Generator
        </Link>
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <span className="text-white text-sm">Welcome, {user.email}</span>
              <button 
                onClick={signOut} 
                className="bg-white text-green-600 px-4 py-2 rounded-lg font-medium hover:bg-green-50 transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <Link 
              to="/login" 
              className="bg-white text-green-600 px-4 py-2 rounded-lg font-medium hover:bg-green-50 transition-colors"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
