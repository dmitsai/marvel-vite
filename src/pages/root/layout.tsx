import { Outlet } from 'react-router-dom';
import './ui/styles.css'
export const RootLayout: React.FC = () => {
    return (
        <div className='page-wrapper'>
            <Outlet />
        </div>
    );
};
