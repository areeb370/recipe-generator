const { createClient } = require("@supabase/supabase-js");

// Check if environment variables are available
if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY) {
  console.warn("⚠️  Supabase environment variables not found. Please set SUPABASE_URL and SUPABASE_KEY in your .env file");
  // Create a mock client for development
  const supabase = {
    auth: {
      signInWithOtp: () => Promise.resolve({ data: {}, error: null }),
      getUserByCookie: () => Promise.resolve({ data: { user: null }, error: null }),
      getUser: () => Promise.resolve({ data: { user: null }, error: null }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } })
    }
  };
  module.exports = supabase;
} else {
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
  );
  module.exports = supabase;
}
