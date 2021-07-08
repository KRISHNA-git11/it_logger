import React,{useState,useEffect} from 'react';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';
const Logs = () => {
    useEffect(()=>{
        getLogs();
        //eslint-disable-next-line
    },[])
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);

    const getLogs = async () => {
        setLoading(true);
        const res = await fetch('/logs');
        const data = await res.json();
        setLogs(data)
        setLoading(false)
    }
    if(loading){
        return(<div className="container">
            <Preloader />
        </div>
        )
    }
    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">SystemLogs</h4>
            </li>
            {!loading && logs.length === 0 ? (<h4 className="center">No logs, Add new one</h4>) : 
            logs.map(log => <LogItem log={log} key={log.id} />)}
        </ul>        
    )
}

export default Logs
