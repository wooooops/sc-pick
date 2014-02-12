var should = require( "should" ),
	pick = require( ".." );

describe( "pick(object:Object, keys:Array)", function () {

	it( "example", function () {
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

	} );

} );