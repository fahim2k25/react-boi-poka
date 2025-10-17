import NavBar from '../../components/header/NavBar';
import { Outlet } from 'react-router';
import Footer from '../../components/footer/Footer';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;