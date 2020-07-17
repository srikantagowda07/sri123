const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const Extra_Runs = require("./ipl/Extra_Runs");
const winningTeamPerVenue = require("./ipl/winningTeamPerVenue");
const economicalBowler = require("./ipl/economicalBowler");
const mostManOfTheMatches = require("./ipl/mostManOfTheMatches");
const Match_Winners = require("./ipl/Match_Winners");
const mostWins = require("./ipl/mostWins");
const Toss_MatchWinners = require("./ipl/Toss_MatchWinners");
const man_of_The_Match = require("./ipl/man_of_The_Match");
const strike_Rate = require("./ipl/strike_Rate");
const best_Econ_Superover = require("./ipl/best_Econ_Superover");
const dismissed =  require("./ipl/dismissed");

const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data.json";
const JSON_OUTPUT_FILE_PATH2 = "./public/data2.json";
var finalResult = {};
var finalResult2 = {};
function main() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      csv()
        .fromFile(DELIVERIES_FILE_PATH)
        .then(deliveries => {
          let result2 = Extra_Runs(deliveries);
          finalResult['Extra_Runs'] = result2;

          let resulteconomicalBowler = economicalBowler(deliveries,matches);
          finalResult['economicalBowler'] = resulteconomicalBowler;

          let resultsToss_MatchWinners = Toss_MatchWinners(matches);
          finalResult2['Toss_MatchWinners'] = resultsToss_MatchWinners;

          let resultPlayedPerYear = matchesPlayedPerYear(matches);
          finalResult['matchesPlayedPerYear'] = resultPlayedPerYear;

          let resultPerVenue = winningTeamPerVenue(matches);
          finalResult['winningTeamPerVenue'] = resultPerVenue;

          let resultmostManOfTheMatches = mostManOfTheMatches(matches);
          finalResult['mostManOfTheMatches'] = resultmostManOfTheMatches;

          let resultMatch_Winners = Match_Winners(matches);
          finalResult['Match_Winners'] = resultMatch_Winners;

          let resultmostWins = mostWins(matches);
          finalResult['mostWins'] = resultmostWins;

          let reslultman_of_The_Match = man_of_The_Match(matches);
          finalResult2['man_of_The_Match'] = reslultman_of_The_Match;
         
          
          let resultstrike_Rate = strike_Rate(deliveries,matches);
          finalResult2['strike_Rate'] = resultstrike_Rate;

          let resultbest_Econ_Superover = best_Econ_Superover(deliveries);
          finalResult2['best_Econ_Superover'] = resultbest_Econ_Superover;

          let resultsdismissed = dismissed(deliveries);
          finalResult2['dismissed'] = resultsdismissed;
          console.log(resultstrike_Rate);

          const jsonString2 = JSON.stringify(finalResult2);

          const jsonString = JSON.stringify(finalResult);

          fs.writeFile(JSON_OUTPUT_FILE_PATH2, jsonString2, "utf8", err => {
            if (err) {
              console.error(err)
            }
          });
          fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
            if (err) {
              console.error(err)
            }
          });
        })
    })
}
main();