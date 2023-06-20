import { useContext, } from "react";
import { Appcontext } from "../contexts/Contextusers";
import Data from '../items.json'

function Mainpage () {

    const {User, handleAdd, clicked} = useContext(Appcontext)
    


    return (
        <>
        <h1>The main page</h1>
        <h2>Hello {User.Name}</h2>
        <div>
           {Data.map(item =>
            <div key={item.id}>
                <img className="item-pic" src={item.path} alt={item.name}/>
                <p className="item-name">{item.name}</p> <button onClick={() => handleAdd(item)}>Buy</button>
                {item === clicked && <p>Item added to cart</p>}

            </div> 
            )} 
        </div>
        
        </>
    )
}

export default Mainpage;