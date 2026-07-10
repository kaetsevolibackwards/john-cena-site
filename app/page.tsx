'use client'

import { useEffect, useState } from 'react'
import styles from './page.module.css'

const GAMES = [
  // Minecraft & Sandbox
  {
    title: 'Eaglercraft',
    url: 'https://eaglercraft.com/',
  },
  {
    title: 'Minecraft JS',
    url: 'https://js-dos.com/games/doom-reboot',
  },
  // Action & Adventure
  {
    title: 'Run 3',
    url: 'https://www.littlebigplay.com/games/run3',
  },
  {
    title: 'Happy Wheels',
    url: 'https://www.littlebigplay.com/games/happy-wheels',
  },
  {
    title: 'Subway Surfers',
    url: 'https://subway-surfers.io/',
  },
  {
    title: 'Geometry Dash',
    url: 'https://www.littlebigplay.com/games/geometry-dash',
  },
  // Classic Games
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
    title: 'Minesweeper',
    url: 'https://www.littlebigplay.com/games/minesweeper',
  },
  {
    title: 'Bomberman',
    url: 'https://www.littlebigplay.com/games/bomberman',
  },
  // Multiplayer
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
  // Puzzle & Brain
  {
    title: 'Wordle',
    url: 'https://www.nytimes.com/games/wordle/',
  },
  {
    title: 'Chess',
    url: 'https://lichess.org/',
  },
  {
    title: 'Sudoku',
    url: 'https://sudoku.com/',
  },
  {
    title: 'Portal',
    url: 'https://www.littlebigplay.com/games/portal',
  },
  // Cookie & Idle
  {
    title: 'Cookie Clicker',
    url: 'https://orteil.dashnet.org/cookieclicker/',
  },
  {
    title: 'Idle Breakout',
    url: 'https://idlebreakout.com/',
  },
  // Shooting & Classic
  {
    title: 'Doom',
    url: 'https://js-dos.com/games/doom',
  },
  {
    title: 'Wolfenstein 3D',
    url: 'https://js-dos.com/games/wolf3d',
  },
  {
    title: 'Quake',
    url: 'https://js-dos.com/games/quake',
  },
  // Retro & Nintendo
  {
    title: 'Super Mario Bros',
    url: 'https://www.littlebigplay.com/games/super-mario-bros',
  },
  {
    title: 'Donkey Kong',
    url: 'https://www.littlebigplay.com/games/donkey-kong',
  },
  {
    title: 'Legend of Zelda',
    url: 'https://www.littlebigplay.com/games/zelda',
  },
  {
    title: 'Sonic the Hedgehog',
    url: 'https://www.littlebigplay.com/games/sonic',
  },
  // Racing
  {
    title: 'Car Racing',
    url: 'https://www.littlebigplay.com/games/racing',
  },
  {
    title: 'Moto X3M',
    url: 'https://www.littlebigplay.com/games/moto-x3m',
  },
  // Sports
  {
    title: 'Basketball Stars',
    url: 'https://www.littlebigplay.com/games/basketball-stars',
  },
  {
    title: 'Soccer Physics',
    url: 'https://www.littlebigplay.com/games/soccer-physics',
  },
  // Proxies & Utilities
  {
    title: 'ProxySite',
    url: 'https://www.proxysite.com/',
  },
  {
    title: 'CroxyProxy',
    url: 'https://www.croxyproxy.com/',
  },
  {
    title: 'HideMyAss',
    url: 'https://www.hidemyass.com/',
  },
  {
    title: 'YouTube Unblocked',
    url: 'https://www.youtube-unblocked.com/',
  },
  {
    title: 'Reddit Unblocked',
    url: 'https://www.reddit.com/',
  },
  // More Fun Games
  {
    title: 'GTA Vice City',
    url: 'https://www.littlebigplay.com/games/gta-vice-city',
  },
  {
    title: 'Fireboy & Watergirl',
    url: 'https://www.littlebigplay.com/games/fireboy-watergirl',
  },
  {
    title: 'Dino Runner',
    url: 'https://chromedino.com/',
  },
  {
    title: 'Skibidi Toilet',
    url: 'https://www.littlebigplay.com/games/skibidi-toilet',
  },
  {
    title: 'Stick Fighter',
    url: 'https://www.littlebigplay.com/games/stick-fighter',
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
