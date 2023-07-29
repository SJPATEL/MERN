import React, { useContext } from 'react'
import noteContecxt from '../Context/notes/noteCotext';

const Alert = () => {
    const context = useContext(noteContecxt);
    const { alert } = context;
    return (
       <div>
            <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
                <strong>{alert.type === 'danger' ? 'Error': alert.type}</strong> {alert.message}
            </div> 
        </div>
    )
}

export default Alert
