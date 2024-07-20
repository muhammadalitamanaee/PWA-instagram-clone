// we have a keywork call scope in service worker methodology and it means which files its get effected by this service worker
// we want to make sure that service worker in present in the page .and we register that here that every page can use that , beacude app.js in every html file is in script tag
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then(() => {
    console.log("service worker registered");
  });
}
// register returns promise
//we can specify the scope of the service worker with seconds argument of register methode
//register can get a second argument too
