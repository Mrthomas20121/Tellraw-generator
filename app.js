const {app, dialog, BrowserWindow, Tray, Menu} = require('electron');
const fs = require('fs');
const path = require('path');
const url = require('url');

require('electron-context-menu')({
	prepend: (params, browserWindow) => []
});

let mainWindow;
app.on('ready', function() {
  
  mainWindow = new BrowserWindow({
    name: 'Main windows',
    width: 920,
    height: 720,
    icon: path.join(__dirname,'assets/icons/app_logo.png')
  });
	
  app.on('window-all-closed', function() {
        app.quit();
  });
  app.on('closed', function() {
        app.quit();
  });

  app.on('open-file', function (event, file) {
      var content = fs.readFileSync(file).toString();
      mainWindow.webContents.send('file-opened', file, content);
  });

  //mainWindow.setMenu(null);
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'assets/tellraw.html'),
    protocol: 'file:',
    slashes: true
  }));
});
