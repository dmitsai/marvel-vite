import { Outlet } from 'react-router-dom';
import './ui/styles.css'
import { Header } from '~/widgets/header';
export const RootLayout: React.FC = () => {
    return (
        <div className='page-wrapper'>
            <Header />
            <Outlet />
        </div>
    );
};
