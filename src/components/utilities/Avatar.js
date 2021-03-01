import React from 'react'

/***** IMPORT CSS SPECIFIQUE AUX COMPOSANTS AVATART *****/
import '../../style/avatars.scss'


const Avatar = (props) => {

    const {src} = props;

    return(
        <div >
            <img src={src} alt="Avatar" className="avatar"/>
        </div>

    )
}

export default Avatar