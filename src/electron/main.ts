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

  //   if (process.env.NODE_ENV === "dev") {
  //     module.exports.MainWindow.loadURL(`https://localhost:44370/`);
  //   } else {
  //     module.exports.MainWindow.loadURL(
  //       url.format({
  //         pathname: path.join(__dirname, ""),
  //         protocol: "file:",
  //         slashes: true,
  //       })
  //     );
  //   }

  module.exports.MainWindow.loadURL(`https://localhost:44370/`);
  module.exports.MainWindow.on("closed", () => {
    module.exports.MainWindow = null;
  });
}

app.on("ready", createWindow);
app.on(
  "certificate-error",
  (
    event: { preventDefault: () => void },
    webContents: any,
    url: any,
    error: any,
    certificate: any,
    callback: (arg0: boolean) => void
  ) => {
    // On certificate error we disable default behaviour (stop loading the page)
    // and we then say "it is all fine - true" to the callback
    event.preventDefault();
    callback(true);
  }
);
app.allowRendererProcessReuse = true;
