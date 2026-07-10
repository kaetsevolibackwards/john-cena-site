'use client'

import { useEffect, useState } from 'react'
import styles from './page.module.css'

const GAMES = [
  {
    title: '2048',
    url: 'https://gabrielecirulli.github.io/2048/',
  },
  {
    title: 'Flappy Bird',
    url: 'https://nebez.github.io/flappybird/',
  },
  {
    title: 'Snake Game',
    url: 'https://playsnakegame.com/',
  },
  {
    title: 'Pac-Man',
    url: 'https://namco.github.io/pac-js/',
  },
  {
    title: 'Tetris',
    url: 'https://chvin.github.io/react-tetris/',
  },
  {
    title: 'Asteroids',
    url: 'https://www.freeasteroids.org/',
  },
  {
    title: 'Chess',
    url: 'https://lichess.org/',
  },
  {
    title: 'Sudoku',
    url: 'https://sudoku.com/',
  },
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
          src={selectedGame.url}
          title={selectedGame.title}
          className={styles.gameFrame}
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
