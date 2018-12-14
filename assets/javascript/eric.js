$(document).ready(function () {


    function searchBandsInTown(artist) {


        var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=project1UT13543"


        $.ajax({
                url: queryURL,
                method: "GET"
            })
            .then(function (response) {
                console.log(response)

                for (var i = 0; i < response.length; i++) {

                    for (var j = 0; j < response[i].offers.length; j++) {
                        if (response[i].offers[j].length = 0) {
                            var offersUrl = "No offer Website"
                        }
                        offersUrl = response[i].offers[j].url;
                        // console.log(offersUrl)

                    }

                    var venue = response[i].venue
                    var dateOfPerformance = response[i].datetime;
                    var venueRegion = venue.region
                    var venueCity = venue.city;
                    var venueName = venue.name;
                    console.log(dateOfPerformance)
                    console.log(venueRegion, venueCity, venueName);
                    console.log(offersUrl)
                    console.log("---------------------------------")
                }
            });
    }

    searchBandsInTown("Chain Smokers")

})