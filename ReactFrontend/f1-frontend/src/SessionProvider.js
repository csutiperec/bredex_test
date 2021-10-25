import React, {useState, useContext} from 'react';

export const SessionContext = React.createContext();
export const SessionUpdateContext = React.createContext();

export function useSession(){
    return useContext(SessionContext);
}
export function useSessionUpdate(){
    return useContext(SessionUpdateContext)
}

export function SessionProvider({children})
{
    const [session, setSession] = useState({username:'', accessToken:''});

    function changeSession(newSession){
        setSession(newSession);
    }

    return(
        <SessionContext.Provider value={session}>
            <SessionUpdateContext.Provider value={changeSession}>
                {children}
            </SessionUpdateContext.Provider>
        </SessionContext.Provider>
    )
}