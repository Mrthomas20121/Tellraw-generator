/**
 * Simplify a string obj into
 */
JSON.jsonToString = function(obj='') {
  return JSON.stringify(JSON.parse(obj))
}
/**
 * Handle summon command
 */
function summon() {
  let result = document.getElementById('cmd');
  let entity = document.getElementById('entity').value;
  let customName = document.getElementById('customName').value;
  // let cmd = {
  //   customName:{
  //    text:customName
  //   }
  // }
  const Summon = require('./scripts/classes').Summon;
  let cmd = new Summon().setEntity(entity).setNbt({ customName:{ text:customName } });
  if(customName == '') {
    delete cmd.customName;
  }
  window["summon_cmd"] = cmd;
  result.innerHTML = `/summon ${cmd.entity} ~ ~ ~ ${JSON.stringify(cmd.nbt)}`
}
/**
 * handle Tellraw Command
 */
function tellraw() {
  let result = document.getElementById('cmd');
  let color = document.getElementById('color').value;
  let text = document.getElementById('text').value;
  let selector = document.getElementById('selector').value;
  let bold = document.getElementById('bold').checked;
  let underlined = document.getElementById('underlined').checked;
  let strikethrough = document.getElementById('strikethrough').checked;
  let obfuscated = document.getElementById('obfuscated').checked;
  let cmd = {
    "text" : text,
    "color" : color,
    "bold" : bold,
    "underlined" : underlined,
    "strikethrough" : strikethrough,
    "obfuscated" : obfuscated,
  };
  let res = [
    cmd
  ]
  if(!bold) {
	delete cmd.bold;
  };
  if(!underlined) {
	delete cmd.underlined;
  };
  if(!strikethrough) {
	delete cmd.strikethrough;
  };
  if(!obfuscated) {
	delete cmd.obfuscated;
  }
  if(res.length == 1)   cmd = `tellraw ${selector} ${JSON.stringify(cmd)}`;
  else cmd = `tellraw ${selector} ${JSON.stringify(res)}`;
  result.value = cmd;
  let preview = document.getElementById('preview');

  let colors = require('./scripts/colors.json');
  for (const item of colors) {
    if(item.color == color) {
      preview.style.color = item.hex;
      // console.log(preview.style.color)
    }
  }

  if(typeof text != 'undefined') {
    preview.innerHTML = `<p style="border: 2px solid #000">${text}</p>`
  }
  if(bold) {
    preview.style.fontWeight = 'bold'
  }
  else {
    preview.style.fontWeight = 'normal'
  }
  if(underlined) {
    preview.style.textDecoration = 'underline'
  }
  else {
    preview.style.textDecoration = 'none'
  }
}
/**
 * Handle Give Command
 */
function give() {
  // syntax: /give @user item count nbt
}