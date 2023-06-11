import { Outlet } from 'react-router-dom';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/footer/Footer';

// Root is the layout for the website
const Root = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}

export default Root;