
let colorButton = document.querySelector('#color')
let placeButton = document.querySelector('#place')
let ritualButton = document.querySelector('#ritual')


function favColor() {
    alert('My favorite color is Aqua-Green')
}

function favPlace() {
    alert('My favorite place is: in a hot tub')
}

function myRitual() {
    alert('My favorite ritual: sit down on the couch with my dogs, open a can of coke, watch some YouTube, and play some videogames')
}

colorButton.addEventListener('click', favColor)
placeButton.addEventListener('click', favPlace)
ritualButton.addEventListener('click', myRitual)
