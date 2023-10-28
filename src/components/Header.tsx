import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

export const Header: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <NavLink className={styles.logo} to="/">
            <img alt="roulettes dogey" src="/logo-2.svg" />
          </NavLink>
        </div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div className={styles.externalLinks}>
            <a href="https://discord.com/invite/w9PGqMxpGN" target="_blank" rel="noreferrer">
              Github
            </a>
            <a href="https://twitter.com/dogeysolana" target="_blank" rel="noreferrer">
              Stats
            </a>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
