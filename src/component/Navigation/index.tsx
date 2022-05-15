import React from 'react'
import { NavLink } from 'react-router-dom'
import cx from 'classnames'

import styles from './Navigation.module.scss'

const Navigation = () => {
  return (
    <ul className={styles.navigation}>
      <li>
        <NavLink to='/' className={({ isActive }) => cx(styles.navButton, { [styles.active]: isActive })}>
          <p>Home</p>
        </NavLink>
      </li>
      <li>
        <NavLink to='/favorite' className={({ isActive }) => cx(styles.navButton, { [styles.active]: isActive })}>
          <p>Favorite</p>
        </NavLink>
      </li>
    </ul>
  )
}

export default Navigation
