$(document).ready(function () {

    //function to use popovers
    $(function () {
        $('[data-toggle="popover"]').popover({
            container: 'body'
        });
    })


    //function to create popouttext in popover

    function popoutButton(response) {
        var popoverText = ""
        for (var i = 0; i < response.length; i++) {
            var offersUrl;
            if (response[i].offers.length !== 0) {
                for (j = 0; j < response[i].offers.length; j++) {
                    offersUrl = response[i].offers[j].url;
                }
            } else {
                offersUrl = "no offers";
            }
            var lineup = response[i].lineup[0];
            var venue = response[i].venue;
            var dateOfPerformance = moment(response[i].datetime, "YYYY-MM-DD").format("MM/DD/YYYY")
            var venueRegion = venue.region;
            var venueCity = venue.city;
            var venueName = venue.name;

            popoverText = popoverText + `<div id="popoverText"><ul><li>${dateOfPerformance}</li><li><b> State:</b> ${venueRegion} <b>City:</b> ${venueCity} <b>Venue:</b> ${venueName}</li><li><a href="${offersUrl}" target= "_blank">Tickets</a></li></ul></div>`;

        }

        $("#bandPopover").text(lineup);
        $("#bandPopover").attr("data-content", popoverText);
    }

    // ajax call to get bands in town info

    function searchBandsInTown(artist) {

        var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=project1UT13543&date=upcoming"

        $.ajax({
                url: queryURL,
                method: "GET"
            })
            .then(function (response) {

                popoutButton(response);

            });
    }

    searchBandsInTown("Chain Smokers");

    //function to intergrate musixmatch at a later date
    // function musixmatch() {

    //     var apikey = "45b31d2fda49ed69056977618911c164";
    //     var trackSearch = "track.search?"
    //     var searchBy = "q_track="
    //     var trackSearchName = "ten%20feet%20tall"
    //     var queryURL = "https://api.musixmatch.com/ws/1.1/" + trackSearch + searchBy + trackSearchName + "&apikey=" + apikey

    //     console.log(queryURL);
    // }
    // musixmatch()


})