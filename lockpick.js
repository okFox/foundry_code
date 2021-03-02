
const pickAttempt = () => {
    const dcNum = 18;
    let thieveryProf = token.actor.getRollData().skills.thi.totalModifier;
    let attempts = 0;
    const successesNeeded = 3;
    let successes = 0;
    let critfailed = false

    //generate a roll
    let getRoll = () => {
        let roll = new Roll("1d20 + @prof", {prof: `${thieveryProf}`});
        let newRoll = roll.evaluate()
        return newRoll;
    }

    //Evaluate for Crits
    const critEval = (die, total, dc) => {
        let result;
                if (die == 1 || total <= dc-10) {
                    result = "critFail"
                } else if (die == 20 || total >= dc+10) {
                    result = "critSuccess"
                } else {
                    result = "noCrit"
                }
                return result;
    };

    //Continuously roll 'til conditions met
    while (critfailed === false && successes < successesNeeded) {
        let r = getRoll();
        let rollTotal = r.total
        let dieRoll = r.results[0]
        let critResult = critEval(dieRoll, rollTotal, dcNum);
        attempts++

        console.log("The Roll is: ", r.result, "=", r.total)


        if (critResult === "critFail") {
            critfailed = true;                                                               //crit fail
            console.log(`Critical Fail! in ${attempts} attempts.`)
            return

        } else if (critResult === "critSuccess") {                                           //crit success
            successes += 2
            console.log(`Critical Success! For a total of ${successes} out of ${successesNeeded} needed.`)

        } else if (rollTotal >= dcNum) {                                                    //success
            successes++
            console.log(`Success! For a total of ${successes} out of ${successesNeeded} needed.`)

        } else {                                                                            //regular fail
            console.log("You failed!  Roll again...")

        };
        console.log("sucesses:", successes)
        console.log("attempts: ", attempts)
    } //end while loop
};

pickAttempt();