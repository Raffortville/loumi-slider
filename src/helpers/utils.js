
/**** PPRERMIER CHARACTRE EN MAJUCULE ******/

export const upperCaseFirstChart = (str) => str.charAt(0).toUpperCase() + str.slice(1);


/**** DATE ALEATOIRE EN FORMAT FR ******/

export const randomDate = () => {
    
    const options = {year: 'numeric', month: 'long', day: 'numeric' };

    const start = new Date(2021, 0, 1);

    const  end = new Date();

    let date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

    return date.toLocaleDateString('fr-FR',options)
}

/**** HEURE ALEATOIRE  ******/

export const  randomHour = () => {

    const heure = Math.floor(Math.random() * Math.floor(13)) + 7;

    const minute = Math.floor(Math.random() * Math.floor(50)) + 10;

    return `${heure}H${minute}`
}
  
/****** FORMAT MONAIE  ********/

export const spaceFirtNumbers = (num) =>  parseInt(num).toLocaleString();


