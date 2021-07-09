import React from 'react'
import { connect } from 'react-redux'
import { deleteTech } from '../../actions/TechActions'
import M from "materialize-css/dist/js/materialize.min.js"

const TechItem = ({tech,deleteTech}) => {
    const onDelete = () => {
        deleteTech(tech.id)
        M.toast({html:'Technician deleted'})
    }
    return (
        <li className="collection-item">
            <div>
                {tech.firstname}{tech.lastname}
                <a href="#!" className="secondary-content">
                    <i className="material-icons grey-text" onClick={onDelete}>delete</i>
                </a>
            </div>
        </li>
    )
}

export default connect(null,{deleteTech})(TechItem)
