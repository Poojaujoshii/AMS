import { Route, Routes } from "react-router-dom"
import Login from "./Pages/Login"
import Employee from "./Pages/Employee"
import Admin from "./Pages/Admin"


function App() {
  return (
    <>
      <Routes>
        
        <Route path="/login" element={<Login />} />
        <Route path="/employee" element={<Employee/>}/>
        <Route path="/admin" element={<Admin/>}/>

      </Routes>
    </>
  )
}
export default App