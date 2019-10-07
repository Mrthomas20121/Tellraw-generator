function Attribute() {
  let elements = document.querySelectorAll('button')
  for (const element of elements) {
    element.addEventListener('click', (events) => {
      let attrib = element.getAttribute('exec')
      if(attrib != '') {
        location.assign(`javascript:${attrib}`)
      }
    })
  }
}