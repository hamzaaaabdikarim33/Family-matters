$(window).load(function(event) {
    var queryURL = "https://api.fantasy.nfl.com/v1/players/stats?statType=weekProjectedStats&season=2019&currentWeek&position=DEF&format=json";
    console.log(queryURL);
    var input: tampa bay
    $.ajax({
        url: queryURL,
        type: "GET",
    }).then(function(response) {
        console.log(response);
        $("#projection").html("<h1>" + response.players[name: "input"].name + "</h1>");
        console.log(response.players[0].name);
    });
});