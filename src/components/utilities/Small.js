import React from 'react'

/***** IMPORT CSS SPECIFIQUE AUX COMPOSANTS SMALL *****/
import '../../style/small.scss'

const Small = (props) => {

    const {text} = props;

    return(

        <div className="small-border">
            <p className="smallText text-grey">{text}</p>
        </div>
    )
}


export default Small