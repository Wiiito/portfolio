const lis = document.querySelector('.dropDown').querySelectorAll('li')
for (i = 0; i < lis.length; i++) {
  const element = lis[i]
  element.style.setProperty(
    '--skillAfterBackColor',
    element.getAttribute('data-color')
  )
  element.style.setProperty(
    '--skillKnowledge',
    element.getAttribute('data-knowledge')
  )
}
