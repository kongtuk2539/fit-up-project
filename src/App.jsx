import Dashboardpages from "./Pages/Dashboardpages"
import { useEffect } from "react";
import Login from "./viewpage/Login"
import { AuthProvider } from "./components/auth/AuthContext"
import { Route, Routes } from "react-router"
import ProtectedRoute from "./components/auth/ProtectedRoute"
import { useNavigate } from "react-router-dom";

function App() {
  //useEffect [] token ?
  const navigate = useNavigate()
  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     navigate("/");
  //   }
  // }, []);
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/dashboard" element={<ProtectedRoute> <Dashboardpages /></ProtectedRoute>}></Route>
      </Routes>
    </AuthProvider>
  )
}

export default App



