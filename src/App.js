import './App.css';
import Board from './components/Board';
import KeyBoard from './components/KeyBoard';
import { boardDefault, generateWordSet } from './components/Words';
import {createContext, useEffect, useState} from "react";

export const AppContext = createContext();


function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt, ] = useState({attempt: 0, letterPosition: 0});
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledLetters, setDisabledLetters] = useState([]);

  const correctWord = "RIGHT";

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
    }
)})

  const onSelectLetter = (keyVal) => {
    if (currAttempt.letterPosition > 4) return;
        const newBoard = [...board]
        newBoard[currAttempt.attempt][currAttempt.letterPosition] = keyVal;
        setBoard(newBoard);
        setCurrAttempt({...currAttempt, letterPosition: currAttempt.letterPosition + 1});
  }

  const onDelete = () => {
    if (currAttempt.letterPosition === 0 ) return;
            const newBoard = [...board]
            newBoard[currAttempt.attempt][currAttempt.letterPosition -1] = "";
            setBoard(newBoard);
            setCurrAttempt ({...currAttempt, letterPosition: currAttempt.letterPosition - 1});
  }

  const onEnter = () => {
    if (currAttempt.letterPosition !== 5 ) return;

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i];
    }

    if (wordSet.has(currWord.toLowerCase())) {
    setCurrAttempt({attempt: currAttempt.attempt + 1, letterPosition: 0});
  } else {
    alert ("Word not found");
  }

  if (currWord === correctWord) {
    alert ("You win!");
  }
};

  return (
    <div className="App">
      <nav>
        <h1>Wordle!</h1>
      </nav>
      <AppContext.Provider value={{
        board, 
        setBoard, 
        currAttempt, 
        setCurrAttempt,
         onSelectLetter, 
         onEnter, 
         onDelete, 
         correctWord,
         setDisabledLetters,
         disabledLetters
         }}>
      <div className="game">
      <Board />
      <KeyBoard />
      </div>
      </AppContext.Provider>
    </div>
  );
}


export default App;
