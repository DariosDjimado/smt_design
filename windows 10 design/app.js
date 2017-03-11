let windowsIcon=document.getElementById('windows_icon');
let nav=document.getElementById('nav');

let navIsVisible=false;


windowsIcon.addEventListener('click', function(e){
	if(navIsVisible){
		nav.style.opacity=0;
		navIsVisible=false;

	} else{
		nav.style.opacity=1;

		navIsVisible=true;
	}
	
	
})