
window.onload = function() {
	const addNav = document.querySelector('script[nav]');
	let header = document.querySelector('header');
	let footer = document.querySelector('footer');
  	
	let prev = addNav.getAttribute('prev');
	let next = addNav.getAttribute('next');
	let nav = "<center> {0}{1}{2} </center>"
		.format(
			"<a href= '/Revivavl/${prev}'>Prev</a>",
			"<a href= '/Revivavl/1/1'>First</a>",
			"<a href= '/Revivavl/${next}'>Next</a>",
		);
	
	header.innerHTML += nav;
	footer.innerHTML = nav + footer.innerHTML;
};