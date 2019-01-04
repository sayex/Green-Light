function spotifySearch(userSearch) {


    var authHeader = "Bearer " + access_token3;
    var spotifyUrl = "https://api.spotify.com/v1/search?q=";
    var lastPartOfUrl = "&type=artist&market=US&limit=9&offset=0"


    $.ajax({
        url: spotifyUrl + userSearch + lastPartOfUrl,
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": authHeader
        }
    }).then(function (response) {

        if (response.artists.items.length > 0) {
            albumsearch(response, authHeader)
        } else $("#search").val("invalid results")

    })
}


//search returned artist for albums

function albumsearch(response, authHeader) {
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
    }).then(function (responseArtist) {
        albumCreate(responseArtist);

    })
}

//function to great portofilo images from ajax call
function albumCreate(responseArtist) {
    var albumCount = 1
    $("#main-container").empty();
    resultsArtist = responseArtist.items


    for (var i = 0; i < resultsArtist.length; i++) {
        var albumId = resultsArtist[i].id;
        var resultsAlbumUrl = resultsArtist[i].images[1].url;
        var resultsAlbum = resultsArtist[i].external_urls.spotify;
        var albumName = resultsArtist[i].name;
        trackSearch(albumId, albumCount, resultsAlbum);
        var newImg = `<div class=col-md-4 col-sm-6>
    <div class=portfolio-item>
        <a href=${resultsAlbum} target=_blank><div class=thumb>
        <div class=image>
            <img src=${resultsAlbumUrl}>
        </div>
            <div class=hover-effect>
                <div class=hover-content>
                    <h1>${albumName}</h1></a>
                    <p id=clickInfo${albumCount}>click track to listen to sample audio</p>
                    <div class=tracks id=album${albumCount}>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`
        albumCount++
        $("#main-container").append(newImg);
    }
}

// function to track search and append porfolio image
function trackSearch(albumId, albumCount, resultsAlbum) {
    var trackCounter = 1
    var authHeader = "Bearer " + access_token3;
    var searchAlbumUrl = "https://api.spotify.com/v1/albums/" + albumId + "/tracks";

    $.ajax({
        url: searchAlbumUrl,
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": authHeader
        }
    }).then(function (responseTracks) {

        var resultsTracks = responseTracks.items
        for (var i = 0; i < resultsTracks.length; i++) {
            var trackName = resultsTracks[i].name;
            var trackSample = resultsTracks[i].preview_url;
            var p = $("<p>");
            p.addClass("theSong");
            p.text(trackCounter + ": " + trackName);
            p.attr("data-sampleUrl", trackSample);
            p.attr("data-albumUrl", resultsAlbum)
            trackCounter++
            $("#album" + albumCount).append(p)
            if (trackSample === null) {
                $("#clickInfo" + albumCount).text("Click track to listen on Spotify")
            }
        }

    })
    $(".tracks").hide()
}
// listener for track click for sample song playback
$(document).on("click", ".theSong", function () {
    $("#player").empty();
    if ($(this).attr("data-sampleUrl") != null) {
        var sampleUrl = $(this).attr("data-sampleUrl");
        var theActualPlayer = `<audio controls autoplay>
        <source id=player 
        src=${sampleUrl} 
        type=audio/mp3>
        </audio>`

        $("#player").append(theActualPlayer);
    } else {
        var spotifyURL = $(this).attr("data-albumUrl")
        window.open(spotifyURL, '_blank');
    }
})