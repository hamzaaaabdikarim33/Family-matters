$(document).ready(function(event) {
    var queryURL = "https://api.fantasy.nfl.com/v1/players/stats?statType=weekProjectedStats&season=2019&currentWeek&position=DEF&format=json";
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        type: "GET",
    }).then(function(response) {
        console.log(response);
        var topScore = 0;
        var playerIndex;
        for (var i = 0; i < response.players.length; i++) {
            if (response.players[i].weekProjectedPts > topScore) {
                topScore = response.players[i].weekProjectedPts
                playerIndex = i;
            }
        }
        console.log(response.players[playerIndex].name);
        // $("#projection").html(response.players[0].name + "<br>" + "Position: " + response.players[0].position + "<br>" + "Projected weekly points: " + response.players[0].weekProjectedPts + "<br>" + "Projected season points: " + response.players[0].seasonProjectedPts);
        // console.log(response.players[0].name);
    });
});