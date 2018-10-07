const {remote} = require('electron');
const {Menu, MenuItem, dialog} = remote;
const fs = require('fs');
const ini = require('ini')

function importFile () {

 dialog.showOpenDialog({ filters: [

   { name: 'data', extensions: ['tellraw', 'command_block', 'mc'] }

  ]}, function(fileNames) {

  if (typeof fileNames === "undefined") return;

  var fileName = fileNames[0];
  if(fileName.endsWith('.command_block')) {
    let inidata = ini.decode(fs.readFileSync(fileName).toString())
    document.getElementById('color').value=inidata.color;
    document.getElementById('text').value=inidata.text;
    document.getElementById('bold').checked=inidata.bold;
    document.getElementById('underlined').checked=inidata.underlined;
    document.getElementById('strikethrough').checked=inidata.strikethrough;
    document.getElementById('obfuscated').checked=inidata.obfuscated;
    if(inidata.selector == '@a') {
      document.getElementById('@a').setAttribute('selected', '')
    }
    if(inidata.selector == '@p') {
      document.getElementById('@p').setAttribute('selected', '')
    }
    if(inidata.selector == '@r') {
      document.getElementById('@r').setAttribute('selected', '')
    }
    if(data.selector == '@s') {
      document.getElementById('@s').setAttribute('selected', '')
    }
    updatecmd();
  }
  fs.readFile(fileName, 'utf-8', (err, data) => {
    if(err) throw err;

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

 }); 

}

function exportFile () {

    dialog.showSaveDialog({ filters: [

        { name: 'json format', extensions: ['mc', 'tellraw'] },
        { name: 'ini format', extensions: ['command_block'] }
  
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
  
      fs.writeFile(fileName, JSON.stringify(exportObj, null, 2), function (err) {   
  
      });
  
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