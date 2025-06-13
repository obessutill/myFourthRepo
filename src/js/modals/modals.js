const header = document.querySelector('.header')
const main = document.querySelector('.main')
const footer = document.querySelector('.footer')
const sidebar = document.querySelector('.sidebar')

function setListeners(buttonsList, closeButton, className) {
  const modal = document.querySelector('.' + className)

  function openModal() {
    function setOpened() {
      sidebar.classList.remove('sidebar--open')
      modal.classList.add(className + '--open')
      header.classList.add('blur')
      main.classList.add('blur')
      sidebar.classList.add('blur')
      footer.classList.add('blur')
    }

    function setVisible() {
      modal.classList.add(className + '--visible')

      setTimeout(setOpened, 10)
    }

    setVisible()
  }

  for (let i = 0; i < buttonsList.length; i++) {
    buttonsList[i].addEventListener('click', (e) => {
      e.stopPropagation()
      openModal()
    })
  }

  function closeModal() {
    function removeVisible() {
      modal.classList.remove(className + '--visible')

    }
    function removeOpened() {
      modal.classList.remove(className + '--open')
      header.classList.remove('blur')
      main.classList.remove('blur')
      sidebar.classList.remove('blur')
      footer.classList.remove('blur')
      setTimeout(removeVisible, 1000)
    }


    removeOpened()
  }

  closeButton.addEventListener('click', closeModal)

  document.querySelector('.blur-wrapper').addEventListener('click', closeModal)
}
const chatButtons = document.querySelectorAll('.chat-icon')
const closeButton = document.querySelector('.modal-chat__close-button')

setListeners(chatButtons, closeButton, 'modal-chat')

const callButtons = document.querySelectorAll('.call-icon')
const callButton = document.querySelector('.modal-call__close-button')

setListeners(callButtons, callButton, 'modal-call')
