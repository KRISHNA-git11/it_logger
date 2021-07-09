import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';
import { getLogs } from '../../actions/LogActions';
const Logs = ({log:{logs,loading},getLogs}) => {
    useEffect(()=>{
        getLogs();
        // eslint-disable-next-line
    },[])

    if(loading || logs === null){
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
            {!loading && logs.length === 0 ? (<p className="center">No logs, Add new one</p>) : (
                logs.map(log => <LogItem log={log} key={log.id} />)
            )
            }
        </ul>        
    )
}

const mapStateToProps = state => ({
    log:state.log
})

export default connect (
    mapStateToProps,
    {getLogs}
)(Logs);
