/**
 * Handle commands 
 */
function handler() {
  const cmd = document.getElementById('cmd').value;
  if(cmd == 'summon') {
    handleSummon()
  }
  else if(cmd == 'tellraw') {
    handleTellraw()
  }
  else if(cmd == 'give') {
    handleGive()
  }
}
/**
 * 
 * @param {Object} options
 * @param {String} options.entity
 * @param {String|null} options.coordinates
 * @param {Object} options.nbtTags
 */
function handleSummon(options) {

}
/**
 * 
 * @param {Object} options
 * @param {String} options.entity
 * @param {String|null} options.coordinates
 * @param {Object} options.nbtTags
 */
function handleTellraw(options) {

}
/**
 * 
 * @param {Object} options
 * @param {String} options.entity
 * @param {String|null} options.coordinates
 * @param {Object} options.nbtTags
 */
function handleGive(options) {

}