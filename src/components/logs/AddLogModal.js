import React,{useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'
import { connect } from 'react-redux';
import { addLogs } from '../../actions/LogActions';
import TechSelectOptions from '../techs/TechSelectOptions';

const AddLogModal = ({addLogs}) => {
    const [message, setMessage] = useState('')
    const [attention, setAttention] = useState(false)
    const [tech, setTech] = useState('')

    const onSubmit = () => {
        if(message === '' || tech === ''){
            M.toast({html:"Please enter a message and a tech"})
        }
        else{
            const newLog = {
                message,
                attention,
                tech,
                date: new Date()
            }
            addLogs(newLog);
            M.toast({html:"Added a new log"})
            setMessage('');
            setAttention(false);
            setTech('')
        }
    }

    return (
        <div id='add-log-modal' className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4 >Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input type='text' name='message' value={message} 
                                onChange={e=>setMessage(e.target.value)} />
                        <label htmlFor="message" className="active">Log Message</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select name='tech' value={tech} className='browser-default' 
                                onChange={e => setTech(e.target.value)}>
                            <option value="" disabled>Select Technician</option>
                            <TechSelectOptions/>
                        </select>
                    </div>
                </div>
                <div className='row'>
                    <p>
                        <label>
                            <input type="checkbox" className="filled-in" checked={attention} value={attention} 
                            onChange={e=>setAttention(!attention)} />
                            <span>Needs attention</span>
                        </label>
                    </p>
                </div>
            </div>
            <div className="modal-fotter" style={{paddingLeft:"20px"}}>
                <a href="/" onClick={onSubmit} className="modal-close waves-effect blue waves-light btn">Enter</a>
            </div>
        </div>
    )
}

const modalStyle={
    width:'75%',
    height:'90%'
}

export default connect(null,{addLogs})(AddLogModal)
