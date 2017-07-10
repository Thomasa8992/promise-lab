var willBeFulfilled = new Promise(
    function(resolve, reject){
    setTimeout(function(){
        resolve('FULFILLED!');
    }, 300);
});

var completePromise = function (){
    willBeFulfilled
    .then(function (fulfilled) {
            console.log(fulfilled);
        })
};

completePromise();


