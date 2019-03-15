## TODO: List of @Ionic

#### \*Not quite sure about @ionic-native firebase at the mo!

## Install Firebase ()

```
$ npm i firebase @angular/fire
```

## For Ionic Native Google Login

#### \*Check to see if still the same for cordova plugin! For ios ensure reverse client id variable is set!

```
$ npm i @types/googlemaps
$ npm i @ionic-native googleplus
$ ionic cordova plugin add cordova-google-plus \--variable REVERSE_CLIENT_ID=yourReverseClientID
```

## Install Ionic Native Firebase ()

```
$ ionic cordova plugin add cordova-plugin-firebase-config
$ npm install @ionic-native/firebase-config
```

# @ionic-native/google-maps

## In order to use this plugin, you need to generate API keys at the Google Developers Console. Please follow the instruction.

- [How to generate API keys?](https://github.com/ionic-team/ionic-native-google-maps/blob/master/documents/api_key/generate_api_key.md)

```
$ ionic cordova plugin add cordova-plugin-googlemaps \
  --variable API_KEY_FOR_ANDROID="(API_KEY_FOR_ANDROID)" \
  --variable API_KEY_FOR_IOS="(API_KEY_FOR_IOS)"

$ npm install --save @ionic-native/core@latest @ionic-native/google-maps@latest
```

"dependencies": {
"@ionic-native/core": "^5.2.0",
"@ionic-native/firebase": "^5.2.0",
"@ionic-native/geolocation": "^5.2.0",
"@ionic-native/google-maps": "^5.0.0-beta.27",
"@ionic-native/in-app-browser": "5.0.0-beta.15",
"@ionic-native/native-storage": "^5.2.0",
"@ionic-native/splash-screen": "^5.2.0",
"@ionic-native/sqlite": "^5.2.0",
"@ionic-native/status-bar": "^5.2.0",
"@ionic/angular": "^4.0.2",
"@ionic/lab": "^1.0.21",
"@ionic/storage": "^2.2.0",

"cordova-browser": "5.0.4",
"cordova-plugin-device": "^2.0.2",
"cordova-plugin-firebase": "2.0.5",
"cordova-plugin-geolocation": "4.0.1",
"cordova-plugin-inappbrowser": "^3.0.0",
"cordova-plugin-ionic-keyboard": "^2.1.3",
"cordova-plugin-ionic-webview": "^3.1.2",
"cordova-plugin-nativestorage": "2.3.2",
"cordova-plugin-secure-storage": "3.0.1",
"cordova-plugin-splashscreen": "^5.0.2",
"cordova-plugin-statusbar": "^2.4.2",
"cordova-plugin-whitelist": "^1.3.3",
"cordova-sqlite-storage": "3.0.0",
}

#### This is to prevent the "... but cordova is not available"

// io.ionic.starter

```
$ ionic cordova platform add browser
$ ionic cordova build browser
$ ionic build
```

#### Add geolocation plugin

```
$ ionic cordova plugin add cordova-plugin-geolocation
$ npm install @ionic-native/geolocation
```

#### Add google api key

##### First Add

```
$ ionic cordova plugin add goolge-maps????
ionic install @ionic-native/google-maps
```

##### Having acquired a google api key, add the line below to index.html w/ key as shown.

```
<!-- <script
            async
            defer
            src="https://maps.google.com/maps/api/js?key=AIzaSyChPETFNPMST3W32d5GsouuBjmqjCvAaJU"
        ></script> -->

```

The async defer will prevent the map loading untill all components are ready().

// constructor(private aSC: ActionSheetController) {}

    // async actionSheet() {
    //     const actionSheet = await this.aSC.create({
    //         header: 'Action Sheet',
    //         mode: 'ios',
    //         buttons: [
    //             {
    //                 text: 'Cancel',
    //                 role: 'cancel',
    //                 icon: '',
    //                 handler: () => {
    //                     log('Click me to cancel, Dude!');
    //                 },
    //             },
    //             {
    //                 text: 'Add',
    //                 role: 'destructive',
    //                 icon: '',
    //                 handler: () => {
    //                     log('Add me Dude!');
    //                 },
    //             },
    //             {
    //                 text: 'Edit',
    //                 role: 'destructive',
    //                 icon: '',
    //                 handler: () => {
    //                     log('Edit me Dude!');
    //                 },
    //             },
    //             {
    //                 text: 'Delete',
    //                 role: 'destructive',
    //                 icon: 'trash',
    //                 handler: () => {
    //                     log('Delete me Dude!');
    //                 },
    //             },
    //         ],
    //     });
    //     await actionSheet.present();
    // }
