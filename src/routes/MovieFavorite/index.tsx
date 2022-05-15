import store from 'storejs'
import styles from './MovieFavorite.module.scss'
import Navigation from '../../component/Navigation/index'
import MovieList from 'component/MovlieList'
import Modal from 'component/Modal'
import { useEffect } from 'hooks'
import { movieListState } from 'states/movie'
import { useRecoilValue } from 'recoil'

const MovieFavorite = () => {
  const favoriteMovieList = store.get('favorite')
  const movieList = useRecoilValue(movieListState)
  useEffect(() => {}, [movieList])
  return (
    <>
      <section>
        <h2 className={styles.favoriteHeader}>My Favorite</h2>
        <MovieList movieList={favoriteMovieList} />
        <Navigation />
      </section>
      <Modal />
    </>
  )
}

export default MovieFavorite
