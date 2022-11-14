import axios from 'axios';
import { useContext, createContext, useEffect, useState } from "react";

const userContext = createContext(null);

const UserProvider = ({ children }) => {

    const [users, setUsers] = useState([])
    const [isLoggedIn, setLogin] = useState(JSON.parse(localStorage.getItem("isLoggedIn")) ?? false)

    useEffect(() => {
        (async () => {
            try {
                const res = await axios({
                    url: "https://api.airtable.com/v0/appjWdL7YgpxIxCKA/credenitals?maxRecords=3&view=Grid%20view",
                    method: "GET",
                    headers: {
                        Authorization: "Bearer keyfXgn8PL6pB3x32",
                    },
                });

                setUsers(res.data.records)
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <userContext.Provider value={{ users, setLogin, isLoggedIn }}>
            {children}
        </userContext.Provider>
    )
}

const useExistingUsers = () => useContext(userContext);

export { useExistingUsers, UserProvider };