import { createContext, useContext, useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

// Check if environment variables are available
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.warn("⚠️  Supabase environment variables not found. Please set REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_KEY in your .env file");
}

const supabase = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseKey || "placeholder-key"
);
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null);
    });
    supabase.auth
      .getSession()
      .then(({ data }) => setUser(data.session?.user ?? null));
  }, []);

  const signIn = (email) => supabase.auth.signInWithOtp({ email });
  const signOut = () => supabase.auth.signOut();

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
