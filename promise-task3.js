var promise = new Promise(function (resolve, reject){
        setTimeout(function(){
            resolve('I FIRED');
        }, 300);
        setTimeout(function(){
            var error = new Error('I DID NOT FIRE');
            reject(error);
        }, 300);
    });
function onFulfilled(fulfilled){
    console.log(fulfilled);
}

function onReject(error){
    console.log(error.message);
}

promise.then(onFulfilled,onReject);