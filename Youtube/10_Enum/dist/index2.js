"use strict";
var silNotification;
(function (silNotification) {
    silNotification[silNotification["Success"] = 0] = "Success";
    silNotification[silNotification["Error"] = 1] = "Error";
    silNotification[silNotification["Warning"] = 2] = "Warning";
    silNotification[silNotification["Information"] = 3] = "Information";
})(silNotification || (silNotification = {}));
function silSendNotification(notificationType) {
    switch (notificationType) {
        case silNotification.Success: {
            console.log("Basarili");
            break;
        }
        case silNotification.Error: {
            console.error("Hata");
            break;
        }
        case silNotification.Information: {
            console.log("Bilgi");
            break;
        }
        case silNotification.Warning: {
            console.warn("Uyari");
            break;
        }
    }
}
silSendNotification(silNotification.Success);
