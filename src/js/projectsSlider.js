//Raw js :,c
const projectsComponents = document.getElementsByClassName('project-component')

function handleProjectClick(i) {
  const text = projectsComponents[i].querySelector('.text')
  if (text.style.right == '-100%' || !text.style.right) {
    text.style.right = '0%'
  } else {
    text.style.right = ''
  }
}
