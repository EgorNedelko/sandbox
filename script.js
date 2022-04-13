// ________DROPDOWNS_______________________________________________
const dropBtn = document.querySelector('.drop-btn')
const dropContent = document.querySelector('.dropdown-content')
const links = document.querySelectorAll('.dropdown-content a')
const selectedLink = document.querySelector('.selected-link')

dropBtn.addEventListener('click', () => {
   dropContent.classList.contains('active') ? dropContent.classList.remove('active') : dropContent.classList.add('active')
})

links.forEach(link => {
   link.addEventListener('click', () => {
      selectedLink.textContent = link.textContent
      dropContent.classList.remove('active')
   })
})

// ________CLICKABLE INPUT_______________________________________________
// const nameElem = document.getElementById('nameElem')
// const inputElem = document.getElementById('entity-name')

// nameElem.addEventListener('click', () => {
//    if (inputElem.getAttribute('type') == 'hidden') {
//       nameElem.style.display = 'none'
//       inputElem.setAttribute('type', 'text')
//    }
// })

// window.addEventListener('click', (e) => {
//    if (e.target.classList.contains('input-container') && inputElem.getAttribute('type') == 'text') {
//       nameElem.textContent = inputElem.value
//       nameElem.style.display = 'block'
//       inputElem.setAttribute('type', 'hidden')
//    }
// })