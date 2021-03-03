// Crit Fail:
// Die = 1, Total < DC. (If the Total = fail, a 1 makes it a crit fail)
// Total < DC -10 (If the total is DC-10 it should be a crit fail, unless the die is a 20, when it would be a fail)

// Fail
// DC -10 < Total < DC (Total is above DC -10, but below DC - This is the standard fail)
// Die = 1, Total > DC (Total would otherwise succeed, but the 1 result pushes it down to a fail)
// Die = 20, Total < DC-10 (Total would otherwise Crit fail, but the 20 pushes it up to a fail)

// Succeed
// DC +10 > Total > DC (Standard success; Total is less than DC+10 but more than the DC)
// Die = 20, Total < DC (Total would otherwise fail, but 20 pushes it to a success)
// Die = 1, Total > DC+10 (Total would otherwise crit succeed, but 1 pushes it down to a success.)

// Crit success
// Total > DC +10 (standard Crit, total is above DC+10)
// Die = 20, DC+10 > Total > DC (Total would otherwise succeed, but 20 pushes it to a crit success)

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

    //Evaluate for ones and twenties
    const critEval = (die, total, dc) => {
        let result;
                if (die === 1 && total <= dc-10) {
                    result = "critFail"
                    console.log(`Critical Fail! in ${attempts} attempts.`)
                } else if (die === 20 && total <= dc-10) {
                    result = 0
                    console.log("You failed!  Roll again...")
                } else if (die === 1 && total >= dc+10) {
                    result = 1
                    console.log(`Success!`)
                } else if (die === 20 && total >= dc+10) {
                    result = 2
                    console.log(`Critical Success!`)
                } else if (total >= dc) {
                    result = 1
                    console.log(`Success!`)
                } else if (total <= dc-10) {
                    result = "critFail"
                    console.log(`Critical Fail! in ${attempts} attempts.`)
                    critfailed = true;
                } else if (total >= dc+10) {
                    result = 2
                    console.log(`Critical Success!`)
                } else if (total <= dc) {
                    result = 0
                    console.log("You failed!  Roll again...")
                }
                return result;
    };

    //Continuously roll 'til conditions met
    while (critfailed === false && successes <= successesNeeded) {
        let r = getRoll();
        attempts++

        let rollTotal = r.total
        let dieRoll = r.results[0]
        console.log("The Roll is: ", r.result, "=", r.total)

        let critResult = critEval(dieRoll, rollTotal, dcNum);
        
        if (critResult === "critFail") {
            critfailed = true;
            return
        } else {                                                                            
            successes = successes + critResult;
        };

        console.log("successes:", successes)
        console.log("total attempts: ", attempts)
    } //end while loop
};

pickAttempt();