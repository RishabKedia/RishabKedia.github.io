var hot = 0;
var not = 0;

function hots(){
    hot++;
    console.log("Hot" + hot);
}

function nots(){
    not++;
    console.log("Not" + not);
}

var data = {
    hot: 0,
    not: 0
}
//Hot counter
const counter = document.getElementsByClassName("hotCount")[0];
const counterRef = firebase.database().ref("hot_counter");
counterRef.on("value", (snapshot) => {
  counter.textContent = snapshot.val();
});

const incrementButton = document.getElementsByClassName("buttHot")[0];
incrementButton.addEventListener("click", () => {  
  counterRef.transaction(val => val + 1, (err) => {
    if (err) {
      alert(err);
    }
  });
}, false);


//Not Counter
const counter = document.getElementsByClassName("notCount")[0];
const counterRef = firebase.database().ref("not_counter");
counterRef.on("value", (snapshot) => {
  counter.textContent = snapshot.val();
});

const incrementButton = document.getElementsByClassName("buttNot")[0];
incrementButton.addEventListener("click", () => {  
  counterRef.transaction(val => val + 1, (err) => {
    if (err) {
      alert(err);
    }
  });
}, false);