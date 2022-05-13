import React from 'react'
import { HomeIcon, HeartIcon } from 'assets/svgs/movie'
import styles from './Navigation.module.scss'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <ul className={styles.navigation}>
      <li>
        <NavLink to='/'>
          <HomeIcon />
        </NavLink>
      </li>
      <li>
        <NavLink to='/favorite'>
          <HeartIcon />
        </NavLink>
      </li>
    </ul>
  )
}

export default Navigation
