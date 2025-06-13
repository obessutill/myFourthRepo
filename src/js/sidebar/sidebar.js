const sidebarCallButton = document.querySelector('.header-button--burger')
const sidebarCloseButton = document.querySelector('.sidebar__header-icon--back')

const header = document.querySelector('.header')
const main = document.querySelector('.main')

const sidebar = document.querySelector('.sidebar')

sidebarCallButton.addEventListener('click', function (e) {
  e.stopPropagation()
  sidebar.classList.add('sidebar--open')
  header.classList.add('blur')
  main.classList.add('blur')
})

sidebarCloseButton.addEventListener('click', function () {
  sidebar.classList.remove('sidebar--open')
  header.classList.remove('blur')
  main.classList.remove('blur')
})

document.querySelector(".blur-wrapper").addEventListener('click', (event) => {
  sidebar.classList.remove('sidebar--open')
  header.classList.remove('blur')
  main.classList.remove('blur')
})
