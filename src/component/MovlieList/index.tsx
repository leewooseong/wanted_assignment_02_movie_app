import React, { SyntheticEvent } from 'react'

import { useRecoilValue } from 'hooks/state'

import { movieListState } from '../../states/movie'
import replaceImage from 'assets/pngs/no-image.png'
import { HeartIcon } from 'assets/svgs/movie'
import styles from './MovieList.module.scss'

const MovieList = () => {
  const movieList = useRecoilValue(movieListState)
  console.log(movieList)
  const handleImgError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = replaceImage
  }
  return (
    <div className={styles.movieListCont}>
      <ul className={styles.movieList}>
        {movieList.map((value, index) => (
          <li key={`movieList${index}`} className={styles.movieItem}>
            <button type='button'>
              <img src={value.Poster} onError={handleImgError} alt={`${value.Title}img`} />
              <div className={styles.textInfo}>
                <p className={styles.title}>{value.Title}</p>
                <p className={styles.year}>{parseInt(value.Year, 10)}</p>
                <p className={styles.imdbID}>{`IMBD: ${value.imdbID}`}</p>
              </div>
              <HeartIcon className={styles.movieListHeart} />
            </button>
          </li>
        ))}
      </ul>
      {!movieList && <p className={styles.noResult}>검색 결과가 없습니다.</p>}
    </div>
  )
}

export default MovieList
