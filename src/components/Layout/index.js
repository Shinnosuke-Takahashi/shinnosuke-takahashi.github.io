import './index.scss';
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router';

const Layout = () => {
    return (
        <div className='App'>
            <Sidebar/>
            <div className='page'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout