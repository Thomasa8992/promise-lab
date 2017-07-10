var promise = new Promise(function(fulfill, reject){
    fulfill('PROMISE VALUE')
})

function onFulfilled(fulfilled){
    console.log(fulfilled);
}
console.log("MAIN PROGRAM")
promise.then(onFulfilled);