const isAdult = age => age >= 18 ? true : false, 
    canDrink = age => age >= 21 ? true : false,
    isSenior = age => age >=65


export {isAdult, canDrink, isSenior as default}