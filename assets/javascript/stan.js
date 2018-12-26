function spotifySearch(userSearch) {

    // var access_token4 = "";
    // if (window.location.href.match(/\#(?:access_token)\=([\S\s]*?)\&/) !== null) {
    //     access_token4 = window.location.href.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1]
    // };

    var authHeader = "Bearer " + access_token3;
    console.log(authHeader);

    console.log(access_token3);
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
    }).then(function (response) {

        var results = response.artists.items;
        var artistId = results[0].id;
        var searchAlbumUrl = "https://api.spotify.com/v1/artists/" + artistId + "/albums?limit=9&include_groups=album"
        var albumCount = 1

        $.ajax({
            url: searchAlbumUrl,
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": authHeader
            }
        }).done(function (responseArtist) {
            $("#main-container").empty();
            var resultsArtist = responseArtist.items
            console.log(responseArtist);


            for (var i = 0; i < resultsArtist.length; i++) {
                var albumId = resultsArtist[i].id;
                console.log(albumId);
                trackSearch(albumId, albumCount);
                var resultsAlbumUrl = resultsArtist[i].images[1].url;
                var resultsAlbum = resultsArtist[i].external_urls.spotify;
                var albumName = resultsArtist[i].name;

                var newImg = `<div class=col-md-4 col-sm-6>
            <div class=portfolio-item>
                <a href=${resultsAlbum} target=_blank><div class=thumb>
                <div class=image>
                <img src=${resultsAlbumUrl}>
                </div></a>
                    <div class=hover-effect>
                        <div class=hover-content>
                            <h1>Album: ${albumName}</h1>
                            <p>click to listen to sample audio</p>
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

        })
    })
}


//track search
function trackSearch(albumId, albumCount) {
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
    }).done(function (responseTracks) {

        var resultsTracks = responseTracks.items
        // console.log(resultsTracks)
        for (var i = 0; i < resultsTracks.length; i++) {
            var trackName = resultsTracks[i].name;
            var trackSample = resultsTracks[i].preview_url;
            // var audio = $("<audio>");
            // audio.attr("controls", "");
            // var source = $("<source>");
            // source.attr("src", trackSample);
            // source.attr("type", "audio/mp3");
            // audio.append(source);
            var p = $("<p>");
            p.addClass("theSong");
            p.text(trackCounter + ": " + trackName);
            // p.append(audio);
            p.attr("data-sampleUrl", trackSample);
            trackCounter++
            $("#album" + albumCount).append(p)
            // $(".theSong").hide();
            console.log(trackSample);
        }

    })
    $(".tracks").hide()
}

$(document).on("click", ".theSong", function () {
    $("#player").empty();
    var sampleUrl = $(this).attr("data-sampleUrl");
    // $("#player").attr("src", sampleUrl);
    var theActualPlayer = `<audio controls>
    <source id=player 
    src=${sampleUrl} 
    type=audio/mp3>
    </audio>`
    $("#player").append(theActualPlayer);
})

// $("h1").mouseenter($(".theSong").show()).mouseleave($(".theSong").hide());

// function hideTracks() {
//     $(".theSong").hide();
// }

// function showTracks () {
//     $(".theSong").show();
// }