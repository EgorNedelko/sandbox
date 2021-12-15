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