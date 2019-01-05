# GREENLIGHT

<!-- ![alt text](http://url/to/img/GREENLIGHT.png) -->
![image](https://cloud.githubusercontent.com/assets/img/GREENLIGHT.png)

## Spotify and Bandsintown
This app utilizes the Spotify and Bandsintown API to allow users to search for music, search for bandsintown and tour dates, 

## YOUR GREENLIGHT ACCESS
Your GreenLight access is bootcampgreenlight.herokuapp.com 

## The SDKs Structure

The Spotify SDK consists of two libraries.
One of them handles authentication flow and the other one manages audio playback.
The libraries work well together but can also be used separately, for example if
the application doesn't need to play music it can use just Spotify Authentication module by itself.

Spotify Authentication Library
------------------------------

This library is responsible for authenticating the user and fetching the access token
that can subsequently be used to play music or be used in requests to the Spotify Web API.

You can find the Android Auth SDK [here](https://github.com/spotify/android-auth/).

To learn more about working with authentication see the
[Authentication Guide](https://beta.developer.spotify.com/documentation/android-sdk/guides/android-authentication/)
and the [API reference](https://spotify.github.io/android-auth) on Spotify for Developers.

Spotify Player Library
----------------------

This library can play music from Spotify after the user logs in with the access token.
**Only Premium Spotify users will be able to log in and play music with this library.**.

## Local Host

If you wish to run the code locally run the following:

```
visit http://localhost:8888
```

Please note that the Spotify API only provides 30 second audio snippets. It may be possible to get the full track by using the [Web Playback SDK](https://beta.developer.spotify.com/documentation/web-playback-sdk/).

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).