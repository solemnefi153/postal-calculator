function calculateRate(weight, mailType){
    // weight and rate object 
    const rates = {
        stamped : { 
            1 : 0.55, 
            2 : 0.75, 
            3 : 0.95, 
            3.5 : 1.15 },

        metered : { 
            1 : 0.51,
            2 : 0.71, 
            3 : 0.91, 
            3.5 : 1.11 },

        flats : { 
            1 : 1.00, 
            2 : 1.20, 
            3 : 1.40, 
            4 : 1.60, 
            5 : 1.80, 
            6 : 2.00,
            7 : 2.20,  
            8 : 2.40,
            9 : 2.60,
            10 : 2.80,
            11 : 3.00,
            12 : 3.20,
            13 : 3.40
        },

        package : {
            1 : 4.00,	
            2 : 4.00,	
            3 : 4.00,	 
            4 : 4.00,	 
            5 : 4.80,	 
            6 : 4.80,	 
            7 : 4.80,	 
            8 : 4.80,	 
            9 : 5.50,	 
            10 : 5.50,	 
            11 : 5.50,	 
            12 : 5.50,	 
            13 : 6.25	 
        }
    }
    //Finds a proper rate for the values that were provided
    for (const [key, value] of Object.entries(rates[mailType])) {
        if(key >= weight){
            return value;
        }
    }
    return  'Unable to find a rate for the specified parameters';
}

module.exports = calculateRate;