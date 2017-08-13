import firebase = require("nativescript-plugin-firebase");
firebase.init({
  persist: false,
  onAuthStateChanged: (data: any) => {
    // optional but useful to immediately re-logon the user when he re-visits your app
  }
}).then(
  (instance) => {
    console.log("firebase.init done");
  },
  (error) => {
    console.log("firebase.init error: " + error);
  }
  );

// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";

platformNativeScriptDynamic().bootstrapModule(AppModule);
