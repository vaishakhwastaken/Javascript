var myGlobal = 12;

function func(){

    var oops = 10; // this is a local variable only used inside a function.
    // as it can only be used inside a function
    oopsglobal = 5; // if i remove var we make it global
    console.log(oops);
}

function finc(){
    //on the other hand
    console.log(myGlobal); // is a global variable can be used anywhere in the function
    console.log(typeof(oops)); // is type undefined
    console.log(oopsglobal)
}

func();
finc();