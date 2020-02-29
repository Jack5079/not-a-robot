const $ = document.querySelector.bind(document)
const img = document.getElementById('form')
$('#recaptcha-anchor').addEventListener('click', () => {
  img.style.display = 'block'
  img.animate([
    { opacity: 0 },
    { opacity: 1 }
  ], {
    duration: 1000,
    fill: 'forwards',
    easing: 'ease-out'
  })
  const ele = $('iframe')
  ele.style.display = 'none'
  ele.style.display = 'block'
  ele.animate([
    { opacity: 0, height: '0' },
    { opacity: 1, height: '30em' }
  ], {
    duration: 1000,
    fill: 'forwards',
    easing: 'ease-out'
  })
})
