iAmFulfilled = false;
var promise = new Promise(function (resolve, reject){
    if(iAmFulfilled){
        setTimeout(function(){
            resolve('FULFILLED!');
        }, 300);
    } else {
        setTimeout(function(){
            var error = new Error('REJECTED!');
            reject(error);
        }, 300);
    }
});
function onFulfilled(fulfilled){
    console.log(fulfilled);
}

function onReject(error){
    console.log(error.message);
}

promise.then(onFulfilled,onReject);