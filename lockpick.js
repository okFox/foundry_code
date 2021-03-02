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


        const pickAttempt = () => {
            const dcNum = 18;
            let thieveryProf = token.actor.getRollData().skills.thi.totalModifier;
            let attempts = 0;
            const critFail = dcNum - 10;
            const successesNeeded = 3;
            let successes = 0;
        
            let critfailed = false
        
            //let roll = new Roll("1d20 + @prof", {prof: `${thieveryProf}`});
        
            let getRoll = () => {
                let roll = new Roll("1d20 + @prof", {prof: `${thieveryProf}`});
                let newRoll = roll.evaluate()
                return newRoll;
            }
        
            while (critfailed === false && successes < successesNeeded) {
                let r = getRoll();
                let playerAttempt = r.total
                attempts++
        
                console.log("The Roll is: ", r.result, "=", r.total)
                console.log("sucesses:", successes)
                console.log("attempts: ", attempts)
        
                if (playerAttempt <= critFail) {
                    critfailed = true;                                                 //crit fail
                    console.log(`Critical Fail! in ${attempts} attempts.`)
                    return
        
                } else if (playerAttempt >= dcNum) {                                                //success
                    successes++
                    console.log(`Success! For a total of ${successes} out of ${successesNeeded} needed.`)
        
                } else {                                                                            //regular fail
                    console.log("You failed!  Roll again...")
        
                };
            } //end while loop
        };
        
        pickAttempt();