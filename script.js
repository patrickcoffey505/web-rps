
let table = {0:'rock', 1:'paper', 2:'scissors'};

let wins = 0;
let losses = 0;

function newGame(user) {
  let computer = Math.floor(Math.random()*3);
  showComputer(table[computer]);
  let result = algo(computer, user);
  displayRecord(newRecord(result));
}


function algo(computer, user) {
  if (user == computer) {
    console.log("tie");
    showMessage("Tie");
    return 2;
  }
  else if (user == (computer+1)%3) {
    console.log("win");
    showMessage("Dub");
    return 1;
  }
  else {
    console.log("loss");
    showMessage("Tough Cheese");
    return 0;
  }
}

function newRecord(result) {
  if (result==1) {
    wins++;
  }
  if (result==0) {
    losses++;
  }
  return wins+'-'+losses;
}
