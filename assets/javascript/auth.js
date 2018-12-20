var access_token3 = "";
if (window.location.href.match(/\#(?:access_token)\=([\S\s]*?)\&/) !== null) {
    access_token3 = window.location.href.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1]
};
console.log(access_token3)

// var paramaters = getHashParams()
// var access_token4 = paramaters.access_token;

window.onSpotifyWebPlaybackSDKReady = () => {
    const token = access_token3
    const player = new Spotify.Player({
        name: 'Web Playback SDK Quick Start Player',
        getOAuthToken: cb => {
            cb(token);
        }
    });

    // Error handling
    player.addListener('initialization_error', ({
        message
    }) => {
        console.error(message);
    });
    player.addListener('authentication_error', ({
        message
    }) => {
        console.error(message);
    });
    player.addListener('account_error', ({
        message
    }) => {
        console.error(message);
    });
    player.addListener('playback_error', ({
        message
    }) => {
        console.error(message);
    });

    // Playback status updates
    player.addListener('player_state_changed', state => {
        console.log(state);
    });

    // Ready
    player.addListener('ready', ({
        device_id
    }) => {
        console.log('Ready with Device ID', device_id);
    });

    // Not Ready
    player.addListener('not_ready', ({
        device_id
    }) => {
        console.log('Device ID has gone offline', device_id);
    });

    // Connect to the player!
    player.connect();
};

// (function () {

//     /**
//      * Obtains parameters from the hash of the URL
//      * @return Object
//      */
//     function getHashParams() {
//         var hashParams = {};
//         var e, r = /([^&;=]+)=?([^&;]*)/g,
//             q = window.location.hash.substring(1);
//         while (e = r.exec(q)) {
//             hashParams[e[1]] = decodeURIComponent(e[2]);
//         }
//         return hashParams;
//     }

//     // var userProfileSource = document.getElementById('user-profile-template').innerHTML,
//     //     userProfileTemplate = Handlebars.compile(userProfileSource),
//     //     userProfilePlaceholder = document.getElementById('user-profile');

//     // var oauthSource = document.getElementById('oauth-template').innerHTML,
//     //     oauthTemplate = Handlebars.compile(oauthSource),
//     //     oauthPlaceholder = document.getElementById('oauth');

//     var params = getHashParams();

//     var access_token = params.access_token,
//         refresh_token = params.refresh_token,
//         error = params.error;

//     if (error) {
//         alert('There was an error during the authentication');
//     } else {
//         if (access_token) {
//             //  render oauth info

//             // oauthPlaceholder.innerHTML = oauthTemplate({
//             //     access_token: access_token,
//             //     refresh_token: refresh_token
//             // });

//             $.ajax({
//                 url: 'https://api.spotify.com/v1/me',
//                 headers: {
//                     'Authorization': 'Bearer ' + access_token
//                 },
//                 success: function (response) {
//                     // userProfilePlaceholder.innerHTML = userProfileTemplate(response);

//                     $('#login').hide();
//                     $('#loggedin').show();
//                 }
//             });
//         } else {
//             // render initial screen
//             $('#login').show();
//             $('#loggedin').hide();
//         }

//         // document.getElementById('obtain-new-token').addEventListener('click', function () {
//         //     $.ajax({
//         //         url: '/refresh_token',
//         //         data: {
//         //             'refresh_token': refresh_token
//         //         }
//         //     }).done(function (data) {
//         //         access_token = data.access_token;
//         //         access_token2 = data.access_token;
//         //         oauthPlaceholder.innerHTML = oauthTemplate({
//         //             access_token: access_token,
//         //             refresh_token: refresh_token
//         //         });
//         //     });
//         // }, false);
//     }
// })();