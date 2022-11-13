//! enum´in Notificationdan farki enumlar 1 den baslayarak kendiliginden numaralandirir. Default olarak artarak ilerler.
//! enumlari istersen  = 1 veya "Ferhat" gibi tanimlamalar yapabiliriz. ama stringden sonra ilk geleni rakamla tanimlamamiz gerekiyor.
// enum Notification {
//     Success = "Ferhat",

//     Error = 1,

//     Warning,

//     Information
// }

//! Symboller daha güvenilirlerdir. Ama enumlar gibi iki farkli(hem tarayici hem server) yerde kullanilamiyor.
const Notification = {
  Success: Symbol(),

  Error: Symbol(),

  Information: Symbol(),

  Warning: Symbol(),
};

// const Notification = {

//     Success:0,

//     Error: 1,

//     Warning: 2,

//     Information: 3
// };

// function sendNotification(notificationType: symbol){
function sendNotification(notificationType: keyof typeof Notification) {
  // function sendNotification(notificationType: Notification) {
  const selectedNotification = Notification[notificationType];

  switch (selectedNotification) {
    //    switch(notificationType) {
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

sendNotification("Error");
