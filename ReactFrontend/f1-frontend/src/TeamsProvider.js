import React, {useState, useContext} from 'react';
import axios from 'axios';

export const TeamsContext = React.createContext();
export const TeamsRefreshContext = React.createContext();
const baseURL = 'http://localhost:8080/api/teams';

export function useTeams(){
    return useContext(TeamsContext);
}
export function useRefreshContext(){
    return useContext(TeamsRefreshContext)
}

export function TeamsProvider({children})
{
    const [teams, setTeams] = useState([]);

    function refreshTeams(){
        axios.get(baseURL).then((response) => {
            setTeams(response.data);
        });
    }

    return(
        <TeamsContext.Provider value={teams}>
            <TeamsRefreshContext.Provider value={refreshTeams}>
                {children}
            </TeamsRefreshContext.Provider>
        </TeamsContext.Provider>
        
    )
}