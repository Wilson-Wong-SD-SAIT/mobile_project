import React, { useState, useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import { SafeAreaView, StyleSheet, Pressable, View, Text, Alert, Button } from 'react-native';
import { incrementGamesPlayed, incrementWins, incrementLosses, incrementDraws, initializeGameStats, getSoundVolume } from './GameStats';


import Sound from 'react-native-sound';

const boardSize = 3; // Tic-Tac-Toe board size
const sound = new Sound(`a.mp3`, Sound.MAIN_BUNDLE, (error) => {
  if (error) {
 console.log('failed to load the sound', error);
  return;
 }
});
const winnerSound = new Sound(`c.mp3`, Sound.MAIN_BUNDLE, (error) => {
 if (error) {
console.log('failed to load the sound', error);
 return;
}
});


function SingleScreen() {
  const [board, setBoard] = useState(Array(boardSize).fill(null).map(() => Array(boardSize).fill('')));
  const [currentPlayer, setCurrentPlayer] = useState('O'); // User is 'O' and computer is 'X'
  const [isComputerTurn, setIsComputerTurn] = useState(false);
  const [winner, setWinner] = useState(null);
  
  useEffect(() => {
    // Get the current sound volume from GameStats
    const volume = getSoundVolume();
  
    // Set the volume for the sound effects
    sound.setVolume(volume);
    winnerSound.setVolume(volume);
  }, []);





// Initialize the game stats
  useEffect(() => {
    initializeGameStats();
  }, []);

// Manage the game stats
  useEffect(() => {
    if (winner) {
      incrementGamesPlayed();
  
      if (winner === 'O') {
        incrementWins();
      } else if (winner === 'X') {
        incrementLosses();
      } else if (winner === 'Tie') {
        incrementDraws();
      }
    }
  }, [winner]);


  useEffect(() => {
    if (isComputerTurn) {
      const timer = setTimeout(() => {
        computerMove();
        setIsComputerTurn(false); // Reset the trigger for the computer's turn
      }, 600);
      return () => clearTimeout(timer); // Clean up the timer if the component unmounts
    }
  }, [isComputerTurn, winner]); // This effect runs when `isComputerTurn` changes

  const checkWinner = (newBoard) => {
    // Horizontal check
    for (let i = 0; i < boardSize; i++) {
      if (newBoard[i].every(cell => cell === 'O')) {
        winnerSound.play()
        return 'O';
      }
      if (newBoard[i].every(cell => cell === 'X')) {
        winnerSound.play()
        return 'X';
      }
    }

    // Vertical check
    for (let i = 0; i < boardSize; i++) {
      const column = newBoard.map(row => row[i]);
      if (column.every(cell => cell === 'O')) {
        winnerSound.play()
        return 'O';
      }
      if (column.every(cell => cell === 'X')) {
        winnerSound.play()
        return 'X';
      }
    }

    // Diagonal checks
    const diagonal1 = [newBoard[0][0], newBoard[1][1], newBoard[2][2]];
    const diagonal2 = [newBoard[0][2], newBoard[1][1], newBoard[2][0]];
    if (diagonal1.every(cell => cell === 'O') || diagonal2.every(cell => cell === 'O')) {
      winnerSound.play()
      return 'O';
    }
    if (diagonal1.every(cell => cell === 'X') || diagonal2.every(cell => cell === 'X')) {
      winnerSound.play()
      return 'X';
    }

    // Check for a tie
    if (newBoard.flat().every(cell => cell !== '')) {
      winnerSound.play()
      return 'Tie';
    }

    return null;
  };

  useEffect(() => {
    if (isComputerTurn) {
      const timer = setTimeout(() => {
        computerMove();
        setIsComputerTurn(false); // Reset the trigger for the computer's turn
      }, 500);
      return () => clearTimeout(timer); // Clean up the timer if the component unmounts
    }
  }, [isComputerTurn]); // This effect runs when `isComputerTurn` changes

  const resetGame = () => {
    setBoard(Array(boardSize).fill(null).map(() => Array(boardSize).fill('')));
    setCurrentPlayer('O');
    setIsComputerTurn(false);
    setWinner(null);
  };

  const computerMove = () => {
    if (winner) {
      return; // Prevent the computer from making a move if there's already a winner
    }
  
    // Check if the computer can win
    for (let i = 0; i < boardSize; i++) {
      for (let j = 0; j < boardSize; j++) {
        if (board[i][j] === '') {
          const newBoard = board.map((rowArr) => [...rowArr]);
          newBoard[i][j] = 'X';
          if (checkWinner(newBoard) === 'X') {
            setBoard(newBoard);
            setCurrentPlayer('O');
            setWinner('X'); // Set the winner to 'X' when the computer wins
            return;
          }
        }
      }
    }
  
    // Check if the user can win and block their move
    for (let i = 0; i < boardSize; i++) {
      for (let j = 0; j < boardSize; j++) {
        if (board[i][j] === '') {
          const newBoard = board.map((rowArr) => [...rowArr]);
          newBoard[i][j] = 'O';
          if (checkWinner(newBoard) === 'O') {
            newBoard[i][j] = 'X';
            setBoard(newBoard);
            setCurrentPlayer('O');
            const winner = checkWinner(newBoard);
            if (winner) {
              setWinner(winner); // Set the winner if blocking the user's move results in a win
            }
            return;
          }
        }
      }
    }
  
    // If no winning or blocking move, make a random move
    let emptyPositions = [];
    board.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        if (cell === '') {
          emptyPositions.push({ rowIndex, colIndex });
        }
      });
    });
  
    if (emptyPositions.length > 0) {
      const randomPosition = emptyPositions[Math.floor(Math.random() * emptyPositions.length)];
      const newBoard = board.map((rowArr) => [...rowArr]);
      newBoard[randomPosition.rowIndex][randomPosition.colIndex] = 'X';
      setBoard(newBoard);
      setCurrentPlayer('O');
      const winner = checkWinner(newBoard);
      if (winner) {
        setWinner(winner); // Set the winner if the random move results in a win
      }
    }
  };

const handlePress = (row, col) => {
  sound.play();
  if (board[row][col] !== '' || currentPlayer !== 'O' || winner) {
    return;
  }
  
  const newBoard = board.map((rowArr) => [...rowArr]);
  newBoard[row][col] = currentPlayer;
  setBoard(newBoard);
  const currentWinner = checkWinner(newBoard);
  if (currentWinner) {
    setWinner(currentWinner);
    return; // Prevent setting the turn to the computer if there's a winner
  }
  setCurrentPlayer('X'); // Change player
  setIsComputerTurn(true); // Only trigger computer's move if there's no winner
};

  const styles = StyleSheet.create({
    board: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    row: {
      flexDirection: 'row',
    },
    cell: {
      width: 100,
      height: 100,
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    cellText: {
      fontSize: 48,
    },
    winnerText: {
      fontSize: 38,
      fontWeight: 'bold',
      marginTop: 20,
      color: 'red',
    },
    cellText: {
        fontSize: 48,
        fontWeight: 'bold',
        color: 'black', 
      },
      cellTextX: {
        color: 'red', // Color for 'X'
      },
  });

  return (
    <MainLayout>
    <SafeAreaView style={styles.container}>
    <View style={styles.board}>
  {board.map((row, rowIndex) => (
    <View key={`row-${rowIndex}`} style={styles.row}>
      {row.map((cell, colIndex) => (
        <Pressable
          key={`cell-${rowIndex}-${colIndex}`}
          style={styles.cell}
          onPress={() => !winner && handlePress(rowIndex, colIndex)}
          disabled={!!winner}
        >
          {/* apply the red color to 'X' */}
          <Text style={[styles.cellText, cell === 'X' && styles.cellTextX]}>{cell}</Text>
        </Pressable>
      ))}
    </View> 
  ))}
</View>
      {winner && (
        <>
          <Text style={styles.winnerText}>
            {winner === 'Tie' ? 'It\'s a Tie!' : `The WINNER is ${winner}`}
          </Text>
          <Button title="Play Again" onPress={resetGame} />
        </>
      )}


    </SafeAreaView>
  </MainLayout>
  );
}

export default SingleScreen;