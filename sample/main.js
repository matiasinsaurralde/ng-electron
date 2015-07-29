var app = require( 'app' ),
    ipc = require( 'ipc' ),
    BrowserWindow = require( 'browser-window' );

var mainWindow = null;

app.on( 'window-all-closed', function() {
  app.quit();
});

app.on( 'ready', function() {
  mainWindow = new BrowserWindow( { width: 800, height: 800 } );
  mainWindow.loadUrl( 'file://' + __dirname + '/index.html' );
  mainWindow.openDevTools();
  mainWindow.on( 'closed', function() {
    mainWindow = null;
  });

  setInterval( function() {
    mainWindow.webContents.send( 'message', { a: 123 } );
  }, 1500 );
});
