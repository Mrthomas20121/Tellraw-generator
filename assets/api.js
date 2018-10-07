/**
 * Api:updatecmd
 */
let updatecmd = () => {
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
  cmd = `tellraw ${selector} [${JSON.stringify(cmdParam)}]`;
  result.value = cmd;
}