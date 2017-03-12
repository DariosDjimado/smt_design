var quotes=[
	{
		author:  "Francis Bacon",
		quote:"It is true that may hold in these things, which is the general root of superstition; namely, that men observe when things hit, and not when they miss; and commit to memory the one, and forget and pass over the other.",
		ref: "Sylva Sylvarum Century",
		year: "1627",
		next: 1
	},
	{
		author: "Thomas d'Aquin",
		quote: " Les objets intelligibles présentant donc en Dieu deux sortes de vérité, l'une à laquelle peut atteindre l'enquête de la raison, l'autre qui dépasse totalement les capacités de la raison humaine, c'est à bon droit que Dieu propose l'une et l'autre comme objets de foi",
		year: "xxxx",
		ref: "Somme contre les Gentils I,II",
		next: 2
	},
	{
		author: "Walt Disney",
		quote: "Well, my greatest reward, I think, is that I've been able to build this wonderful organization.",
		year: "1973",
		ref: "The Walt Disney Story",
		next: 0
	}

];


setInterval(function(){

	let next=document.getElementById('card');
	let nextAttr=next.getAttribute('data');
	
	//header
	next.firstElementChild.firstElementChild.innerHTML=quotes[nextAttr].author;
	//body
	next.childNodes[3].firstElementChild.innerHTML=quotes[nextAttr].quote.slice(0,100)+'...';
	//footer
	next.lastElementChild.firstElementChild.innerHTML=quotes[nextAttr].ref;
	next.lastElementChild.lastElementChild.innerHTML=quotes[nextAttr].year;
	// set the next attr
	next.setAttribute('data',quotes[nextAttr].next);
}, 4000)