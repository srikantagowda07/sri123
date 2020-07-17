function dismissed(deliveries) {
    const results = {};

    for (let del of deliveries) {
        const batsman = del.player_dismissed;
        var bowler = del.bowler;
        if (results[batsman]) {
            if (results[batsman][bowler]) {
                results[batsman][bowler] += 1;
            } else {
                results[batsman][bowler] = 1
            }
        } else {
            results[batsman] = {}
        }
    }
    return results;;
}
module.exports = dismissed;