
let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg')
dogContent.append(dogImage)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
dogContent.append(dogDetails)

let headerThree = document.createElement('h3')
headerThree.textContent = 'Description:'
dogDetails.append(headerThree)

let pTag = document.createElement('p')
pTag.textContent = 'This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals'

dogDetails.append(pTag)

let ulTag = document.createElement('ul')

let times = ['9am', '12pm', '5pm', '9pm']

for(let i = 0; i < times.length; i++){
    let liTag = document.createElement('li')
    liTag.textContent = times[i]
    ulTag.append(liTag)
}
dogDetails.append(ulTag)

let button = document.createElement('button')
button.textContent = 'change color'
button.style.color = 'red'
button.style.fontSize = '3em'
button.style.fontFamily = 'Ariel'
button.style.borderRadius = '10px'
button.style.border = '5px solid red'
dogDetails.append(button)

button.addEventListener("click", function(e){
    let currentColor = e.target.style.color
    if(currentColor === 'red'){
  content.style.color = 'red'
  e.target.style.color = 'black'} 
  else {
  content.style.color = 'black'
  e.target.style.color = 'red' }
})
