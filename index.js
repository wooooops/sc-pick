function pick( object, validKeys ) {
  var parsedObject = {};

  if ( object !== Object( object ) ) {
    return parsedObject;
  }

  validKeys = Array.isArray( validKeys ) ? validKeys : [];

  Object.keys( object ).forEach( function ( key ) {
    var keyOk = false;

    validKeys.forEach( function ( validKey ) {
      if ( keyOk === false && key === validKey ) {
        keyOk = true;
      }
    } );

    if ( keyOk === true ) {
      parsedObject[ key ] = object[ key ];
    }

  } );

  return parsedObject;
}

module.exports = pick;