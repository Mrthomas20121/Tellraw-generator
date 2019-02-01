const {remote} = require('electron');
const {Menu, MenuItem, dialog} = remote;
const fs = require('fs');

function importFile () {

 dialog.showOpenDialog({ filters: [

   { name: 'tellraw files', extensions: ['tellraw', 'command_block', 'mc', 'json'] }
  
  ]}, function(fileNames) {

  if (typeof fileNames === "undefined") return;

  var fileName = fileNames[0];
  let data = fs.readFileSync(fileName, { encoding: 'utf-8'}) 
  // console.log(data);
  data = JSON.parse(data);
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
  updatecmd();

 }); 

}

function exportFile () {

    dialog.showSaveDialog({ filters: [

        { name: 'json format', extensions: ['tellraw', 'command_block', 'mc', 'json'] },
        { name: 'any', extensions: ['*']}
  
      ]}, (fileName) => {
        
      if (typeof fileName === "undefined") return;
        
      let color = document.getElementById('color').value;
      let text = document.getElementById('text').value;
      let bold = document.getElementById('bold').checked;
      let underlined = document.getElementById('underlined').checked;
      let strikethrough = document.getElementById('strikethrough').checked;
      let obfuscated = document.getElementById('obfuscated').checked;
      let selector = document.getElementById('selector').value;
      let exportObj = {
        text : text,
        color : color,
        bold : bold,
        underlined : underlined,
        strikethrough : strikethrough,
        obfuscated : obfuscated,
        selector
      };
      
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