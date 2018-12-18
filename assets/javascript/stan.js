$(document).ready(function() {
  // "https://api.spotify.com/v1/search?q=Muse&type=track%2Cartist&market=US&limit=10&offset=5"

    var spotifyUrl = "https://api.spotify.com/v1/search?q=";
    var userSearch = "madonna";
    var lastPartOfUrl = "&type=artist&market=US&limit=10&offset=0"


    $.ajax({
        url: spotifyUrl + userSearch + lastPartOfUrl,
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": "Bearer BQBydjda8-JamU-7pzYHZ1xHwepu_QgH9b1xH-tGPFbdjXcClps4mSj7L2ESZJqcvL3MdZ-TBwdMdAu7OO9rHtB_MvIsYmsEpE4XbGn0WcLghkY6cTITnht0-rMMlD2MEDY5AYqef_gdF_NEJfgB5EyNeafu0TLzwYV3ebtxLfTJJT_UwSIXxQgvePs"
        }
    }).then(function(response) {

        console.log(response);

        var results = response.artists.items;

        for (var i = 0; i < results.length; i++) {  
          console.log(results[i])
        
        if (results[i].images.length > 0) {
          var albumImage = $("<img class='album'>");
          albumImage.attr("src", results[i].images[1].url);
          $(".album").append(albumImage);
        } else {
          var errorImage = $("<img class='errorImage'>");
          errorImage.attr("src", "assets/images/error.jpg");
          $(".album").append(errorImage);
        }
        }
    })
}); 
