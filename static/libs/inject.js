
window.onload = function() {
	const addNav = document.querySelector('script[nav]');
	let header = document.querySelector('header'); // or any target element
	let footer = document.querySelector('footer'); // or any target element
  	
	let prev = addNav.getAttribute('prev');
	let next = addNav.getAttribute('next');
	let nav = "<center> {0}{1}{2} </center>"
		.format(
			"<a href= '/Revivavl/${0}'>Prev</a>".format(prev),
			"<a href= '/Revivavl/1/1'>First</a>",
			"<a href= '/Revivavl/${0}'>Next</a>".format(next),
		);
	
	header.innerHTML += nav;
	footer.innerHTML = nav + footer.innerHTML;
};