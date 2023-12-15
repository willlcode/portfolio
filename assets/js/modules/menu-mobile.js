import outsideClick from './outsideclick.js'

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]')
  const menuList = document.querySelector('[data-menu="list"]')
  const menuBg = document.querySelector('[data-menu="bg"]')

  function openMenu(event) {
    menuButton.classList.add('active')
    menuList.classList.add('active')
    menuBg.classList.add('active')
    outsideClick(menuList, ['click', 'touchstart'], () => {
      menuButton.classList.remove('active')
      menuList.classList.remove('active')
      menuBg.classList.remove('active')
    })
  }

  menuButton.addEventListener('click', openMenu)
}

