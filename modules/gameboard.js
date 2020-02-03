let Gameboard = (function() {
  let displayBoard = ''; 
    
  displayBoard += '<tr>';
  displayBoard += '<th id="0"></th>';
  displayBoard += '<th id="1"></th>';
  displayBoard += '<th id="2"></th>';
  displayBoard += '</tr>';
  displayBoard += '<tr>';
  displayBoard += '<th id="3"></th>';
  displayBoard += '<th id="4"></th>';
  displayBoard += '<th id="5"></th>';
  displayBoard += '</tr>';
  displayBoard += '<tr>';
  displayBoard += '<th id="6"></th>';
  displayBoard += '<th id="7"></th>';
  displayBoard += '<th id="8"></th>';
  displayBoard += '</tr>';
  
  return { displayBoard }
})();

export { Gameboard };