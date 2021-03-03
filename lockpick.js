// My idea probably involves a large rewrite but was to establish the degrees;
// IF Total < DC-10 is Crit Fail; Return 1
// IF DC-10 < Total < DC - Fail; Return 2
// IF DC < Total < DC+10 - Success; Return 3
// IF Total > DC+10 - crit success; Return 4

// Then checks for die.
// On DIE = 20; Return (x)+1 (Max. 4, so it ca'nt become 5)
// On DIE = 1; Return (x)-1 (min.1 so it can't become 0)

// Evaluate,
// Final Return: 
// 1 = crit fail -- Plus one attempt, Return attempts and stop rolling
// 2 = Fail -- Plus one attempt, continue to roll
// 3 = Success -- Plus one attempt, one success
// 4 = Crit success -- Plus one attempt, two sucesses

const pickAttempt = () => {
    const dcNum = 18;
    let thieveryProf = token.actor.getRollData().skills.thi.totalModifier;
    let attempts = 0;
    const successesNeeded = 3;
    let successes = 0;
    let critFailed = false;

    //generate a roll
    let getRoll = () => {
        let roll = new Roll("1d20 + @prof", {prof: `${thieveryProf}`});
        let newRoll = roll.evaluate()
        return newRoll;
    }

    const evalRoll = (total, dc) => {
        let degree;

        if (total <= dc-10) {
            degree = 1; //crit fail
        } else if (total > dc-10 && total < dc) {
            degree = 2; //fail
        } else if (total >= dc && total < dc+10) {
            degree = 3; //success
        } else if (total >= dc+10) {
            degree = 4; // crit success
        } else {
            console.log("Macro Error, try again");
        }

        if (degree <= 0) {
            degree = 1;
        } else if (degree >= 5) {
            degree = 4;
        }

        return degree;
    }

    const isCrit = (die) => {
        if (die === 20) {
            return 1;
        } else if (die === 1) {
            return -1;
        } else {
            return 0;
        }
    }

    let findDegree = (degree) => {
        let success = 0
        switch (degree) {
            case 1:
                console.log("Critical Fail!");
                break;
            case 2:
                console.log("Fail!  Roll again...");
                break;
            case 3:
                console.log("Success!");
                success++
                break;
            case 4:
                console.log("Critical Success!");
                success += 2
                break;
        }
    }

    //Continuously roll 'til conditions met
    while (critfailed === false && successes < successesNeeded) {
        let r = getRoll();
        attempts++

        let rollTotal = r.total
        let dieRoll = r.results[0]
        console.log("The Roll is: ", r.result, "=", r.total)

        let degree = evalRoll(rollTotal, dcNum);
        let critMod = isCrit(dieRoll);

        let finalDegree = degree + critMod;

        if (finalDegree == 1) {
            critfailed = true;
        }

        let successes = critMod(finalDegree) + successes;


        console.log("successes:", successes)
        console.log("total attempts: ", attempts)
    } //end while loop
};

pickAttempt();