import Forms from './components/Loginpage'
import {Routes, Route, useLocation} from 'react-router-dom'
import Homepage from './components/Homepage';
import About from './components/Aboutpage';
import Mainpage from './components/Mainpage';
import Cart from './components/Cartpage';
import LoginNav from './NavLogin';
import NavBar from './Navbar';
import Blog from './components/blogpage';



function App () {

    const Location = useLocation();
    const loginRoutes = ['/mainpage', '/cart'];
    const loginRoutes2 = ['/loginpage']

    const renderNavbar = () => {
        if(loginRoutes.includes(Location.pathname)) {
            return <LoginNav />;
        } 
        return <NavBar />;
    }


    return(
        <>
        <div className='container'>
        {renderNavbar()}
        <Routes>
            <Route path='/' element={<Homepage />}/>
            <Route path='about' element={<About/>}/>
            <Route path='loginpage' element={<Forms/>}/>
            <Route path='mainpage' element={<Mainpage/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path='blog' element={<Blog/>}/>
        </Routes>
        </div>
       
       
        </>
    )
}
  
export default App;
    
