const validateName = (name) =>{
    if(!name){
        return 'Name needs to be at least 3 characters long!'
    }
    if(name.length<3){
        return 'Name needs to be at least 3 characters long!';
    }
    return null;
};

const validateFoundation = (founded) =>{
    const parsed = parseInt(founded);
    if(isNaN(parsed)){
        return 'Foundation date must be a number!'
    }
    const currentYear = new Date().getFullYear();
    if(parsed<1900 || currentYear < parsed)
    {
        return 'Foundation date must be between 1900 and '+currentYear+'!';
    }
    return null;
};

const validateWins = (wins) =>{
    const parsed = parseInt(wins);
    if(isNaN(parsed)){
        return 'Number of wins must be a number!'
    }
    if(parsed<0)
    {
        return 'Number of wins must be greater or equal to 0!';
    }
    return null;
};

export {validateName, validateFoundation, validateWins};