
function spotifySearch(userSearch){
   
// var access_token4 = "";
// if (window.location.href.match(/\#(?:access_token)\=([\S\s]*?)\&/) !== null) {
//     access_token4 = window.location.href.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1]
// };

var authHeader = "Bearer " + access_token3;
console.log(authHeader);

console.log(access_token4);
  // "https://api.spotify.com/v1/search?q=Muse&type=track%2Cartist&market=US&limit=10&offset=5"

    var spotifyUrl = "https://api.spotify.com/v1/search?q=";
    userSearch;
    var lastPartOfUrl = "&type=artist&market=US&limit=9&offset=0"


    $.ajax({
        url: spotifyUrl + userSearch + lastPartOfUrl,
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": authHeader
        }
    }).then(function(response) {
      var results = response.artists.items;
      var artistId = results[0].id;
      var searchAlbumUrl = "https://api.spotify.com/v1/artists/" + artistId + "/albums?limit=9&include_groups=album"

      $.ajax({
        url: searchAlbumUrl,
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
         "Authorization": authHeader
        }
    }).then(function(responseArtist) {
        var resultsArtist = responseArtist.items

        console.log(responseArtist);
        
        
        for (var i = 0; i < resultsArtist.length; i++) {  
        
          var resultsAlbumUrl = resultsArtist[i].images[1].url;
          var resultsAlbum = resultsArtist[i].external_urls.spotify;
          var albumName = resultsArtist[i].name;
          var albumYear = resultsArtist[i].release_date;

           var newImg= `<div class=col-md-4 col-sm-6>
            <div class=portfolio-item>
                <a href=${resultsAlbum} ><div class=thumb>
                    <div class=hover-effect>
                        <div class=hover-content>
                            <h1>${albumName}</h1>
                            <p>Date released: ${albumYear}</p>
                        </div>
                    </div>
                    <div class=image>
                        <img src=${resultsAlbumUrl}>
                    </div>
                </div></a>
            </div>
        </div>`

          $("#main-container").prepend(newImg);
        }
        
    })
  })
}

