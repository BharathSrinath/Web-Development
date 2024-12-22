// Checks whether the users internet is online or offline
import {useEffect, useState} from 'react'

const useOnlineStatus = () => {
    
    const [onlineStatus, setOnlineStatus] = useState(true);
   
    const handleOnline =  ()=> {
        setOnlineStatus(false);
    }
    const handleOffline =  ()=> {
        setOnlineStatus(false);
    }

    useEffect(()=>{
        window.addEventListener("offline", handleOffline);
        window.addEventListener("online", handleOnline);

        // cleanup code to remove the eventListeners
        return () => {
            window.removeEventListener("offline", handleOffline);
            window.removeEventListener("online", handleOnline);
        }
    }, [])
    
    return onlineStatus;
}

export default useOnlineStatus;