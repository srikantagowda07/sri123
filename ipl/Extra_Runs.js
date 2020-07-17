function Extra_Runs(deliveries, matches) {
  var result = {};
  var match = matches;
  for (var del of deliveries) {
    var bowling_team = del.bowling_team;
    var num = del.match_id * 1;
    const season = finding_year(match);
    function finding_year(matches) {
      for (let match of matches) {
        var id = match.id;
        if (num == id) {
          return match.season;
        }
      }
    }
    if (season == 2015) {
      if (result[bowling_team]) {
        result[bowling_team] += (del.extra_runs * 1);
      } else {
        result[bowling_team] = (del.extra_runs * 1);
      }
    }
  }
  return result;
}
module.exports = Extra_Runs;
