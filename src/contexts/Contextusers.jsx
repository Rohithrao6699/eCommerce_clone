import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const Appcontext = createContext({});

function Appcontexts({children}) {

    const [User, setUser] = useState('');
    const Navigate = useNavigate(); 
    const onSubmit = (data) => {
        setUser(data);
        console.log(User);
        Navigate('/mainpage');
    }

    const [selecteditem, setselecteditem] = useState([])
    const [clicked, setclicked] = useState(null)

    const handleAdd = (item) => {
        setselecteditem([...selecteditem, item]);
        console.log(selecteditem)
        setclicked(item)
    }

    const logout = () => {
        setselecteditem([])
    }

    return(
        <Appcontext.Provider value={{setUser, User, onSubmit, handleAdd, selecteditem, setselecteditem, clicked, setclicked, logout}}>
            {children}
        </Appcontext.Provider>
    )
}

export default Appcontexts;