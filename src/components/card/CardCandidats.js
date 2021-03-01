import React from 'react'

/*****  CLASS CSS DU COMPONENT CARD ***/
import '../../style/cards.scss'

/*****  IMPORT AUTRES COMPONENTS   ***/
import ButtonPrimary from '../button/ButtonPrimary'
import Avatar from '../utilities/Avatar'
import Small from '../utilities/Small'

/******* IMPORT FIELDS TEMPLATE ******/
import {buttonFieldsPlus} from '../../data/constants'

/*****  IMPORT HELPERS FORMAT MONEY & CHARACTERE MAJUSCULE   ***/
import {spaceFirtNumbers,upperCaseFirstChart} from '../../helpers/utils'


const CardCandidats = (props) => {

    const {loc} = props;

    return (

        <div id="CardCandidats" className="card">
            <div className="title3 text-black text-shadow">
               {upperCaseFirstChart(loc.status)}  
            </div>
                <div className="wrap-list-candidats-infos">
                    <ul id="list-candidats-infos">

                          {/* CLASS CSS CONDITIONEL SELON PRESENCE COLOCATAIRE */}
                        <li className={`${!loc.colocataires ? "li-col" : "li-row"}`}> 

                            <Avatar src={loc.photo}/>
                            <div className="list-content">
                                <p className="body-text1 text-grey-light text-shadow">{upperCaseFirstChart(loc.prénom)} <span>{upperCaseFirstChart(loc.nom)}</span></p>
                                <Small text={upperCaseFirstChart(loc.status_pro)}/>
                            </div> 
                        </li>

                        {/* RENDU CONDITIONEL COLOCATAIRES */}
                        {loc.colocataires && loc.colocataires.map((coloc,index) => 

                        <li key={index} className="li-row"> 
                            <Avatar src={coloc.photo}/>
                            <div className="list-content">
                                <p className="body-text1 text-grey-light text-shadow">{upperCaseFirstChart(coloc.prénom)} <span>{upperCaseFirstChart(coloc.nom)}</span></p>
                                <Small text={upperCaseFirstChart(coloc.status_pro)}/>
                            </div> 
                        </li>)}
                    </ul>
                </div>
                <h3 className="title3 text-grey text-shadow">Revenu mensuel moyen</h3>
                <ul id="list-candidats-finances">
                    <li>
                        <p className="body-text2 text-grey-light text-shadow">Candidats</p>
                        <span className="primary body-text1-bold">{spaceFirtNumbers(loc.revenus)} <span> <i className="fas fa-euro-sign"></i></span></span>
                    </li>
                    <li>
                        <p className="body-text2 text-grey-light text-shadow">Garants</p>
                        <span className="primary body-text1-bold">{spaceFirtNumbers(loc.garants)} <span> <i className="fas fa-euro-sign"></i></span></span>
                    </li>
                </ul>
            <div className="wrap-button">   
                <ButtonPrimary text={buttonFieldsPlus}/>
            </div>  
            <div className="footer">Visite du <span>{loc.date_visite}</span> à <span> {loc.heure_visite}</span></div>
        </div>
    )

}

export default CardCandidats