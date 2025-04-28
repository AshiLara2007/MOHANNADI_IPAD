function sayHello() {
    Telegram.WebApp.showAlert('Hello from Mini App!');
}

// Expand Mini App automatically
Telegram.WebApp.ready();
Telegram.WebApp.expand();
