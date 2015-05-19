var input = document.querySelector('input');
var button = document.querySelector('button');

button.addEventListener("click", function(e) {
	e.preventDefault();
	var nextItem = document.createElement('li');
	var ul = document.querySelector('ul');
	nextItem.innerHTML = input.value;
	ul.appendChild(nextItem);
	input.innerHTML = "";
});


// What am I doing wrong here? 
var doneItem = document.querySelectorAll('li');
doneItem.setAttribute('class', "completed");

/*doneItem = addEventListener("click", function() {
	.setAttribute('class', "completed");
});*/