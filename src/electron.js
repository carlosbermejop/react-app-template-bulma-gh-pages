const {app, BrowserWindow} = require('electron');
const path = require("path");
const url = require('url');
const isDev = require("electron-is-dev");

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 1024,
    title: "React App Template TypeScript Bulma",
    show: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.maximize();
  mainWindow.show();

  if (isDev) {
    mainWindow.loadURL("http://localhost:3000");
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, "./build/index.html"),
      protocol: "file",
      slashes: true
    }));
  }


  mainWindow.on("closed", () => {
    mainWindow = null;
  });

  mainWindow.on("page-title-updated", (e) => {
    e.preventDefault();
  });
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
