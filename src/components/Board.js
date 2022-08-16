import React from 'react'
import { boardDefault } from './Words';
import Letter from './Letter';

function Board() {
    const [board, setBoard] = React.useState(boardDefault);
  return (
    <div className="board">
        {" "}
        <div className="row">
            <Letter letterPostion={0} attemptValue={0} />
            <Letter letterPostion={1} attemptValue={0} />
            <Letter letterPostion={2} attemptValue={0} />
            <Letter letterPostion={3} attemptValue={0} />
            <Letter letterPostion={4} attemptValue={0} />
        </div>
        <div className="row">
            <Letter letterPostion={0} attemptValue={1} />
            <Letter letterPostion={1} attemptValue={1} />
            <Letter letterPostion={2} attemptValue={1} />
            <Letter letterPostion={3} attemptValue={1} />
            <Letter letterPostion={4} attemptValue={1} />
        </div>
        <div className="row">
            <Letter letterPostion={0} attemptValue={2} />
            <Letter letterPostion={1} attemptValue={2} />
            <Letter letterPostion={2} attemptValue={2} />
            <Letter letterPostion={3} attemptValue={2} />
            <Letter letterPostion={4} attemptValue={2} />
        </div>
        <div className="row">
            <Letter letterPostion={0} attemptValue={3} />
            <Letter letterPostion={1} attemptValue={3} />
            <Letter letterPostion={2} attemptValue={3} />
            <Letter letterPostion={3} attemptValue={3} />
            <Letter letterPostion={4} attemptValue={3} />
        </div>
        <div className="row">
            <Letter letterPostion={0} attemptValue={4} />
            <Letter letterPostion={1} attemptValue={4} />
            <Letter letterPostion={2} attemptValue={4} />
            <Letter letterPostion={3} attemptValue={4} />
            <Letter letterPostion={4} attemptValue={4} />
        </div>
        <div className="row">
            <Letter letterPostion={0} attemptValue={5} />
            <Letter letterPostion={1} attemptValue={5} />
            <Letter letterPostion={2} attemptValue={5} />
            <Letter letterPostion={3} attemptValue={5} />
            <Letter letterPostion={4} attemptValue={5} />
        </div>
    </div>
  )
}

export default Board;