import { Link } from "react-router-dom"

import './sidebar.css'
const Sidebar = () => {
    


    return (<>
    
        <div className="sidebar">
            <ul>
                <li><Link to={"/dashboard"} >Dashboard</Link></li>
                <li><Link to={"/dashboard/settings"} >Settings</Link></li>
                <li><Link to={"/dashboard/agents"} >agents</Link></li>
                <li><Link to={"/dashboard/customers"} >customers</Link></li>
                <li><Link to={"/dashboard/shipments"} >shipments</Link></li>
            </ul>
    </div>
    
    
    
    
    
    
    </>)

}

export default Sidebar