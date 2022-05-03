const { Observable } = require("rxjs");

const observable = new Observable((subscriber) => {
    // an observable to emit av avlue of 10
    subscriber.next(10);
    subscriber.next(103);
    subscriber.next(106);
});

const observer ={
    next:(value) => {console.log("the value is " + value)},
    error:(err) => {console.log("the err is " + err)},
    complete: () => {console.log("the observer got a  complete notfification")}
}

observable.subscribe(observer)