let numDoors = new Array(100).fill(false)
function getFinalOpenedDoors(numDoors) {
  for (let m = 1; m <= 100; m++) {
    for (let i = m - 1; i < 100; i += m) {
      numDoors[i] = !numDoors[i];
    }
  }
  let openDoors = [];
  for (let i = 0; i < 100; i++) {
    if (numDoors[i]) {
      openDoors.push(i + 1);
    }
  }

  return openDoors;
}

console.log(getFinalOpenedDoors(numDoors));