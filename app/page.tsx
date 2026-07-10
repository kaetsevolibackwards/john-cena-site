'use client'

import { useEffect, useState } from 'react'
import styles from './page.module.css'

const GAMES = [
  { title: 'Eaglercraft', path: '/games/eaglercraft.html' },
  { title: '2048', path: '/games/2048.html' },
  { title: 'Flappy Bird', path: '/games/flappy-bird.html' },
  { title: 'Snake', path: '/games/snake.html' },
  { title: 'Tetris', path: '/games/tetris.html' },
  { title: 'Memory Match', path: '/games/memory.html' },
  { title: 'Tic Tac Toe', path: '/games/tictactoe.html' },
  { title: 'Pac-Man', path: '/games/pacman.html' },
  { title: 'Space Invaders', path: '/games/space-invaders.html' },
  { title: 'Minesweeper', path: '/games/minesweeper.html' },
  { title: 'Cookie Clicker', path: '/games/cookie-clicker.html' },
  { title: 'Hangman', path: '/games/hangman.html' },
]

export default function Home() {
  const [input, setInput] = useState('')
  const [unlocked, setUnlocked] = useState(false)
  const [selectedGame, setSelectedGame] = useState<(typeof GAMES)[0] | null>(null)

  useEffect(() => {
    if (input === '20162018') {
      setUnlocked(true)
      setInput('')
    }
  }, [input])

  if (selectedGame) {
    return (
      <div className={styles.gameContainer}>
        <button
          className={styles.backButton}
          onClick={() => setSelectedGame(null)}
        >
          ← Back
        </button>
        <iframe
          src={selectedGame.path}
          title={selectedGame.title}
          className={styles.gameFrame}
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals"
        />
      </div>
    )
  }

  if (unlocked) {
    return (
      <div className={styles.hubContainer}>
        <h1 className={styles.hubTitle}>Game Hub</h1>
        <div className={styles.gamesGrid}>
          {GAMES.map((game) => (
            <button
              key={game.title}
              className={styles.gameCard}
              onClick={() => setSelectedGame(game)}
            >
              {game.title}
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorBox}>
        <h1 className={styles.errorTitle}>Error</h1>
        <p className={styles.errorMessage}>Something went wrong</p>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={styles.hiddenInput}
          placeholder="Enter code..."
          autoFocus
        />
      </div>
    </div>
  )
}
