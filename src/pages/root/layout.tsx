import { Outlet, useNavigate } from 'react-router-dom';
import './ui/styles.css'
import { Header } from '~/widgets/header';
import { Footer } from '~/widgets/footer';
import { useEffect } from 'react';
import Routes from '~/shared/config/routes';
export const RootLayout: React.FC = () => {
    const navigation = useNavigate();
    useEffect(() => {
        navigation(Routes.CHARACTERS.ALL);
    }, [navigation])
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};
