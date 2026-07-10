'use client'

import { useEffect, useState } from 'react'
import styles from './page.module.css'

const GAMES = [
  // Direct playable games
  {
    title: 'Flappy Bird',
    url: 'https://nebez.github.io/flappybird/',
  },
  {
    title: '2048',
    url: 'https://gabrielecirulli.github.io/2048/',
  },
  {
    title: 'Tetris',
    url: 'https://chvin.github.io/react-tetris/',
  },
  {
    title: 'Snake Game',
    url: 'https://anotak.github.io/slither/',
  },
  {
    title: 'Pac-Man',
    url: 'https://plyr.link/pac-man/',
  },
  {
    title: 'Space Invaders',
    url: 'https://plyr.link/space-invaders/',
  },
  {
    title: 'Asteroids',
    url: 'https://plyr.link/asteroids/',
  },
  {
    title: 'Chess',
    url: 'https://www.chess.com/play/online',
  },
  {
    title: 'Checkers',
    url: 'https://www.gamesforthebrain.com/game/checkers/',
  },
  {
    title: 'Tic Tac Toe',
    url: 'https://www.gamesforthebrain.com/game/tictactoe/',
  },
  {
    title: 'Hangman',
    url: 'https://www.gamesforthebrain.com/game/hangman/',
  },
  {
    title: 'Cookie Clicker',
    url: 'https://orteil.dashnet.org/cookieclicker/',
  },
  {
    title: 'Wordle',
    url: 'https://www.powerlanguage.co.uk/wordle/',
  },
  {
    title: 'Minesweeper',
    url: 'https://minesweeper.online/',
  },
  {
    title: 'Sudoku',
    url: 'https://www.sudokuplay.com/',
  },
  {
    title: 'Portal Flash',
    url: 'https://www.addictinggames.com/adventure/portal-flash-version',
  },
  {
    title: 'Dino Chrome',
    url: 'https://chromedino.com/',
  },
  {
    title: 'Agar.io',
    url: 'https://agar.io/',
  },
  {
    title: 'Slither.io',
    url: 'https://slither.io/',
  },
  {
    title: 'Diep.io',
    url: 'https://diep.io/',
  },
  // GitHub games that work
  {
    title: 'Doom JS',
    url: 'https://js-dos.com/games/doom',
  },
  {
    title: 'Sokoban',
    url: 'https://www.gamesforthebrain.com/game/sokoban/',
  },
  {
    title: 'Simon Says',
    url: 'https://www.gamesforthebrain.com/game/simon/',
  },
  {
    title: 'Memory Game',
    url: 'https://www.gamesforthebrain.com/game/memory/',
  },
  {
    title: 'Maze Game',
    url: 'https://www.gamesforthebrain.com/game/maze/',
  },
  {
    title: 'Connect 4',
    url: 'https://www.gamesforthebrain.com/game/connect4/',
  },
  {
    title: 'Yahtzee',
    url: 'https://www.gamesforthebrain.com/game/yahtzee/',
  },
  {
    title: 'Blackjack',
    url: 'https://www.gamesforthebrain.com/game/blackjack/',
  },
  // Proxy sites
  {
    title: 'CroxyProxy',
    url: 'https://www.croxyproxy.com/',
  },
  {
    title: 'ProxySite',
    url: 'https://www.proxysite.com/',
  },
  {
    title: 'Unblocker',
    url: 'https://unblocker.yt/',
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
          allow="autoplay; fullscreen"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
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
