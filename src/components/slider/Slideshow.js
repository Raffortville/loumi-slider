import React from 'react';

/***** IMPORT DE LA LIBRAIRIE REACT SLIDE SHOW *****/
import { Slide } from 'react-slideshow-image';

/***** IMPORT AUTRES COMPOSANTS *****/
import CardCandidats from '../card/CardCandidats'

/***** IMPORT CSS SPECIFIQUE AUX COMPOSANTS SLIDESHOW *****/
import "../../style/slideShow.scss"

/***** IMPORT CONFIG CUSTOM DU SLIDE  ********/
import {properties} from '../../data/slide-config'

/***** IMPORT DES DATA LOCATAIRES *****/
import {slide1} from '../../data/data-locataires'


/***** 1 SLIDE COMPOSES DE 3 CARDS CHACUNE SE REPETANT 2 FOIS *********/

const Slideshow = () => {

  return (

    <div className="wrap-slide">
      <Slide easing="ease" {...properties} className="slide">
        <div className="each-slide">

          { slide1.map((loc,index) =>

            <CardCandidats key={index} loc={loc}/>
          )}
            
        </div>
        <div className="each-slide">

          { slide1.map((loc,index) =>

            <CardCandidats key={index} loc={loc}/>
          )}

        </div>
      </Slide>
    </div>
  )
};

export default Slideshow;