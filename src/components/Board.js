
import Square from './Square'
import "./Board.css"

const Board = ({squares, onClick}) => {

  
  //밑에 getter setter 임
  // const [squares, setSquares] = useState(Array(9).fill(null));
  // const [xIsNext, setXIsNext] = useState(true);

  //const status = `Next Player ${xIsNext ? 'X': 'O'}`;

  // const calculateWinner = (squares) => {
  //   const lines = [
  //     [0,1,2],
  //     [3,4,5],
  //     [6,7,8],
  //     [0,3,6],
  //     [1,4,7],
  //     [2,5,8],
  //     [0,4,8],
  //     [2,4,6]
  //   ]
  //   for (let index= 0; index < lines.length; index++) {
  //     const [a,b,c] = lines[index];
  //     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
  //       return squares[a];
  //     }
  //   }
  //   return null;
  // }

  // const winner = calculateWinner(squares);
  // let status;
  // if(winner) {

  //   status = 'Winner:' + winner;
  // } else {
  //   status = `Next Player ${xIsNext ? 'X': 'O'}`;
  // }

  
  // const handleClick =(i) => {
  //   const newSquares = squares.slice();   //slice는 빈칸이면 통째로 복사해옴, (시작 번호, 끝번호 (끝번호 빼고 저장함))
  //   if(calculateWinner(newSquares) || newSquares[i]) {
  //     return;  //이렇게하면 진행 막음
  //   }
  //   newSquares[i] = xIsNext ? 'X': 'O';
  //   setSquares(newSquares);  //constructor square에 저장하는거
  //   setXIsNext(!xIsNext);
  //   //setXIsNext(prev => !prev);
  // }


  const renderSquare =(i) => {
    return <Square value={squares[i]}
     onClick= {() => onClick(i)}/>
  }


  
  
    return (
      <div className='board-wrapper'>
        
        <div className='board-row'>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className='board-row'>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className='board-row'>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        
      </div>
    )
  
}

//
//rafce
// import React from 'react'

// const Board = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

export default Board
