window.addEventListener('load', function () {
  const header = document.querySelector('.header')
  
  window.addEventListener('scroll', function () {
    if (this.scrollY > 80) {
      header.classList.add('shrinking')
    } else {
      header.classList.remove('shrinking')
    }
  })
})
