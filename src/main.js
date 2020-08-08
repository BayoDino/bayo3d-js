/*
* Bayo3D.js
* Soft, Flexible, 2d-context based 3d renderer
* Copyright Saba. S (BayoDino) 2020-2020
* All rights belongs to the Engineer 
* http://bayodino.epizy.com/bayo3d
*/

var vector = [];
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
            Bayo3D.rotateXDirection  = -2
        } else if (e.pageX > Bayo3D.oldx) {
            Bayo3D.rotateXDirection  = 2
        } else if (e.pageX == Bayo3D.oldx) {
            Bayo3D.rotateXDirection  = 0
        }

         	if (Bayo3D.mouseClicked){Bayo3D.rotate.y += Bayo3D.rotateXDirection;}
        Bayo3D.oldx = e.pageX;
		        if (e.pageY < Bayo3D.oldy) {
            Bayo3D.rotateYDirection  = -2
        } else if (e.pageY > Bayo3D.oldy) {
            Bayo3D.rotateYDirection  = 2
        } else if (e.pageY == Bayo3D.oldy) {
            Bayo3D.rotateYDirection  = 0
        }

         	if (Bayo3D.mouseClicked){Bayo3D.rotate.x += Bayo3D.rotateYDirection;}
        Bayo3D.oldy = e.pageY;
}
	Bayo3D.touchmovemethod = function (e) {

        if (e[0].pageX < Bayo3D.oldx) {
            Bayo3D.rotateXDirection  = -2
        } else if (e[0].pageX > Bayo3D.oldx) {
            Bayo3D.rotateXDirection  = 2
        } else if (e[0].pageX == Bayo3D.oldx) {
            Bayo3D.rotateXDirection  = 0
        }

         	if (Bayo3D.mouseClicked){Bayo3D.rotate.y += Bayo3D.rotateXDirection;}
        Bayo3D.oldx = e[0].pageX;
		        if (e[0].pageY < Bayo3D.oldy) {
            Bayo3D.rotateYDirection  = -2
        } else if (e[0].pageY > Bayo3D.oldy) {
            Bayo3D.rotateYDirection  = 2
        } else if (e[0].pageY == Bayo3D.oldy) {
            Bayo3D.rotateYDirection  = 0
        }

         	if (Bayo3D.mouseClicked){Bayo3D.rotate.x += Bayo3D.rotateYDirection;}
        Bayo3D.oldy = e[0].pageY;
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
 const cans = document.getElementById('scene');
 let width = cans.offsetWidth; // Width of the scene
let height = cans.offsetHeight; // Height of the scene
let runodirection = 5, runtdirection = 5;
// Store the 2D context
const ctx = cans.getContext('2d');
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
      addTo: ctx,
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
	Vector3.prototype.members.push(this);
}
    Vector3.prototype.members = [];
    Vector3.prototype.draw = function(){
		//z point is used for setting up currect z point
		this.point.z = Math.max(...this.path.map(o => o.z)) * Math.cos((this.rotate.y+Bayo3D.rotate.y)*Bayo3D.radiun) * Math.cos((this.rotate.x+Bayo3D.rotate.x)*Bayo3D.radiun);
        ctx.beginPath();
        ctx.moveTo(this.x,this.y);
        this.path.forEach((a,b)=>{
			var x_y = (o)=>{return Bayo3D.getRotationPoses(a.x,a.y,this.rotate[o] + Bayo3D.rotate[o])};
            var x_z = (o)=>{return Bayo3D.getRotationPoses(a.x,a.z,this.rotate[o] + Bayo3D.rotate[o])};
            var z_y = (o)=>{return Bayo3D.getRotationPoses(a.z,a.y,this.rotate[o] + Bayo3D.rotate[o])};
			
		  a.pointX = x_z('y').x * x_z('y').chord;
		  a.pointY = x_z('y').y * x_z('y').chord * Math.sin((this.rotate.x+Bayo3D.rotate.x) * Bayo3D.radiun)+
		  a.y * Math.cos((this.rotate.x+Bayo3D.rotate.x) * Bayo3D.radiun);
          ctx.lineTo(
		  this.translate.x + a.pointX,
		  this.translate.y + a.pointY
		 );
        });
        ctx.lineTo(this.x,this.y);
		ctx.lineWidth = 1;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.strokeStyle = this.color;
        ctx.stroke();
        ctx.fillStyle = this.color;
        ctx.fill();
    }

return Vector3;

}));

/**
 * Index
 */

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
})( this, function factory( Vector3 ) {

      Bayo3D.Vector3 = Vector3;

      return Bayo3D;
});

/**new Bayo3D.Box({
	  addTo: ctx,
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
	  width: 150,
	  height: 100,
	  depth: 50,
});*/
new Bayo3D.Vector3({
	  addTo: ctx,
	  color: 'black',
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
	  path:[
    {x:5,y:-5,z:5},
    {x:-5,y:-5,z:5},
    {x:-5,y:5,z:5}
	  ]
});
new Bayo3D.Vector3({
	  addTo: ctx,
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
	  path:[
    {x:50,y:-50,z:50},
    {x:-50,y:-50,z:50},
    {x:-50,y:50,z:50}
	  ]
});
var vec = new Bayo3D.Vector3({
	  addTo: ctx,
	  color: 'red',
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
	  path:[
    {x:-50,y:-50,z:-50},
    {x:50,y:-50,z:-50},
    {x:50,y:50,z:-50}
	  ]
});
vec.color = 'green';
//runes[0]=new Runes(250,250,0,{x:0,y:0,z:0},'purple',[{x:50,y:50,z:0},{x:50,y:100,z:0}]);
//runes[1]=new Runes(250,250,5,{x:180,y:0,z:0},'yellow',[{x:-100,y:0,z:0},{x:-100,y:100,z:0},{x:0,y:100,z:0}]);
setInterval(()=>{
  ctx.clearRect(0,0,cans.width,cans.height);
  Bayo3D.Vector3.prototype.members.forEach((a,b)=>{
	  	//a.rotate.y+=1;
	a.rotate.x+=1;
	a.draw();
  });

  Bayo3D.Vector3.prototype.members.sort((a,b)=>{
	  return a.point.z - b.point.z;
  });
},1000/60);
Bayo3D.rotate.y = 90;
//Bayo3D.rotate.x = 90;
//Bayo3D.rotate.y = 90;
//console.log(Bayo3D.Box.call());
console.log(Object);
document.addEventListener('mousemove', (e)=>Bayo3D.mousemovemethod(e));
document.onmousedown = (e)=> Bayo3D.mouseClicked = 1;
document.onmouseup = (e)=> Bayo3D.mouseClicked = 0;
document.addEventListener('touchmove', (e)=>Bayo3D.touchmovemethod(e));
document.ontouchstart = (e)=> Bayo3D.mouseClicked = 1;
document.ontouchend = (e)=> Bayo3D.mouseClicked = 0;

