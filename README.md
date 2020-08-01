# Bayo3D.js
Soft&amp;flexible 3D renderer. It uses 2D context instead of WebGL.

```js
vector.push(new Bayo3D.Vector3({
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
}));
```
I'll add examples soon.
