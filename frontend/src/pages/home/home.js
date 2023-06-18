import { Route, Routes } from "react-router-dom"
import Dashboard from "../dashboard/dashboard"


const Home = () => {
    



    return (<>
        <Routes>
        
        <Route path="/dashboard/*" element={<Dashboard/>} ></Route>
        
        </Routes>    
    
    </>)
}


export default Home