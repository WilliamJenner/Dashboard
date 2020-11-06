"use strict";
const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");
function createWindow() {
    module.exports.MainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    });
    module.exports.MainWindow.loadURL(`https://localhost:44370/`);
    module.exports.MainWindow.on("closed", () => {
        module.exports.MainWindow = null;
    });
}
app.on("ready", createWindow);
app.on("certificate-error", (event, webContents, url, error, certificate, callback) => {
    event.preventDefault();
    callback(true);
});
app.allowRendererProcessReuse = true;
