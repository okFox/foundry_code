// My idea probably involves a large rewrite but was to establish the degrees;
// IF Total < DC-10 is Crit Fail; Return 1
// IF DC-10 < Total < DC - Fail; Return 2
// IF DC < Total < DC+10 - Success; Return 3
// IF Total > DC+10 - crit success; Return 4

// Then checks for die.
// On DIE = 20; Return (x)+1 (Max. 4, so it ca'nt become 5)
// On DIE = 1; Return (x)-1 (min.1 so it can't become 0)

// Evaluate,b
// Final Return: 
// 1 = crit fail -- Plus one attempt, Return attempts and stop rolling
// 2 = Fail -- Plus one attempt, continue to roll
// 3 = Success -- Plus one attempt, one success
// 4 = Crit success -- Plus one attempt, two sucesses