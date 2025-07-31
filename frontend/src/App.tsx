import { Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';

// Sys adming pages
import Login from './Pages/SysAdmin/Login';
import SysAdminHome from './Pages/SysAdmin/SysAdminHome';

//SysAdmin Panesls
import SysAdminFutsalRequest from './Pages/SysAdmin/FutsalRequest';
import Orders from './Pages/SysAdmin/Orders';
import Refunds from './Pages/SysAdmin/Refund'; // Assuming Refunds is similar to Orders
import Futsals from './Pages/SysAdmin/FutsalList'; // Assuming Futsals is similar to Orders
import Customers from './Pages/SysAdmin/UserList';

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />

            {/* System Admin Routes */}
            <Route path='/sysadmin/login' element={<Login />} />
            <Route path='/sysadmin/' element={<SysAdminHome />} />
            <Route path='/sysadmin/futsal-requests' element={<SysAdminFutsalRequest />} />
            <Route path='/sysadmin/orders' element={<Orders />} />
            <Route path='/sysadmin/refunds' element={<Refunds />} /> {/* Assuming Refunds is similar to Orders */}
            <Route path='/sysadmin/futsals' element={<Futsals />} />
            <Route path='/sysadmin/users' element={<Customers />} /> {/* Assuming UserList is similar to Futsals */}
        </Routes>
    );
};

export default App;
