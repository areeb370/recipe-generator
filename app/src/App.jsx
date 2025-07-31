import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Login from "./routes/Login";
import RecipeDetail from "./routes/RecipeDetail";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <div className="p-4 max-w-4xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}
