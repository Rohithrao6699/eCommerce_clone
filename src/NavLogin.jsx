import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Appcontext } from "./contexts/Contextusers";

function LoginNav () {

    const {logout} = useContext(Appcontext)

    return (
        <nav>
            <NavLink to="mainpage" className='home'>Home</NavLink>
            <NavLink to="cart" className='cart'>Cart</NavLink>
            <NavLink to="/" onClick={logout}><button className="logout">Logout</button></NavLink>
        </nav>
    )
}

export default LoginNav;