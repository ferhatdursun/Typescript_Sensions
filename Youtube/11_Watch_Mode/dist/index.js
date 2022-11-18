"use strict";
//! Symboller daha güvenilirlerdir. Ama enumlar gibi iki farkli(hem tarayici hem server) yerde kullanilamiyor.
const Notification = {
    Success: Symbol(),
    Error: Symbol(),
    Information: Symbol(),
    Warning: Symbol(),
};
function sendNotification(notificationType) {
    const selectedNotification = Notification[notificationType];
    switch (selectedNotification) {
        case Notification.Success: {
            console.log("Basarili");
            break;
        }
        case Notification.Error: {
            console.error("Hata");
            break;
        }
        case Notification.Information: {
            console.info("Bilgi");
            break;
        }
        case Notification.Warning: {
            console.warn("Uyari");
            break;
        }
    }
}
Notification.Success.valueOf(); //! Bu sekilde enumlarin Type´ni da alabiliriz.
sendNotification("Information");
sendNotification("Error");
sendNotification("Error");
sendNotification("Warning");
