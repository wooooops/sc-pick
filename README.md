# TOC
   - [pick(object:Object, keys:Array)](#pickobjectobject-keysarray)
<a name=""></a>
 
<a name="pickobjectobject-keysarray"></a>
# pick(object:Object, keys:Array)
example.

```js
var testObject = {
	name: "David",
	__privateProperty: "booya",
	country: "Australia"
};
var newObject = pick( testObject, [ "name", "country" ] );
Object.keys( newObject ).should.have.lengthOf( 2 );
newObject.should.have.a.property( "name", testObject.name );
newObject.should.have.a.property( "country", testObject.country );
newObject.should.not.have.a.property( "__privateProperty" );
```

