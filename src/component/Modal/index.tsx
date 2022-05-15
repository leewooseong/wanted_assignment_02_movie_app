import cx from 'classnames'
import store from 'storejs'

import { useRecoilState, useRecoilValue } from 'hooks/state'
import { modalState } from 'states/movie'
import { IMovieSearch } from 'types/movie'
import { clickedMovieState, movieListState } from '../../states/movie'

import styles from './Modal.module.scss'
import { prependListener } from 'process'
import { useSetRecoilState } from 'recoil'

interface IpageInfo {
  main: string
  confirmButton: string
}

const PAGEINFO: IpageInfo[] = [
  {
    main: '즐겨찾기에 등록할까요?',
    confirmButton: '추가',
  },
  {
    main: '즐겨찾기를 취소할까요?',
    confirmButton: '취소',
  },
]

const Modal = () => {
  const [modal, setModal] = useRecoilState(modalState)
  const setMovieList = useSetRecoilState(movieListState)
  const [clickedMovie, setClickedMovie] = useRecoilState(clickedMovieState)
  console.log(clickedMovie)

  const handleCloseModal = () => {
    setModal(false)
  }
  const handleConfirm = () => {
    const favoriteList: IMovieSearch[] = store.get('favorite')
    if (clickedMovie.isFav) {
      store.set(
        'favorite',
        favoriteList ? favoriteList.filter((favoriteItem) => favoriteItem.imdbID !== clickedMovie.imdbID) : []
      )
      setMovieList((pre) =>
        pre.map((movie) => {
          if (movie.imdbID === clickedMovie.imdbID) {
            return { ...movie, isFav: false }
          }
          return movie
        })
      )
    } else {
      store.set(
        'favorite',
        favoriteList ? [...favoriteList, { ...clickedMovie, isFav: true }] : [{ ...clickedMovie, isFav: true }]
      )
      setMovieList((pre) =>
        pre.map((movie) => {
          if (movie.imdbID === clickedMovie.imdbID) {
            return { ...movie, isFav: true }
          }
          return movie
        })
      )
    }
    setModal(false)
  }

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={cx(styles.modal, { [styles.openModal]: modal })}>
      {modal ? (
        <section>
          <button type='button' onClick={handleCloseModal}>
            &times;
          </button>
          <main>{clickedMovie.isFav ? '즐겨찾기를 취소할까요?' : '즐겨찾기에 등록할까요?'}</main>
          <footer>
            <button type='button' onClick={handleConfirm}>
              {clickedMovie.isFav ? '등록 취소' : '즐겨찾기 등록'}
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  )
}

export default Modal
