let app = {
  loadPage,
  setTitle,
}

function loadPage(page='index') {
  location.assign(`${page}.html`);  
}

function setTitle() {
  let title = "Commands Generator"
  let titlevar = document.getElementsByTagName('title').item(0);
  if(titlevar.getAttribute('data') == 'tellraw') {
    title = `${title} | Tellraw Generator`
  }
  else if(titlevar.getAttribute('data') == 'summon') {
    title = `${title} | Summon Generator`
  }
  titlevar.innerHTML = title;
}