export function initTheme(containerId = 'container-tema', popoverId = 'tema') {
  let containerTema = document.getElementById(containerId),
  savedTheme = localStorage.getItem('selected-theme')
  if (savedTheme) {document.documentElement.setAttribute('data-theme', savedTheme)}
  if (!containerTema) return

  containerTema.onclick=o=> {
    let btn = o.target.closest('[pilihTema]')
    if (btn) {
        document.documentElement.setAttribute('data-theme', btn.value)
        localStorage.setItem('selected-theme', btn.value)
        document.getElementById(popoverId)?.hidePopover()
    }
}
}