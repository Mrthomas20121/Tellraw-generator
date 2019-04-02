/**
 * Handle summon command
 */
function summon() {

}
/**
 * handle Tellraw Command
 */
function tellraw() {
  let result = document.getElementById("cmd");
  let color = document.getElementById('color').value;
  let text = document.getElementById('text').value;
  let selector = document.getElementById('selector').value;
  let bold = document.getElementById('bold').checked;
  let underlined = document.getElementById('underlined').checked;
  let strikethrough = document.getElementById('strikethrough').checked;
  let obfuscated = document.getElementById('obfuscated').checked;
  let cmdParam = {
    "text" : text,
    "color" : color,
    "bold" : bold,
    "underlined" : underlined,
    "strikethrough" : strikethrough,
    "obfuscated" : obfuscated,
  };
  let res = [
    cmdParam
  ]
  if(!bold) {
	delete cmdParam.bold;
  };
  if(!underlined) {
	delete cmdParam.underlined;
  };
  if(!strikethrough) {
	delete cmdParam.strikethrough;
  };
  if(!obfuscated) {
	delete cmdParam.obfuscated;
  }
  if(res.length == 1)   cmd = `tellraw ${selector} ${JSON.stringify(cmdParam)}`;
  else cmd = `tellraw ${selector} ${JSON.stringify(res)}`;
  result.value = cmd;
  var preview = document.getElementById('preview')
  if(color == 'red') {
    preview.style.color = '#FF5555'
  }
  else if(color == 'dark_red') {
    preview.style.color = '#AA0000'
  }
  else if(color == 'dark_blue') {
    preview.style.color = '#0000AA'
  }
  else if(color == 'blue') {
    preview.style.color = '#5555FF'
  }
  else if(color == 'aqua') {
    preview.style.color = '#55FFFF'
  }
  else if(color == 'dark_aqua') {
    preview.style.color = '#00AAAA'
  }
  else if(color == 'green') {
    preview.style.color = '#55FF55'
  }
  else if(color == 'dark_green') {
    preview.style.color = '#00AA00'
  }
  else if(color == 'yellow') {
    preview.style.color = '#FFFF55'
  }
  else if(color == 'gold') {
    preview.style.color = '#FFAA00'
  }
  else if(color == 'rose') {
    preview.style.color = '#FFAA00'
  }

  if(typeof cmdParam.text == 'string') {
    preview.innerHTML = cmdParam.text
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
  
}