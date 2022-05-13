import { useMount, useState } from 'hooks'
import styles from './MovieSearch.module.scss'
import Search from '../../component/Search/index'
import MovieList from '../../component/MovlieList'
import Navigation from 'component/Navigation'

const MovieSearch = () => {
  return (
    <section className={styles.movieSearchCont}>
      <Search />
      <MovieList />
      <Navigation />
    </section>
  )
}

export default MovieSearch
