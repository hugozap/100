/* Mandala Generator */

(function(){

	 var Mandala = window.Mandala = window.Mandala || {};

	 Mandala.draw = function(parent, opts){
	 	opts = opts || {};
	 	opts.w  = opts.w || 1000;
	 	opts.h  = opts.h  || 1000;
	 	opts.centerX = opts.w / 2;
	 	opts.centerY = opts.h / 2;

	 	var parentElem;
	 	parentElem = document.querySelector(parent);

	 	var svg = SVG(parentElem).size(1000,1000);
	 	
 
	 	var levels = opts.levels || 10;
	 	for (var i = 0; i < levels; i++) {
	 		drawLevel(svg, i, opts);
	 	};
	 } 

	 function drawLevel(svg, level, opts){

	 	var levelRad = 50;
	 	console.log(svg.center)
	 	svg.circle(100,100).size(levelRad * level)
	 	.translate(opts.centerX, opts.centerY).stroke("#000").fill("none");
	 }
})();