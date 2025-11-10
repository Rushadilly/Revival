
window.onload = function() {
	const addNav = document.querySelector('script[nav]');
	let header = document.querySelector('header');
	let footer = document.querySelector('footer');
  	
	let prev = `/Revival/${addNav.getAttribute('prev')}`.replace("/Revival//", "/Revival/");
	let next = `/Revival/${addNav.getAttribute('next')}`.replace("/Revival//", "/Revival/");
	let links = `<a href='${prev}'>Prev</a>`
		+ `<a href='/Revivavl/1/1'>First</a>`
		+ `<a href='${next}'>Next</a>`
	let nav = `<center>${links}</center>`;
	
	// header.innerHTML += nav;
	// if (footer) {
	// 	footer.innerHTML = nav + footer.innerHTML;
	// }

};