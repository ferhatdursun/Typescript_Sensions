enum silNotification {
    Success,

    Error,

    Warning,

    Information
}


function silSendNotification(notificationType: silNotification) {

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

silSendNotification(silNotification.Success)