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

const counte = document.getElementsByClassName("NotCount")[0];
const counteRef = firebase.database().ref("Not_counter");
counteRef.on("value", (snapshot) => {
  counte.textContent = snapshot.val();
});

const incementButton = document.getElementsByClassName("buttNot")[0];
incementButton.addEventListener("click", () => {  
  counteRef.transaction(val => val + 1, (err) => {
    if (err) {
      alert(err);
    }
  });
}, false);

