// Helper to get hash from end of URL or generate a random one.
export function ensureExampleRef() {
  // @ts-ignore
  var ref = firebase.database().ref();
  var hash = window.location.hash.replace(/#/g, "");
  if (hash) {
    ref = ref.child(hash);
  } else {
    throw new Error("hash expected");
  }
  if (typeof console !== "undefined") {
    console.log("Firebase data: ", ref.toString());
  }
  return ref;
}

export function newExampleRef() {
  // @ts-ignore
  var ref = firebase.database().ref();
  ref = ref.push(); // generate unique location.
  // @ts-ignore
  window.location = window.location + "#" + ref.key; // add it as a hash to the URL.
  if (typeof console !== "undefined") {
    console.log("Firebase data: ", ref.toString());
  }
  return ref;
}

export function initFireBase() {
  //// Initialize Firebase.
  //// TODO: replace with your Firebase project configuration.
  var config = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
  };
  try {
    // @ts-ignore
    firebase.initializeApp(config);
  } catch (err) {
    console.error(err);
  }
}
