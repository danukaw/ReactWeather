/*function getTempCallBack (location, callback) {
  console.log("inside getTempCallBack");
  callback(undefined, 78);
  callback(null,'city cannot be found');
}

getTempCallBack ('SriLanka', function(err, temp){
  if(err) {
    console.log('error', err);
  } else {
    console.log('success', temp);
  }
});

function getTemPromise (location) {
  return new Promise(function (resolve, reject) {

      setTimeout (function () {
        resolve(79);
        reject ('City not found');
      }, 1000);

  });
}

getTemPromise('SriLanka').then(function (temp) {
  console.log('promise success', temp);
}, function (err) {
  console.log('Promise eroor', err);
});
*/

function addPromise(a, b) {
  return new Promise(function(resolve,reject) {
    if( typeof a === 'number' && typeof b === 'number') {
      resolve(a + b );
    }else {
      reject('a and b both should be numbers');
    }
  });
}

addPromise(1,'asdfaf').then(function(sum){
  console.log('Adding two numbers success', sum);
}, function (err) {
  console.log('Adding two numbers give an error', err);
});
