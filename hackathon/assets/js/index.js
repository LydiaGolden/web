window.onload = function () {
	var nav = document.getElementById("hamburger");
	var sideNav = document.getElementById("nav");
	var sideNavClose = document.getElementById("close");
	nav.onclick = function () {
		sideNav.style.marginRight = 0;
		sideNavClose.onclick = function () {
			sideNav.style.marginRight = "-300px";
		};
	};
};