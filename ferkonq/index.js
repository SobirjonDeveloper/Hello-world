const body = document.querySelector('body')
const sphere = document.createElement('div')
const loadingtext = document.createElement('div')

sphere.appendChild(loadingtext)
loadingtext.className = 'loadtext'
loadingtext.textContent = 'LOADING...'
body.appendChild(sphere)

var w = 0
while (w <= 10) {
  const border = document.createElement('div')
  sphere.className = 'sphere'
  border.className = 'border'
  sphere.appendChild(border)
  w++
}
var border = document.querySelectorAll('.border')
for (var x = 0; x < border.length; x++) {
  plus = x * 0.01

  border[x].setAttribute('style', 'animation-delay:' + plus + 's;  ')
}https://github.com/SobirjonDeveloper