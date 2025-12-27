let score = 0;
let numGuest = 0;
let home = document.getElementById("score");
let guest = document.getElementById("num_guest");

//Initialization
home.textContent = score;
guest.textContent = numGuest;

function addOneHome() {
  score += 1;
  home.textContent = score;
}

function addTwoHome() {
  score += 2;
  home.textContent = score;
}

function addThreeHome() {
  score += 3;
  home.textContent = score;
}

function resetHome() {
  score = 0;
  home.textContent = score;
}

function addOneGuest() {
  numGuest += 1;
  guest.textContent = numGuest;
}

function addTwoGuest() {
  numGuest += 2;
  guest.textContent = numGuest;
}

function addThreeGuest() {
  numGuest += 3;
  guest.textContent = numGuest;
}

function resetGuest() {
  numGuest = 0;
  guest.textContent = numGuest;
}
