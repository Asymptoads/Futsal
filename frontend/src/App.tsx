import { Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';

// Sys adming pages
import Login from './Pages/SysAdmin/Login';
import SysAdminHome from './Pages/SysAdmin/SysAdminHome';

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />

            {/* System Admin Routes */}
            <Route path='/sysadmin/' element={<SysAdminHome />} />
            <Route path='/sysadmin/login' element={<Login />} />
        </Routes>
    );
};

export default App;
