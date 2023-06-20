import { useContext } from "react";
import { Appcontext } from "../contexts/Contextusers";

function Cart () {

    const {selecteditem, User} = useContext(Appcontext);

    
    return (
        <>
        {selecteditem ? <h1>Hey {User.Name}, These are you Items</h1> : 
        <h1>Sorry :\ no items in your cart</h1>
        }
        {selecteditem.map((item => (
            <div key={item.id}>
             <p>{item.name}</p>
             <img className="item-pic" src={item.path} alt={item.name}/>
            </div>
        ))
        )}
            
           
        </>
        
    )
}

export default Cart;