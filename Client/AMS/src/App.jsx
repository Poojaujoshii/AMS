import { Route, Routes } from "react-router-dom"
import Login from "./Components/Login"
import AdminDashboard from "./Components/AdminDashboard"
import EmployeeDashboard from "./Components/EmployeeDashboard"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* Add your protected routes below */}
         <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/employee/dashboard" element={<EmployeeDashboard />} /> 
      </Routes>
    </>
  )
}

export default App
