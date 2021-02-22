// Dialogue pop up box asking for DC of lock and required number of Successes
// Continuously rolls the selected characters thievery roll against the DC and counts the number of rolls made until one of two conditions are met. 
// Either A) The number of Successes has been met (at which point output the total number of attempts made times 6 / or if it's easier just total number of attempts made)
// Or B) a critical failure occurs (so DC-10) at which point again output total number of attempts made either times 6 or not



// get DC

// get number of successes needed

//set crit fail value (DC - 10)

//track attempts and keep rolling until:

    // === num of successes rolled
        //  return attempts * 6
    
// OR

    //crit fail rolled
        // return attempts * 6


const pickAttempt = (dcNum = 18, thieveryProf = 5, mod = 0) => {
    let attempts = 0;
    const critFail = dcNum - 10;
    const successesNeeded = 3;
    let successes = 0;
    let roll = 9;
    let critfailed = false
 

    while (critfailed === false && successes < successesNeeded) {
        //let roll = getRoll();
        let playerAttempt = roll + thieveryProf + mod;
        attempts++

        if (playerAttempt <= critFail) {                                                    //crit fail
            console.log(`Critical Fail! in ${attempts} attempts.`)
            return attempts;

        } else if (playerAttempt >= dcNum) {                                                //success
            successes++
            console.log(`Success! For a total of ${successes} out of ${successesNeeded} needed.`)
            return attempts;

        } else {                                                                            //regular fail
            console.log("You failed!  Roll again...")
            return attempts;                
        };
    } //end while loop
};

pickAttempt();