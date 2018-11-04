'use strict';
const { app, BrowserWindow } = require('electron');

let mainWindow = null;

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 500,
		height: 500,
		// frame: false
	})
	mainWindow.loadURL('file://'+ __dirname +'/index.html')
	mainWindow.on('closed', ()=>{
		mainWindow = null;
	})
}

app.on('ready', createWindow)

app.on('window-all-closed', ()=>{
	if(process.platform != 'darwin'){
		app.quit();
	}
})