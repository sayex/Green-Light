$(document).ready(function() {

    var userSearch;
    var spotifyUrl = "https://api.spotify.com/v1/search";
    var clientId = "11a98f02ba9a423a9dfbd30766f55d62";
    var clientSecret = "0dd068ede3e9462caa99fc30db16bb07";

    $.ajax({
        url: spotifyUrl,
        method: "GET"
    }).then(function(response) {
        console.log(response);

        var results = response.data;
    })
}); 
