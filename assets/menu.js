const {remote} = require('electron');
const {Menu, MenuItem, dialog} = remote;
const fs = require('fs');

function importFile () {

 dialog.showOpenDialog({ filters: [

   { name: 'commands files', extensions: ['tellraw', 'give', 'summon','command', 'mc', 'json'] }
  
  ]}, function(fileNames) {

  if (typeof fileNames === "undefined") return;

  var fileName = fileNames[0];
  let data = fs.readFileSync(fileName, { encoding: 'utf-8'}) 
  data = JSON.parse(data);
  if(process.mainModule.filename.includes('summon') || data.hasOwnProperty('type')) {
    if(data.type == 'summon') {
      document.getElementById('entity').value = data.entity;
      document.getElementById('customName').value = data.customName;
      summon()
    }
  }
  else if(process.mainModule.filename.includes('tellraw') || data.hasOwnProperty('text')) {
    document.getElementById('color').value=data.color;
    document.getElementById('text').value=data.text.replace('@p','');
    document.getElementById('bold').checked=data.bold;
    document.getElementById('underlined').checked=data.underlined;
    document.getElementById('strikethrough').checked=data.strikethrough;
    document.getElementById('obfuscated').checked=data.obfuscated;
    if(data.selector == '@a') {
      document.getElementById('@a').setAttribute('selected', '')
    }
    if(data.selector == '@p') {
      document.getElementById('@p').setAttribute('selected', '')
    }
    if(data.selector == '@r') {
      document.getElementById('@r').setAttribute('selected', '')
    }
    if(data.selector == '@s') {
      document.getElementById('@s').setAttribute('selected', '')
    }
    tellraw();
  }

 }); 

}

function exportFile () {

    dialog.showSaveDialog({ filters: [

        { name: 'json format', extensions: ['tellraw', 'give', 'summon','command', 'mc', 'json'] },
        { name: 'any', extensions: ['*']}
  
      ]}, (fileName) => {
        
      if (typeof fileName === "undefined") return;

      let exportObj;
      if(process.mainModule.filename.includes('summon')) {
        let entity = document.getElementById('entity').value;
        let customName = document.getElementById('customName').value;
        exportObj = {
          type:'summon',
          entity,
          customName
        };
        if(customName == '') {
          delete cmd.customName
        }
      }
      else if(process.mainModule.filename.includes('tellraw')) {
        let color = document.getElementById('color').value;
        let text = document.getElementById('text').value;
        let bold = document.getElementById('bold').checked;
        let underlined = document.getElementById('underlined').checked;
        let strikethrough = document.getElementById('strikethrough').checked;
        let obfuscated = document.getElementById('obfuscated').checked;
        let selector = document.getElementById('selector').value;
        exportObj = {
          text : text,
          color : color,
          bold : bold,
          underlined : underlined,
          strikethrough : strikethrough,
          obfuscated : obfuscated,
          selector
        };
      }
      
      fs.writeFileSync(fileName, JSON.stringify(exportObj, null, 2));
  
    });

}

const menu = new Menu();

var files = new MenuItem ({
  label: 'Files',
  submenu:[
    {
      label: 'Import',
      accelerator : 'ctrl+i',
      click () { importFile() }
    },
    {
      label: 'Export',
      accelerator : 'ctrl+e',
      click () { exportFile() }
    }
  ]
});
menu.append(files);
remote.getCurrentWindow().setMenu(menu);