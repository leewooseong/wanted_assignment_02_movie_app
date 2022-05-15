import { MutableRefObject, useRef } from 'react'
import { useGetData } from 'hooks'
import { useRecoilValue } from 'recoil'

import { movieListState, searchWordState, pageNumState } from 'states/movie'
import { useLoadingMore } from '../../hooks/index'

import Search from '../../component/Search/index'
import MovieList from '../../component/MovlieList'
import Navigation from 'component/Navigation'
import Modal from 'component/Modal'
import styles from './MovieSearch.module.scss'

const MovieSearch = () => {
  const searchWord = useRecoilValue(searchWordState)
  const pageNum = useRecoilValue(pageNumState)
  const movieList = useRecoilValue(movieListState)
  const loadDataTrigger: MutableRefObject<null> = useRef(null)
  useGetData(searchWord, pageNum)
  useLoadingMore(loadDataTrigger)

  return (
    <>
      <section className={styles.movieSearchCont}>
        <Search />
        <MovieList movieList={movieList} ref={loadDataTrigger} />
        <Navigation />
      </section>
      <Modal />
    </>
  )
}

export default MovieSearch
