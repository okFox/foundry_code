
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
        let playerAttempt = getRoll();
        attempts++

        console.log("woweee", playerAttempt.result, "=", playerAttempt.total)
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
        console.log("attempts: ", attempts)
    } //end while loop
};

pickAttempt();