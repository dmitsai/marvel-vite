import { Outlet } from 'react-router-dom';
import './ui/styles.css'
import { Header } from '~/widgets/header';
import { Footer } from '~/widgets/footer';
export const RootLayout: React.FC = () => {
    return (
        <div className='page-wrapper'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};
