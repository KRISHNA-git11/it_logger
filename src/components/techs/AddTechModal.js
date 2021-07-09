import React,{useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'
import { addTech } from '../../actions/TechActions';
import { connect } from 'react-redux';

const AddTechModal = ({addTech}) => {
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')

    const onSubmit = () => {
        if(firstname === '' || lastname === ''){
            M.toast({html:"Please enter a first name and a last name"})
        }
        else{
            addTech({firstname,lastname})
            setFirstName('')
            setLastName('')
            M.toast({html:'Tech added successfully'})
       }
    }

    return (
        <div id='add-tech-modal' className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter Technician Details</h4><br></br>
                <div className="row">
                    <div className="input-field">
                        <input type='text' name='firstname' value={firstname} 
                                onChange={e=>setFirstName(e.target.value)} />
                        <label htmlFor="firstname" className="active">First Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input type='text' name='lastname' value={lastname} 
                                onChange={e=>setLastName(e.target.value)} />
                        <label htmlFor="lastname" className="active">Last Name</label>
                    </div>
                </div>
            </div>
            <div className="modal-fotter" style={{paddingLeft:"20px"}}>
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue waves-light btn">Enter</a>
            </div>
        </div>
    )
}

const modalStyle ={
    height : "75%"
}


export default connect(null,{addTech}) (AddTechModal)
