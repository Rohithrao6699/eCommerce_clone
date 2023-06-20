import { NavLink } from "react-router-dom";

function NavBar () {

    return(
        <> 
        <nav>
           <div className="nav-div">
            <NavLink to='/' > <h3 className="nav-home">Home</h3> </NavLink>
            <NavLink to="about" > <h3 className="about">About</h3> </NavLink>
            <NavLink to="blog" > <h3 className="blog">Blog</h3> </NavLink>
           </div> 
            <NavLink to="loginpage"><button className='login'>Login</button></NavLink>    
        </nav>

        </>
       

    )
}

export default NavBar;