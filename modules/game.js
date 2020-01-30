
let gameModule = (function(){
  let winPositions = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
  let board_o;
  let board_x;
  let win = false;
  return{
    checkWinMixin: function(board) {
      
      winPositions.forEach(function (row){
        row.forEach(function (cell){
          if (board[cell] === "O"){
            board_o += 1;
            if  (board_o === 3){
              win = true;
            }
          }
          if (board[cell] === "X"){
            board_x += 1;
            if  (board_x === 3){
              win = true;
            }
          }
        });
        board_x = 0; 
        board_o = 0;
      });
      return win; 
    },

    checkDrawMixin: function(board){
      let draw = false; 
      let x = 0;
      board.forEach(function (square){
       if (square === "X" || square === "O"){ 
         x += 1;
        } 
        if (x === 8){ 
          return draw = true;
        }   
     });
      return draw;
    },

    clearBoard: function(){
      document.getElementById('0').innerHTML  = '';
      document.getElementById('0').value = '';
      document.getElementById('1').innerHTML = '';
      document.getElementById('1').value = '';
      document.getElementById('2').innerHTML  = '';
      document.getElementById('2').value = '';
      document.getElementById('3').innerHTML  = '';
      document.getElementById('3').value = '';
      document.getElementById('4').innerHTML  = '';
      document.getElementById('4').value = '';
      document.getElementById('5').innerHTML  = '';
      document.getElementById('5').value = '';
      document.getElementById('6').innerHTML  = '';
      document.getElementById('6').value = '';
      document.getElementById('7').innerHTML  = '';
      document.getElementById('7').value = '';
      document.getElementById('8').innerHTML  = '';
      document.getElementById('8').value = '';
    }
  }
                                                                          
})();

export { gameModule };