
//minor curse(1)
// roll a d4 to determine day's ancestor
// if 1 ancestor = anMartial
// if 2 ancestor = anSkill
// if 3 ancestor = anCast
// if 4 select ancestor to use

//moderate curse (2)):
// 1: Martial - +1 atk rolls; +2 dmg
// 2: Skill - +1 to perception and skill checks
// 3: Cast - non-cantrip spells w/o a duration gain dmg/heal bonus equal to spell's level

//major curse(3):
// Martial - +1 atk rolls; +6 dmg
// Skill - +2 to perception and skill checks
// Cast - non-cantrip spells w/o a duration gain dmg/heal bonus equal to spell's level + 3


//TODO
// save state: to journal?  to gameDB? -- entity.update({"some.path.as.string": value})
//----------------------------------------------------------------------------------------------------

let dailyAncestor = 0; // rolled at beginning of each day; this is default when not in encounter
let encounterAncestor = 0; // determined at end of each turn during encounter
let curseLevel = 0; //increments when focus points used; decrements when 10min refocus
let inEncounter = false;



const anMartial = (curseLevel) => {
//set roll mod?
//set dmg mod?
//change interface
}

const anSkill = (curseLevel) => {
// mod perception and skill checks?
//change interface
}

//BUTTON: revert to daily ancestor
const endEncounter = () => {
    return encounterAncestor = 0;
}


//DROPDOWN: select ancestor when a 4 is rolled
const selectAncestor = (inEncounter, userSelect) => {
    if (inEncounter === true) {
        encounterAncestor = userSelect
    } else {
        dailyAncestor = userSelect
    }
    return
}