'use client'

import { useEffect, useState } from 'react'
import styles from './page.module.css'

const SECRET_SEQUENCE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
]

export default function Home() {
  const [keySequence, setKeySequence] = useState<string[]>([])
  const [unlocked, setUnlocked] = useState(false)
  const [showError, setShowError] = useState(true)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      let key = e.key

      // Convert arrow keys to their names
      if (e.key.startsWith('Arrow')) {
        key = e.key
      } else {
        key = e.key.toLowerCase()
      }

      setKeySequence((prev) => {
        const newSequence = [...prev, key].slice(-SECRET_SEQUENCE.length)

        if (
          newSequence.length === SECRET_SEQUENCE.length &&
          newSequence.every((k, i) => k === SECRET_SEQUENCE[i])
        ) {
          setUnlocked(true)
          setShowError(false)
          return []
        }

        return newSequence
      })
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  if (unlocked) {
    return (
      <div className={styles.container}>
        <video autoPlay muted loop className={styles.background}>
          <source
            src="https://media.giphy.com/media/l0HlDtg9x8FZo0XO0/giphy.mp4"
            type="video/mp4"
          />
        </video>
        <div className={styles.content}>
          <h1 className={styles.title}>🎺 AND HIS NAME IS JOHN CENA 🎺</h1>
          <div className={styles.gamesGrid}>
            <div className={styles.gameCard}>
              <h3>EaglercraftX</h3>
              <p>Play Minecraft in your browser</p>
              <button
                onClick={() =>
                  window.open(
                    'https://eaglercraft.com/',
                    '_blank',
                    'width=1200,height=800'
                  )
                }
              >
                Play Now
              </button>
            </div>

            <div className={styles.gameCard}>
              <h3>UnblockGames</h3>
              <p>Access blocked games and sites</p>
              <button
                onClick={() =>
                  window.open(
                    'https://unblocked-games.com/',
                    '_blank',
                    'width=1200,height=800'
                  )
                }
              >
                Browse
              </button>
            </div>

            <div className={styles.gameCard}>
              <h3>Web Proxy</h3>
              <p>Browse with anonymity</p>
              <button
                onClick={() =>
                  window.open(
                    'https://proxysite.com/',
                    '_blank',
                    'width=1200,height=800'
                  )
                }
              >
                Open Proxy
              </button>
            </div>

            <div className={styles.gameCard}>
              <h3>Retro Games</h3>
              <p>Classic arcade and NES games</p>
              <button
                onClick={() =>
                  window.open(
                    'https://chromedino.com/',
                    '_blank',
                    'width=1200,height=800'
                  )
                }
              >
                Play
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      {showError && (
        <>
          <div className={styles.errorContent}>
            <img
              src="https://via.placeholder.com/400x300/ff6b6b/ffffff?text=ERROR!"
              alt="Error"
              className={styles.errorImage}
            />
            <h1 className={styles.errorTitle}>You've Hit an Error!</h1>
            <p className={styles.errorDescription}>
              Something went wrong. Please try again later.
            </p>
            <div className={styles.errorCode}>Error Code: 0xDEADBEEF</div>
          </div>
          <div className={styles.hint}>🔑 There\'s a secret way in...</div>
        </>
      )}
    </div>
  )
}
