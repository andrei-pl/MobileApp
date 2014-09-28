(function () {

    window.everlive = new Everlive("sz0Zz1ZApYIzWbTh");
   
    document.addEventListener("deviceready", function () {
        navigator.splashscreen.hide();
        
        window.app = new kendo.mobile.Application(document.body, {
            skin: "flat",
            layout: "login-layout",
            initial: "#login-view"
        });
    });

    document.addEventListener("offline", onOffline, false);

    function onOffline() {
        navigator.notification.alert("Our app needs to have THE NET!!!");
        navigator.notification.vibrate(200);
    }

    document.addEventListener("online", onOnfline, false);

    function onOnfline() {
        navigator.notification.beep(1);
    }


}());