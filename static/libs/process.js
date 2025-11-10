
window.onload = function() {
	const addNav = document.querySelector('script[nav]');
	let header = document.querySelector('header');
	let footer = document.querySelector('footer');
  	
	let prev = `/Revival/${addNav.getAttribute('prev')}`.replace("/Revival//", "/Revival/");
	let next = `/Revival/${addNav.getAttribute('next')}`.replace("/Revival//", "/Revival/");
	let links = `<a href='${prev}'>&lt;&lt; Prev</a>`
		+ `<a href='/Revivavl/1/1'>First</a>`
		+ `<a href='${next}'>Next &gt;&gt;</a>`
	let nav = `<center>${links}</center>`;
	
	const newElement = document.createElement('p');
	newElement.innerHTML = nav;
	header.appendChild(newElement);

	if (footer) {
		const newElement2 = document.createElement('p');
		newElement2.innerHTML = nav;
		footer.prepend(newElement2);
	}

};