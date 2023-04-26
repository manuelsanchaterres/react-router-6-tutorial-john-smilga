import StyledNavbar from '../components/StyledNavbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (

    <>    
    
        <StyledNavbar />

        <Outlet />

        <Footer />

    </>

  )
}
export default SharedLayout