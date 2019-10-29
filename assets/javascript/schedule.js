apiKey = "272d68e4-cc86-4387-8a1e-35c762";
queryURL = "https://api.mysportsfeeds.com/v2.1/pull/nfl/2019-regular/week/8/games.json";
var proxy = "https://chriscastle.com/proxy/index.php?:proxy:";
console.log("TEST");

$.ajax({
    type: "GET",
    url: queryURL,
    dataType: 'json',
    headers: {
        "Authorization": "Basic " + btoa("272d68e4-cc86-4387-8a1e-35c762" + ":" + "MYSPORTSFEEDS")
      },
    timeout: 2000,
      success: function(response, textStatus) {
          console.log(response);
        console.log("SUCCESS")

        for (i = 0; i < response.games.length; i++) {
            $(".start").prepend("<h3>" + response.games[i].schedule.startTime + "</h3>");
            $(".away-team").prepend("<p>" + response.games[i].schedule.awayTeam.abbreviation + "</p>");
        }
        
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) {
       console.log(XMLHttpRequest, textStatus, errorThrown)
      }
    });