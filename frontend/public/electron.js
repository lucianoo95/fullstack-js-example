const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

let appWindow;

const createWindow = () => {

  appWindow = new BrowserWindow({
    width: 950,
    height: 750,
    minWidth: 700,
    minHeight: 700,
    center: true,
    show: false
  });

  appWindow.loadURL(
    isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`
  )

  // Cuando se cierra la app
  appWindow.on('closed', () => {
    appWindow = null;
  });

  // Cuando la app este lista , mostrar la ventana
  appWindow.once('ready-to-show', () => {
    appWindow.show();
  });

}

app.on('ready', createWindow);

