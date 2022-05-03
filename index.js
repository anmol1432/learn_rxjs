const { Observable } = require("rxjs");
const { map } = require("rxjs/operators");

const users = {
  data: [
    {
      status: "active",
      name: "anmol",
    },
    {
      status: "inactive",
      name: "anmol2",
    },
    {
      status: "active",
      name: "love",
    },
  ],
};

const observable = new Observable((subscriber) => {
  // an observable to emit av avlue of 10
  subscriber.next(users);
  // subscriber.next(103);
  // subscriber.next(106);
}).pipe(map((value) => {
    // console.log("1:) got data from observable \n",value.data)
    /* [
    {
        staus: "active",
        name: "anmol",
    }
    ]*/
    return value.data
}), map((value)=>{
    // console.log("2:) got data from first map operator \n",value[0])
    // { staus: 'active', name: 'anmol' }
    return value.filter((item)=> item.status=="active" ); 
 })); 

const observer = {
  next: (value) => {
    console.log("the value is " , value);
  },
  error: (err) => {
    console.log("the err is " + err);
  },
  complete: () => {
    console.log("the observer got a  complete notfification");
  },
};

observable.subscribe(observer);
