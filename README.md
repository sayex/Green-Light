# GREENLIGHT

<p align="center">
<img align="center" src="/assets/img/GREENLIGHT.gif" width="100%"/>
</p>

## SPOTIFY AND BANDSINTOWN API
This app utilizes the Spotify and Bandsintown API to allow users to search for music, bandsintown, tour dates, and turn your computer into remote speakers for Spotify.
Please note that the Spotify API only provides 30 second audio snippets. It may be possible to get the full track by using the [Web Playback SDK](https://beta.developer.spotify.com/documentation/web-playback-sdk/).

## GOALS
* To minimize user effort by combining a streaming platform with an easy way to find/access music and tour dates of your favorite artists. , & song lyrics (in the future).
* To streamline the process of accessing albums, songs, and tour dates of/for/to your favorite artists all in one place. (We plan to add song lyrics in the future)

## DESIGN PROCESS
* Our process was to first create an aesthetically pleasing front end and then apply bits of the back end functionality to it little by little.
* We first started with displaying an artist's picture. We then displayed the artist's albums as well as the option to receive track information. 
* We also included Bandsintown so that the user can see when and where the artist is touring next and purchase tickets if desired.
* Finally, we added play functionality so that the user can hear a 30 second snippet of their favorite songs. 
* If the user likes the song, they can click on the album cover and be redirected to Spotify where they're able to listen to the full song, add the song to a playlist, or download the song for offline listening. 

## TECHNOLOGY USED
* Node.js
* Sass
* Popper.js

## APIs
* Spotify
* Bandsintown

## YOUR GREENLIGHT ACCESS
Click here for your [GREENLIGHT](https://bootcampgreenlight.herokuapp.com) access.

<p align="center">
<img align="center" src="/assets/img/GREENLIGHT.PNG" width="100%"/>
</p>

## THE SDKs STRUCTURE

The Spotify SDK consists of two libraries.
One of them handles authentication flow and the other one manages audio playback.
The libraries work well together but can also be used separately, for example if
the application doesn't need to play music it can use just Spotify Authentication module by itself.

SPOTIFY AUTHENTICATION LIBRARY
------------------------------

This library is responsible for authenticating the user and fetching the access token
that can subsequently be used to play music or be used in requests to the Spotify Web API.

SPOTIFY PLAYER LIBRARY
----------------------

This library can play music from Spotify after the user logs in with the access token.
**Only Spotify account users will be able to log in and play music with this library.**

## CREDITS

 - [ChereeNielson](https://github.com/ChereeNielson): Team Lead – [front end design and team coding](https://github.com/sayex/Project1/tree/chereehtml)
 - [EricSayer](https://github.com/sayex): QA – [APIs, back end design, and team coding](https://github.com/sayex/Project1/tree/ericbranch)
 - [StanBakalov](https://github.com/sunnybakalov): Presentation Specialist – [APIs, back end design, and team coding](https://github.com/sayex/Project1/tree/stansBranch)