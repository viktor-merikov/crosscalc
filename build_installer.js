const { MSICreator } = require('electron-wix-msi');
const path = require('path');
const APP_DIR = path.resolve(__dirname, './cross-calc-angular-win32-x64');
const OUT_DIR = path.resolve(__dirname, './win_installer');
const msiCreator = new MSICreator({
   appDirectory: APP_DIR,
   outputDirectory: OUT_DIR,
   description: 'Crossout crafting calculator',
   name: 'Crossout calculator App',
   manufacturer: 'Shuman87',
   version: '0.0.1',
   ui: {
      chooseDirectory: true
   }
});

msiCreator.create().then(() => {
   msiCreator.compile();
})