import React from 'react'

/**** IMPORT CSS DES COMPONENTS BUTTONS *******/
import '../../style/buttons.scss';

const ButtonPrimary = (props) => {

    const {text} = props;

    return(
        <div className="btn-primary">{text}
        </div>
    )
}

export default ButtonPrimary