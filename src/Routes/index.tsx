import { Navigate, Route, Routes } from "react-router-dom"
import { DashBoard } from "../Pages/DashBoard"
import { Login } from "../Pages/Login"
import { Register } from "../Pages/Register"

export const RoutesProvider = () => {

    return (
    <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashBoard" element={<DashBoard/>}/>
        <Route path="*" element={<Navigate to="/login" />}/> 
    </Routes>

    )
}


