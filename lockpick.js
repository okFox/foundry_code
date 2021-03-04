
const pickAttempt = () => {
    const dcNum = document.getElementById("dc").value;
    let thieveryProf = token.actor.getRollData().skills.thi.totalModifier;
    let attempts = 0;
    const successesNeeded = document.getElementById("successes").value;
    let successes = 0;
    let finalDegree;
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
            ui.notifications.error("Macro Error!");
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
                //console.log("Critical Fail!");
                break;
            case 2:
                //console.log("Fail!  Roll again...");
                break;
            case 3:
                //console.log("Success!");
                success++
                break;
            case 4:
                //console.log("Critical Success!");
                success += 2
                break;
        }
        return success;
    }

    //Continuously roll 'til conditions met
    while (critFailed === false && successes < successesNeeded) {
        let r = getRoll();
        attempts++

        let rollTotal = r.total
        let dieRoll = r.results[0]
        //console.log("The Roll is: ", r.result, "=", r.total)

        let degree = evalRoll(rollTotal, dcNum);
        let critMod = isCrit(dieRoll);

        finalDegree = degree + critMod;

        if (finalDegree == 1) {
            critFailed = true; //breaks while loop
        }
        
        let newSuccesses = findDegree(finalDegree);

        successes =  newSuccesses + successes;
    }


    let message;

    if (finalDegree == 1) {
        message = `Critical fail in ${attempts} attempts.  This took ${attempts * 6} seconds.`
    } else {
        message = `Success in ${attempts} attempts!  This took ${attempts * 6} seconds.`
    }
    
    ui.notifications.info(message)

};

pickAttempt();