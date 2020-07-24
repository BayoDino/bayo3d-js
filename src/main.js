const cans = document.getElementById('scene');
var runes = [];
// Get the canvas dimensions
let width = cans.offsetWidth; // Width of the scene
let height = cans.offsetHeight; // Height of the scene

// Store the 2D context
const ctx = cans.getContext('2d');
// Function called right after user resized its screen
class Runes{
    constructor(x,y,z,rotate,color,line){
        this.x = x;
        this.y = y;
        this.z = z;
        this.rotate = {
          x:rotate.x,
          y:rotate.y,
          z:rotate.z,
        }
        this.color = color;
        this.line = line;
    }
    draw(){
        ctx.beginPath();
        ctx.moveTo(this.x,this.y);
        this.line.forEach((a,b)=>{
          /*if (Math.cos(this.rotate.y*Math.PI/180) < 0 && a.x > 0) return;
          if (Math.cos(this.rotate.y*Math.PI/180) > 0 && a.x < 0) return;*/
          ctx.lineTo(
		  this.x+(a.x*Math.cos(this.rotate.y*Math.PI/180)+(Math.cos(this.rotate.z*Math.PI/180)*100)),
		  this.y+(a.y*Math.cos(this.rotate.x*Math.PI/180)+(Math.sin(this.rotate.z*Math.PI/180)*100))
		  );
        });
        ctx.lineTo(this.x,this.y);
		ctx.lineWidth = 10;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.strokeStyle = this.color;
        ctx.stroke();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}
runes[0]=new Runes(250,250,0,{x:0,y:0,z:0},'purple',[{x:-75,y:50,z:0},{x:-150,y:0,z:0},{x:-135,y:-25,z:0},{x:-150,y:-50,z:0},{x:-145,y:-25,z:0},{x:-175,y:0,z:0},{x:-200,y:100,z:0},{x:-175,y:175,z:0},{x:-150,y:125,z:0},{x:0,y:50,z:0}]);
//runes[0]=new Runes(250,250,0,{x:0,y:0,z:0},'purple',[{x:0,y:50,z:0}]);
//runes[1]=new Runes(250,250,5,{x:180,y:0,z:0},'yellow',[{x:-100,y:0,z:0},{x:-100,y:100,z:0},{x:0,y:100,z:0}]);
setInterval(()=>{
  ctx.clearRect(0,0,cans.width,cans.height);
  //runes[0].rotate.y+=5;
  runes.forEach((a,b)=>{
    a.rotate.z+=5;
	//a.rotate.x+=5;
    //a.rotate.x+=5;
    a.draw();
  });
  runes.sort((a,b)=>{
	  return a.z - b.z;
  });
},50);
