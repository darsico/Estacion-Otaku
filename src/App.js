import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider } from "./context/authContext";
import Contenido from "./pages/Contenido";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Avatar from "./pages/Avatar";
const App = () => {
  return (
    <main className="main">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/contenido"
            element={
              <ProtectedRoute>
                <Contenido />
              </ProtectedRoute>
            }
          />
          <Route path="/Avatar" element={<Avatar></Avatar>} />
        </Routes>
      </AuthProvider>
    </main>
  );
};

export default App;
