import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { StyleSheet, Pressable, View, Text, Button } from 'react-native';

const boardSize = 3; // Tic-Tac-Toe board size

function MultiScreen() {
  const [board, setBoard] = useState(Array(boardSize).fill(null).map(() => Array(boardSize).fill('')));
  const [currentPlayer, setCurrentPlayer] = useState('O');
  const [winner, setWinner] = useState(null);

  const checkWinner = (newBoard) => {
    // Horizontal check
    for (let i = 0; i < boardSize; i++) {
      if (newBoard[i].every(cell => cell === 'O')) {
        return 'O';
      }
      if (newBoard[i].every(cell => cell === 'X')) {
        return 'X';
      }
    }

    // Vertical check
    for (let i = 0; i < boardSize; i++) {
      const column = newBoard.map(row => row[i]);
      if (column.every(cell => cell === 'O')) {
        return 'O';
      }
      if (column.every(cell => cell === 'X')) {
        return 'X';
      }
    }

    // Diagonal checks
    const diagonal1 = [newBoard[0][0], newBoard[1][1], newBoard[2][2]];
    const diagonal2 = [newBoard[0][2], newBoard[1][1], newBoard[2][0]];
    if (diagonal1.every(cell => cell === 'O') || diagonal2.every(cell => cell === 'O')) {
      return 'O';
    }
    if (diagonal1.every(cell => cell === 'X') || diagonal2.every(cell => cell === 'X')) {
      return 'X';
    }

    // Check for a tie
    if (newBoard.flat().every(cell => cell !== '')) {
      return 'Tie';
    }

    return null;
  };

  const resetGame = () => {
    setBoard(Array(boardSize).fill(null).map(() => Array(boardSize).fill('')));
    setCurrentPlayer('O');
    setWinner(null);
  };

  const handlePress = (row, col) => {
    if (board[row][col] !== '' || winner) {
      return;
    }

    const newBoard = board.map((rowArr) => [...rowArr]);
    newBoard[row][col] = currentPlayer;
    setBoard(newBoard);
    const currentWinner = checkWinner(newBoard);
    if (currentWinner) {
      setWinner(currentWinner);
    } else {
      setCurrentPlayer(currentPlayer === 'O' ? 'X' : 'O');
    }
  };


  return (
    <MainLayout>
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
                <Text style={[styles.cellText, cell === 'X' && styles.cellTextX]}>{cell}</Text>
              </Pressable>
            ))}
          </View>
        ))}
      </View>
        <Text style={styles.currentPlayerText}>Current Player: {currentPlayer}</Text>
        {winner && (
          <>
            <Text style={styles.winnerText}>
              {winner === 'Tie' ? 'It\'s a Tie!' : `The WINNER is ${winner}`}
            </Text>
            <Button title="Play Again" onPress={resetGame} />
          </>
        )}
    </MainLayout>
  );
}

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
  currentPlayerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'blue',
  }
});

export default MultiScreen;