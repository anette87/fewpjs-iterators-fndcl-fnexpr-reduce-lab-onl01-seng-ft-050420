const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries = batteryBatches.reduce(function(total, battery){ return battery+= total}, 0);

// * Create a new variable called `totalBatteries` which is the sum of all of the
// battery amounts in the `batteryBatches` array. Naturally, use `reduce()` for this!
