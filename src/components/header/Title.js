import React from 'react'

/***** IMPORT HELPER MAJUSCULE PREMIER CHARACTERE  ********/
import {upperCaseFirstChart} from '../../helpers/utils.js'

const Title = (props) => {
    
    const {title} = props;

    return(
        <div>
            <h3 className="title3">{upperCaseFirstChart(title)}</h3>
        </div>
    )

}


export default Title