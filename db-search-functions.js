/* global firebase */

function getVersion(handleVersion) {
  var database = firebase.database();
  var databaseVersionReference = database.ref('/db-search/version');
  databaseVersionReference.once('value').then(function(snapshot) {
    
    // You found me! Great job!
    // TODO: Uncomment the code below. It gets the current version value from
    // the database snapshot and passes it as an argument to the 'handleVersion'
    // callback.
    
    var version = snapshot.val();
    handleVersion(version);
  });
}

function getHelloWorldValue(handleType) {
  // TODO: Your code goes here. Hint: use 'getVersion' as a template.
  var database = firebase.database();
  var databaseVersionReference = database.ref('/db-search/hello-world');
  databaseVersionReference.once('value').then(function(snapshot) {
  var hello = snapshot.val();
  handleType(hello);
});
}

function applyDiscount(handleNewPrice) {
  // TODO: Your code goes here.
  var database = firebase.database();
  var databaseVersionReference = database.ref('/db-search/discount');
  databaseVersionReference.once('value').then(function(snapshot) {
  var price = snapshot.val();
  handleNewPrice(price * 100);
});
}

function getArrayLength(handleLength) {
  // TODO: Your code goes here.
  var database = firebase.database();
  var databaseVersionReference = database.ref('/db-search/array');
  databaseVersionReference.once('value').then(function(snapshot) {
  var array1 = snapshot.val();
  handleLength(array1.length);
});
}

function getLastArrayElement(handleElement) {
  // TODO: Your code goes here.
  var database = firebase.database();
  var databaseVersionReference = database.ref('/db-search/array');
  databaseVersionReference.once('value').then(function(snapshot) {
  var array2 = snapshot.val();
  handleElement(array2.slice (-1)[0]);
});
}

function getArrayJoin(handleJoin) {
  // TODO: Your code goes here.
  var database = firebase.database();
  var databaseVersionReference = database.ref('/db-search/array');
  databaseVersionReference.once('value').then(function(snapshot) {
  var array3 = snapshot.val();
  handleJoin(array3.join(' '));
});
}

function getNumberOrStringType(handleType) {
  // TODO: Your code goes here.
  var database = firebase.database();
  var databaseVersionReference = database.ref('/db-search/number-or-string');
  databaseVersionReference.once('value').then(function(snapshot) {
  var NoS = snapshot.val();
  handleType(typeof NoS);
});
}

function getObjectValue(handleValue) {
  // TODO: Your code goes here.
  var database = firebase.database();
  var databaseVersionReference = database.ref('/db-search/object');
  databaseVersionReference.once('value').then(function(snapshot) {
  var object = snapshot.val();
  handleValue(object.values(donkey));
});
}

function getObjectKeyCount(handleKeyCount) {
  // TODO: Your code goes here.
}