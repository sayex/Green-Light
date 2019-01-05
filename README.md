# GREENLIGHT

<p align="center">
<img align="center" src="/assets/img/GreatDay.png" width="100%"/>
</p>
<!-- ![alt text](http://url/to/img/GREENLIGHT.png) -->
<!-- ![image](https://cloud.githubusercontent.com/assets/img/GREENLIGHT.png) -->

## SPOTIFY AND BANDSINTOWN API
This app utilizes the Spotify and Bandsintown API to allow users to search for music, bandsintown, tour dates, and turn your computer into remote speakers for Spotify.
Please note that the Spotify API only provides 30 second audio snippets. It may be possible to get the full track by using the [Web Playback SDK](https://beta.developer.spotify.com/documentation/web-playback-sdk/).

## YOUR GREENLIGHT ACCESS
Click here for your [GREENLIGHT](https://github.com/bootcampgreenlight.herokuapp.com) access.

## THE SDKs STRUCTURE

The Spotify SDK consists of two libraries.
One of them handles authentication flow and the other one manages audio playback.
The libraries work well together but can also be used separately, for example if
the application doesn't need to play music it can use just Spotify Authentication module by itself.

Spotify Authentication Library
------------------------------

This library is responsible for authenticating the user and fetching the access token
that can subsequently be used to play music or be used in requests to the Spotify Web API.

Spotify Player Library
----------------------

This library can play music from Spotify after the user logs in with the access token.
**Only Premium Spotify users will be able to log in and play music with this library.**.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).