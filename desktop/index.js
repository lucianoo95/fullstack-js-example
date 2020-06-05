// Importar paquetes de Electron: BrowserWindow crea la ventana de una app de escritorio.
const { app, BrowserWindow } = require('electron');

let appWindow;
// Ventana principal
const createWindow = (params) => {

  // Crear ventana
  appWindow = new BrowserWindow({
    width: 950,
    height: 750,
    minWidth: 700,
    minHeight: 700,
    center: true,
    show: false,
    icon: 'icon.png'
  });

  // Cuando se cierra la app
  appWindow.on('closed', () => {
    appWindow = null
  });

  // Cargar HTML
  appWindow.loadFile('./index.html');

  // Cuando la app este lista , mostrar la ventana
  appWindow.once('ready-to-show', () => {
    appWindow.show()
  });

}

app.on('ready', createWindow);
