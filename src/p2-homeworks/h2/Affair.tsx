import React from 'react'
import { AffairType } from './HW2';

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {
    console.log(props);
    const style = {
        color: (props.affair.priority === 'high') ? 'red' :
            (props.affair.priority === 'middle') ? 'orange' :
                'green',
        margin: '0 10px'
    }
    const deleteCallback = () => { props.deleteAffairCallback(props.affair._id) }
    return (
        <div>
            <span>
                {props.affair.name}
            </span>
            <span style={style}>
                {props.affair.priority}
            </span>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
