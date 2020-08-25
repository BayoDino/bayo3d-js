/*
* Bayo3D.js
* Soft, Flexible, 2d-context based 3d renderer
* Copyright Saba. S (BayoDino) 2020-2020
* All rights reserved
* http://bayodino.github.io/bayo3d-js
*/

var vector = [];
var pi180 = Math.PI/180;
function sin(a){
	return Math.sin((a)*Math.PI/180);
}
function cos(a){
	return Math.cos((a)*Math.PI/180);
}
function atan2(a,b){
	return Math.atan2(a,b)*180/Math.PI;
}
function pytha(a,b){
	return Math.sqrt(a*a+b*b);
}
function round(a){
	return Math.round(a);
}
var radiun = 180*Math.PI;
( function( root, factory ) {
  // module definition
  if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    root.Bayo3D = factory();
  }
}( this, function factory() {

var Bayo3D = {};
Bayo3D.TAU = Math.PI * 2;
Bayo3D.radiun = Math.PI / 180;
Bayo3D.pythagorean = (a, b)=>{
  return Math.sqrt(a*a + b*b);
}
Bayo3D.checkForObjectContent = ()=>{

}
Bayo3D.mouseClicked = 0;
Bayo3D.rotateXDirection = 0;
Bayo3D.oldx = 0;
Bayo3D.rotateYDirection = 0;
Bayo3D.oldy = 0;
Bayo3D.mousemovemethod = function (e) {

        if (e.pageX < Bayo3D.oldx) {
            Bayo3D.rotateXDirection  = Bayo3D.oldx - e.pageX
        } else if (e.pageX > Bayo3D.oldx) {
            Bayo3D.rotateXDirection  = Bayo3D.oldx - e.pageX
        } else if (e.pageX == Bayo3D.oldx) {
            Bayo3D.rotateXDirection  = 0
        }

         	if (Bayo3D.mouseClicked){Bayo3D.rotate.y += Bayo3D.rotateXDirection;}
        Bayo3D.oldx = e.pageX;
		        if (e.pageY < Bayo3D.oldy) {
            Bayo3D.rotateYDirection  = Bayo3D.oldy - e.pageY
        } else if (e.pageY > Bayo3D.oldy) {
            Bayo3D.rotateYDirection  = Bayo3D.oldy - e.pageY
        } else if (e.pageY == Bayo3D.oldy) {
            Bayo3D.rotateYDirection  = 0
        }

         	if (Bayo3D.mouseClicked){Bayo3D.rotate.x += Bayo3D.rotateYDirection;}
        Bayo3D.oldy = e.pageY;
}
	Bayo3D.touchmovemethod = function (e) {

        if (e.touches[0].pageX < Bayo3D.oldx) {
            Bayo3D.rotateXDirection  = Bayo3D.oldx - e.touches[0].pageX
        } else if (e.touches[0].pageX > Bayo3D.oldx) {
            Bayo3D.rotateXDirection  = Bayo3D.oldx - e.touches[0].pageX
        } else if (e.touches[0].pageX == Bayo3D.oldx) {
            Bayo3D.rotateXDirection  = 0
        }

         	if (Bayo3D.mouseClicked){Bayo3D.rotate.y += Bayo3D.rotateXDirection;}
        Bayo3D.oldx = e.touches[0].pageX;
		        if (e.touches[0].pageY < Bayo3D.oldy) {
            Bayo3D.rotateYDirection  = Bayo3D.oldy - e.touches[0].pageY
        } else if (e.touches[0].pageY > Bayo3D.oldy) {
            Bayo3D.rotateYDirection  = Bayo3D.oldy - e.touches[0].pageY
        } else if (e.touches[0].pageY == Bayo3D.oldy) {
            Bayo3D.rotateYDirection  = 0
        }

         	if (Bayo3D.mouseClicked){Bayo3D.rotate.x += Bayo3D.rotateYDirection;}
        Bayo3D.oldy = e.touches[0].pageY;
}
Bayo3D.getRotationPoses=(x,y,rotation)=>{
	//first with Pythagoras we're getting langth of the chord
    var chord = Math.sqrt(x*x+y*y);	
	//then getting the degrees
	var degrees = Math.atan2(y,x) * 180 / Math.PI + rotation-180;
	var xx = Math.cos(degrees * Math.PI /180);
	var yy = -Math.sin(degrees * Math.PI /180);
	return {x:xx,y:yy,chord:chord}
}
Bayo3D.isPlusOrMinus = (a)=>{
  return (a <= 0 ? (a == 0 ? 0 : -1) : 1);
}
Bayo3D.rotate = {
	x:0,
	y:0
}
Bayo3D.extend = function( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
};

Bayo3D.lerp = function( a, b, alpha ) {
  return ( b - a ) * alpha + a;
};

Bayo3D.modulo = function( num, div ) {
  return ( ( num % div ) + div ) % div;
};

var powerMultipliers = {
  2: function( a ) {
    return a * a;
  },
  3: function( a ) {
    return a * a * a;
  },
  4: function( a ) {
    return a * a * a * a;
  },
  5: function( a ) {
    return a * a * a * a * a;
  },
};

Bayo3D.easeInOut = function( alpha, power ) {
  if ( power == 1 ) {
    return alpha;
  }
  alpha = Math.max( 0, Math.min( 1, alpha ) );
  var isFirstHalf = alpha < 0.5;
  var slope = isFirstHalf ? alpha : 1 - alpha;
  slope /= 0.5;
  // make easing steeper with more multiples
  var powerMultiplier = powerMultipliers[ power ] || powerMultipliers[2];
  var curve = powerMultiplier( slope );
  curve /= 2;
  return isFirstHalf ? curve : 1 - curve;
};
Bayo3D.render = ()=>{
	Bayo3D.Canvas.prototype.members.forEach((a)=>{
		a.render();
	})
}
return Bayo3D;

}));

//const cans = document.getElementById('scene');
/*class Bayo3D{
	constructor(){}
};*/
// Get the canvas dimensions
/*let width = cans.offsetWidth; // Width of the scene
let height = cans.offsetHeight; // Height of the scene
let runodirection = 5, runtdirection = 5;
// Store the 2D context
const ctx = cans.getContext('2d');*/
/*
 *Renderer
 */
/* const cans = document.getElementById('scene');
 let width = cans.offsetWidth; // Width of the scene
let height = cans.offsetHeight; // Height of the scene
// Store the 2D context
const ctx = cans.getContext('2d');*/
( function( root, factory ) {
  // module definition
  if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory( require('./boilerplate') );
  } else {
    // browser global
    var Bayo3D = root.Bayo3D;
    Bayo3D.Canvas = factory( Bayo3D );
  }

}( this, function factory( utils ) {

var Canvas = function(json){
    this.props = {
      querySelector: undefined,
      translate:{
        x:0,
        y:0,
        z:0
      },
      rotate:{
        x:0,
        y:0,
        z:0
      },
	  width: 100,
	  height: 100,
	  isCentered: false,
    }
    Object.entries(this.props).forEach(a => {
      const [b, c] = a;
      if (c === Object(c) && b !== 'path'){
        Object.entries(c).forEach(d => {
          const [e, f] = d;
          this.props[b][e] = typeof json[b][e] !== 'undefined' ? json[b][e] : this.props[b][e];
        });
      }else{
      this.props[b] = typeof json[b] !== 'undefined' ? json[b] : this.props[b];
      }
    });
    Object.entries(this.props).forEach(a => {
      const [b, c] = a;
      this[b] = c;
    });
    console.log(document.querySelector(this.querySelector),this.querySelector);
    this.canvas = document.querySelector(this.querySelector);
	this.canvas.width = this.width;
	this.canvas.height = this.height;
	this.point = {};
	if (this.isCentered){
		this.translate.x=this.width/2;
		this.translate.y=this.height/2;
		console.log(this.translate);
	}
	    this.__PERSPECTIVE = this.canvas.width; // The field of view of our 3D scene
	this.ctx = this.canvas.getContext('2d');
	Canvas.prototype.members.push(this);
}
	Canvas.prototype.members = [];
    Canvas.prototype.render = function(){
			  this.rotater = {};  this.translater = {};
		this.translater.x= this.translate.x;
		this.translater.y= this.translate.y;
		this.translater.z= this.translate.z;
		this.rotater.x= this.rotate.x;
		this.rotater.y= this.rotate.y;
		this.rotater.z= this.rotate.z;
		this.point.x= this.translate.x;
		this.point.y= this.translate.y;
		this.point.z= this.translate.z;
		this.ctx.clearRect(0,0,illo.canvas.width,illo.canvas.height)
  Bayo3D.Vector3.prototype.members.forEach((a,b)=>{
	a.draw();
  });
  
  Bayo3D.Vector3.prototype.members.sort((a,b)=>{
	  return a.point.z - b.point.z;
  });
	}
return Canvas;
/**
 * Index
 */
}));
/*
 *Vector
 */
( function( root, factory ) {
  // module definition
  if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory( require('./boilerplate') );
  } else {
    // browser global
    var Bayo3D = root.Bayo3D;
    Bayo3D.Vector3 = factory( Bayo3D );
  }

}( this, function factory( utils ) {

var Vector3 = function(json){
    this.props = {
      addTo: undefined,
	  color: 'grey',
      translate:{
        x:250,
        y:250,
        z:0
      },
      rotate:{
        x:0,
        y:0,
        z:0
      },
      path:[]
    }
    Object.entries(this.props).forEach(a => {
      const [b, c] = a;
      if (c === Object(c) && b !== 'path'){
        Object.entries(c).forEach(d => {
          const [e, f] = d;
          this.props[b][e] = typeof json[b][e] !== 'undefined' ? json[b][e] : this.props[b][e];
        });
      }else{
      this.props[b] = typeof json[b] !== 'undefined' ? json[b] : this.props[b];
      }
    });
    Object.entries(this.props).forEach(a => {
      const [b, c] = a;
      this[b] = c;
    });;
		if (this.props.path.length < 3) return console.error('Bayo3D.Vector.path requires 3 paramters, '+this.props.path.length+' given');
	this.point = {
		x: this.translate.x,
		y: this.translate.y,
		z: this.translate.z
	}
	this.path.forEach((a,b)=>{
		a.point = {};
	});
	this.ctx = this.addTo.ctx;

	Vector3.prototype.members.push(this);
	this.__PERSPECTIVE = this.addTo.__PERSPECTIVE;
}
    Vector3.prototype.members = [];
Vector3.prototype.draw = function(){
		//z point is used for setting up currect z point
			this.translater={}; this.rotater={};
			this.translater.x= this.translate.x+this.addTo.point.x;
		this.translater.y= this.translate.y+this.addTo.point.y;
		this.translater.z= this.translate.z+this.addTo.point.z;
		this.rotater.x= this.rotate.x+this.addTo.rotater.x;
		this.rotater.y= this.rotate.y+this.addTo.rotater.y;
		this.rotater.z= this.rotate.z+this.addTo.rotater.z;
        this.addTo.ctx.beginPath();
        this.addTo.ctx.moveTo(this.x,this.y);
        this.path.forEach((a,b)=>{
			var x = a.x + this.translate.x,
			y = a.y + this.translate.y,
			z = a.z + this.translate.z;
			var rx = this.addTo.rotater.x + Bayo3D.rotate.x,
			ry = this.addTo.rotater.y + Bayo3D.rotate.y,
			rz = this.addTo.rotater.z + Bayo3D.rotate.z;
			var xz = pytha(a.x,a.z),
			yz = pytha(a.y,a.z),
			xyz = pytha(yz,xz);
		a.point.x = this.addTo.point.x + xz * sin(ry+atan2(z,x));
		a.point.y = this.addTo.point.y + y * cos(rx) + xz * cos(ry+atan2(z,x)) * sin(rx);
		a.point.z = this.addTo.point.z + (xz * -cos(ry+atan2(z,x)) * cos(rx)) + y * sin(rx);
		this.addTo.ctx.lineTo(a.point.x,a.point.y);
        });
        //this.addTo.ctx.lineTo(this.x,this.y);
        this.addTo.ctx.lineWidth = 1;
        this.addTo.ctx.lineCap = 'round';
        this.addTo.ctx.lineJoin = 'round';
        this.addTo.ctx.strokeStyle = this.color;
        this.addTo.ctx.stroke();
        this.addTo.ctx.fillStyle = this.color;
        this.addTo.ctx.fill();
		this.point.z = (Math.max(...this.path.map(o => o.point.z)));
    }

return Vector3;

}));
/*
 *Vector
 */
( function( root, factory ) {
  // module definition
  if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory( require('./boilerplate') );
  } else {
    // browser global
    var Bayo3D = root.Bayo3D;
    Bayo3D.Ball = factory( Bayo3D );
  }

}( this, function factory( utils ) {

var Ball = function(json){
    this.props = {
      addTo: null,
      translate:{
        x:250,
        y:250,
        z:0
      },
      rotate:{
        x:0,
        y:0,
        z:0
      },
      stroke: 2,
	    type: null,
  id: 'undefined',
  hasBorder: true,
  borderType: -1,
  border: '#333',
  fill: false,
  color: '#333',
  closed: true,
  visible: true,
  path: [ {} ],
  front: { z: 1 },
  backface: true,
  texture: false,
  image: false,
  handledBy:0,
  fuzz:0,
  isEye:0,
  irisSizes: [['black',10],['black',10]],
  eyeLed : '#111111',
  furType: 0,
    }
    Object.entries(this.props).forEach(a => {
      const [b, c] = a;
      /*if (c === Object(c) && b !== 'path'){
        Object.entries(c).forEach(d => {
          const [e, f] = d;
          this.props[b][e] = typeof json[b][e] !== 'undefined' ? json[b][e] : this.props[b][e];
        });
      }else{*/
      this.props[b] = typeof json[b] !== 'undefined' ? json[b] : this.props[b];
      //}
    });
    Object.entries(this.props).forEach(a => {
      const [b, c] = a;
      this[b] = c;
    });
    this.ctx = this.addTo.ctx;
	this.point = {
		x: this.translate.x,
		y: this.translate.y,
		z: this.translate.z
  }
	Bayo3D.Vector3.prototype.members.push(this);
	this.__PERSPECTIVE = this.addTo.__PERSPECTIVE;
	 this.scaleProjected = 0;
}
//Bayo3D.Vector3.prototype.members.members = [];
    Ball.prototype.draw = function(){
		  this.rotater = {};  this.translater = {};
		this.translater.x= this.translate.x+this.addTo.point.x;
		this.translater.y= this.translate.y+this.addTo.point.y;
		this.translater.z= this.translate.z+this.addTo.point.z;
		this.rotater.x= this.rotate.x+this.addTo.rotater.x;
		this.rotater.y= this.rotate.y+this.addTo.rotater.y;
		this.rotater.z= this.rotate.z+this.addTo.rotater.z;
		//this.scaleProjected = PERSPECTIVE / (PERSPECTIVE + this.z);
		//if (this.color == 'blue')console.log(this.translate.x,this.addTo.translater.x);
		function makeFuzz(val){
var fuzz=0;
if (val%2==1)fuzz+=0.05;else fuzz-=0.05;
if (val%3==1)fuzz=0;
//if (val%5==1)fuzz+=0.05;else fuzz-=0.05;
//if (val%7==0)fuzz+=0.05;else fuzz-=0.05;
return fuzz;
}
		//z point is used for setting up currect z point

    this.addTo.ctx.beginPath();
		var radius = this.stroke/2;
		radius = radius * this.scaleProjected;
			var x = this.translate.x,
			y = this.translate.y,
			z = this.translate.z;
			var rx = this.addTo.rotater.x + Bayo3D.rotate.x,
			ry = this.addTo.rotater.y + Bayo3D.rotate.y,
			rz = this.addTo.rotater.z + Bayo3D.rotate.z;
			var xz = pytha(this.translate.x,this.translate.z),
			yz = pytha(this.translate.y,this.translate.z),
			xyz = pytha(yz,xz);
		this.point.x = this.addTo.point.x + xz * sin(ry+atan2(z,x));
		this.point.y = this.addTo.point.y + y * cos(rx) + xz * cos(ry+atan2(z,x)) * sin(rx);
		this.point.z = this.addTo.point.z + (xz * -cos(ry+atan2(z,x)) * cos(rx)) + y * sin(rx);
    		this.scaleProjected = this.__PERSPECTIVE / (this.__PERSPECTIVE - this.point.z);
	this.addTo.ctx.moveTo(this.x,this.y);
        for(var i=0;i<=360;i++){
        var ri = (i * Math.PI/180);
        var rx=(Math.cos(ri)+makeFuzz(i)*this.fuzz);
        var ry=(-Math.sin(ri));
//console.log(rx,ry);
this.addTo.ctx.lineTo(rx*radius+this.point.x,ry*radius+this.point.y);
		//console.log(rx*radius+this.point.x);
                               }
		/*ctx.lineWidth = 1;*/
    this.addTo.ctx.lineCap = 'round';
    this.addTo.ctx.lineJoin = 'round';
    this.addTo.ctx.strokeStyle = this.color;
    this.addTo.ctx.stroke();
    this.addTo.ctx.fillStyle = this.color;
    this.addTo.ctx.fill();
    }

return Ball;
/**
 * Index
 */
}));
( function( root, factory ) {
  // module definition
  if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
        require('./vector3'),
    );
  } else if ( typeof define == 'function' && define.amd ) {
    /* globals define */ // AMD
    define( 'bayo3d', [], root.Bayo3D );
  }
})( this, function factory( Vector3,Ball,Canvas ) {

      Bayo3D.Vector3 = Vector3;
	  Bayo3D.Ball = Ball;
    Bayo3D.Canvas = Canvas;
      return Bayo3D;
});
setInterval(()=>{
  Bayo3D.render();
},1000/60);
Bayo3D.rotate.y = 90;
console.log(Object);
document.addEventListener('mousemove', (e)=>Bayo3D.mousemovemethod(e));
document.onmousedown = (e)=> Bayo3D.mouseClicked = 1;
document.onmouseup = (e)=> Bayo3D.mouseClicked = 0;
document.addEventListener('touchmove', (e)=>Bayo3D.touchmovemethod(e));
document.ontouchstart = (e)=> Bayo3D.mouseClicked = 1;
document.ontouchend = (e)=> Bayo3D.mouseClicked = 0;
