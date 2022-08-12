console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form Submitted');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);


function rubberDuckAlert(){
	alert('You have nice eyes')
}

let imgAlert = document.querySelector('#rubberDuck')
imgAlert.addEventListener('mouseover', rubberDuckAlert)
