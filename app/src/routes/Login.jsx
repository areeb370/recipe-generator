import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const [email, setEmail] = useState("");
  const { signIn } = useAuth();
  const nav = useNavigate();

  const handle = async (e) => {
    e.preventDefault();
    try {
      await signIn(email);
      alert("Check your inbox for the magic link!");
      nav("/");
    } catch (error) {
      console.error("Login error:", error);
      alert("Error sending magic link. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="text-4xl mb-4">🔐</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome Back
          </h2>
          <p className="text-gray-600">
            Sign in to generate amazing recipes with AI
          </p>
        </div>
        <form
          onSubmit={handle}
          className="bg-white rounded-xl shadow-lg p-8 space-y-6"
        >
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-200"
          >
            ✉️ Send Magic Link
          </button>
          <p className="text-xs text-gray-500 text-center">
            We'll send you a secure login link to your email
          </p>
        </form>
        <div className="text-center mt-4">
          <Link 
            to="/" 
            className="text-green-600 hover:text-green-700 font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
