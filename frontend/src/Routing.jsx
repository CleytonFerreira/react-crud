import UserList from './components/UserList'
import AddUser from './components/AddUser'
import UpdateUser from './components/UpdateUser'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Navigate to="/home" />} />
                <Route exact path='/home' element={<UserList />} />
                <Route exact path='/adduser' element={<AddUser />} />
                <Route exact path='/update' element={<UpdateUser />} />
                <Route path="*" element={<Navigate replace to="/home" />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing