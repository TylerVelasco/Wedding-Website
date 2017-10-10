// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBD4zNk0CdrgxH1ZyeIyp2MgpQrndMY0rU',
    authDomain: 'supriseapp.firebaseapp.com',
    databaseURL: 'https://supriseapp.firebaseio.com',
    projectId: 'supriseapp',
    storageBucket: '',
    messagingSenderId: '1034588822220'
  }
};
