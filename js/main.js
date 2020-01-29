import { Player } from '/modules/player.js';




document.getElementById('start').onclick = () =>{
  let name1 = document.getElementById('player1').value;
  let name2 = document.getElementById('player2').value;
  const player1 = Player(name1);
  const player2 = Player(name2);
  document.getElementById('symbol1').innerHTML = 'Player with symbol X is:';
  document.getElementById('symbol2').innerHTML = 'Player With Symbol O is:';
  document.getElementById('p1').innerHTML = player1.pname;
  document.getElementById('p2').innerHTML = player2.pname;
}
let symbol = '';

document.getElementById('0').onclick = () =>{
  
  symbol == "X" ? symbol = "O" : symbol = "X";
  document.getElementById('0').innerHTML = symbol;
}

document.getElementById('1').onclick = () =>{
  
  symbol == "X" ? symbol = "O" : symbol = "X"; 
  document.getElementById('1').innerHTML = symbol;
}

document.getElementById('2').onclick = () =>{
  
  symbol == "X" ? symbol = "O" : symbol = "X"; 
  document.getElementById('2').innerHTML = symbol;
}

document.getElementById('3').onclick = () =>{
  
  symbol == "X" ? symbol = "O" : symbol = "X"; 
  document.getElementById('3').innerHTML = symbol;
}

document.getElementById('4').onclick = () =>{
  
  symbol == "X" ? symbol = "O" : symbol = "X"; 
  document.getElementById('4').innerHTML = symbol;
}

document.getElementById('5').onclick = () =>{
  
  symbol == "X" ? symbol = "O" : symbol = "X"; 
  document.getElementById('5').innerHTML = symbol;
}

document.getElementById('6').onclick = () =>{
  
  symbol == "X" ? symbol = "O" : symbol = "X"; 
  document.getElementById('6').innerHTML = symbol;
}

document.getElementById('7').onclick = () =>{
  
  symbol == "X" ? symbol = "O" : symbol = "X"; 
  document.getElementById('7').innerHTML = symbol;
}

document.getElementById('8').onclick = () =>{
  
  symbol == "X" ? symbol = "O" : symbol = "X"; 
  document.getElementById('8').innerHTML = symbol;
}



