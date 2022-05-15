import { SyntheticEvent, useEffect, useRef, useMemo, MouseEvent, forwardRef, LegacyRef, MutableRefObject } from 'react'

import store from 'storejs'

import { useRecoilValue, useRecoilState, useSetRecoilState } from 'hooks/state'
import {
  movieListState,
  searchWordState,
  pageNumState,
  modalState,
  clickedMovieState,
  loadingState,
} from '../../states/movie'
import { getMovieApi } from 'services/movie'
import { isValidResponse } from 'utils/axios'

import replaceImage from 'assets/pngs/no-image.png'
import styles from './MovieList.module.scss'
import { useGetData } from 'hooks'
import { IMovieSearch } from 'types/movie'
import { HeartIcon } from 'assets/svgs/movie'

interface Params {
  movieList: IMovieSearch[]
}

const MovieList = forwardRef<HTMLLIElement, Params>((props, ref) => {
  const { movieList } = props
  const setModal = useSetRecoilState(modalState)
  const setClickedMovie = useSetRecoilState(clickedMovieState)
  const handleImgError = (e: SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = replaceImage
  }

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const clickedMovieIndex = Number(e.currentTarget.dataset.index)
    setClickedMovie(movieList[clickedMovieIndex])
    setModal(true)
  }

  return (
    <div className={styles.movieListCont}>
      <ul className={styles.movieList}>
        {movieList.map((movie, index) => (
          <li key={`movieList${index}`} className={styles.movieItem}>
            <button type='button' onClick={handleClick} data-index={index}>
              <img src={movie.Poster} onError={handleImgError} alt={`${movie.Title}img`} />
              <div className={styles.textInfo}>
                <p className={styles.title}>{movie.Title}</p>
                <p className={styles.year}>{parseInt(movie.Year, 10)}</p>
                <p className={styles.imdbID}>{`IMBD: ${movie.imdbID}`}</p>
              </div>
              {movie.isFav && <HeartIcon className={styles.movieListHeart} />}
            </button>
          </li>
        ))}
        <li ref={ref} />
      </ul>
      {!movieList.length && <p className={styles.noResult}>검색 결과가 없습니다.</p>}
    </div>
  )
})

MovieList.displayName = 'MovieList'

export default MovieList
