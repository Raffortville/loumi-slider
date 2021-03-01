/***** IMPORT PHOTOS LOCATAIRE ********/
import cruz from '../assets/img/cruz.jpg'
import sakai from '../assets/img/sakai.jpg'
import foresti from '../assets/img/foresti.jpg'
import pujadas from '../assets/img/pujadas.jpg'

/***** IMPORT HELPERS & UTILS FUNCTIONS ********/
import {randomDate,randomHour} from '../helpers/utils'

export const slide1 = [

    {
    nom:"cruz",
    prénom:"Pénélope",
    status:"location",
    status_pro:"comédienne",
    colocation:false,
    location:true,
    photo:cruz,
    revenus:12000,
    garants:6000,
    date_visite:randomDate(),
    heure_visite:randomHour(),
    id:1,
        
    },
    {
    nom:"sakai",
    prénom:"hiroki",
    status:"colocation 4 pers.",
    status_pro:"Sportif professionnel",
    location:false,
    colocation:true,
    colocataires : [
      
        {
        nom:"Pujadas",
        prénom:"david",
        status:"location",
        status_pro:"CDI",
        colocation:true,
        location:false,
        photo:pujadas,
        id:3
        }],

    photo:sakai,
    revenus:8390,
    garants:5283,
    date_visite:randomDate(),
    heure_visite:randomHour(),
    id:2
    },
    {
    nom:"Pujadas",
    prénom:"David",
    status:"colocation 2 pers.",
    status_pro:"CDI",
    colocation:true,
    location:false,
    colocataires : [
        {
        nom:"Foresti",
        prénom:"florence",
        status:"location",
        status_pro:"comédienne",
        colocation:true,
        location:false,
        photo:foresti,
        id:8

    }],
    photo:pujadas,
    revenus:3680,
    garants:4700,
    date_visite:randomDate(),
    heure_visite:randomHour(),
    id:7
    }

];