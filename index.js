function receivesAFunction(callback){
    callback();
}
receivesAFunction(function(){

});

function returnsANamedFunction(){
   return returnsANamedFunction; 
}

function returnsAnAnonymousFunction(){
    return function(){};
}
