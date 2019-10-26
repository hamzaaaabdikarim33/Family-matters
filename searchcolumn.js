

$("#select-player").on("click", function() {




 
    var queryURL = "https://api.fantasy.nfl.com/v1/players/stats?statType" 
 
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

        console.log(response);
        
        var statsDiv = $("<div class='playerName'>");

        var position = response.players.position;
        var pOne = $("<p>").text("Position: " + position);

        statsDiv.append(pOne);

        var team = response.plays.teamAbbr;
        var pTwo = $("<p>").text("Team Abbr: " + team);

        statsDiv.append(pTwo);

        var seasonProjected = response.seasonProjectedPts;
        var pThree = $("<p>").text("Projected Points This Season: " + seasonProjected);

        statsDiv.append(pThree);

        var weekProjected = response.weekProjectedPts;
        var pFour = $("<p>").text("Projected Points This Week: " + weekProjected);

        statsDiv.append(pFour);

        $("#stats-view").prepend(statsDiv);

    });
})





