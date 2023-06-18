import { Route, Routes } from 'react-router-dom'
import MainHeader from '../../components/header/header'
import Sidebar from '../../components/sidebar/sidebar'
import { Agent } from '../agents/list'
import { Customers } from '../customers/list'
import Main from '../main/main'
import { Shipments } from '../shipments/list'
import './dashboard.css'

const Dashboard = () => {
    


    return (<>
        <div className='dashboard-container' >
            <MainHeader></MainHeader>
        <div className='row'>
        
            <div className='col-md-3'>
                <Sidebar></Sidebar>
        </div>
            <div className='col-md-9 routes-box'>
                
                    <Routes>
                    <Route path='' element={<Main/>}></Route>
                    <Route path='settings' element={<>setting</>}></Route>
                    <Route path='agents' element={<Agent/>}></Route>
                    <Route path='customers' element={<Customers/>}></Route>
                    <Route path='shipments' element={<Shipments/>}></Route>
                    <Route path='reports' element={<>setting</>}></Route>
                </Routes>


        </div>
    
        </div>    
    
    
    
        </div>
    </>)
}

export default Dashboard