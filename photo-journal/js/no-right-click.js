document.addEventListener('contextmenu', event => event.preventDefault());

document.getElementById('my-image').ondragstart = function() { return false; };