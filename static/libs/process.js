
window.onload = function() {
	const addNav = document.querySelector('script[nav]');
	let header = document.querySelector('header');
	let footer = document.querySelector('footer');
  	
	let prev = addNav.getAttribute('prev');
	let next = addNav.getAttribute('next');
	let links = `<a href= '/Revivavl/${prev}'>Prev</a>`
		+ `<a href= '/Revivavl/1/1'>First</a>`
		+ `<a href= '/Revivavl/${next}'>Next</a>`
	let nav = `<center> ${links} </center>`;
	
	header.innerHTML += nav;
	footer.innerHTML = nav + footer.innerHTML;

};