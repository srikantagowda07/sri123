function best_Econ_Superover(deliveries) {
  const runsScored = {};
  const Over = {};
  const results = {};
  for (let del of deliveries) {
    let superOver = del.is_super_over;
    let Bowler_Name = del.bowler;
    let Runs = del.total_runs;
    if (superOver == 1) {
      if (runsScored[Bowler_Name]) {
        runsScored[Bowler_Name] += (Runs * 1);
      } else {
        runsScored[Bowler_Name] = (Runs * 1);
      }
      if (Over[Bowler_Name]) {
        Over[Bowler_Name] += 1;
      } else {
        Over[Bowler_Name] = 1;
      }
    }
  }
  for (var ele in Over) {
    results[ele] = runsScored[ele] / (Over[ele] / 6);
  }
  var sortable = [];
  for (var ele in results) {
    sortable.push([ele, results[ele]]);
  }
  sortable.sort(function (a, b) {
    return a[1] - b[1];
  });
  const solution = {};
  solution[sortable[0][0]] = sortable[0][1];
  return solution;
}
module.exports = best_Econ_Superover;

