import { ChangeEvent } from 'react'
import { useState } from 'hooks'

import { useSetRecoilState } from 'hooks/state'
import { movieListState } from '../../states/movie'

import { getMovieApi } from 'services/movie'
import { IMovieAPIErrorRes, IMovieAPIRes } from 'types/movie.d'

import { SearchIcon } from 'assets/svgs/movie'
import styles from './Search.module.scss'

const Search = () => {
  // recoilState
  const setMovieList = useSetRecoilState(movieListState)

  // componentState
  const [pageNum, setPageNum] = useState(1)

  const isValidResponse = (axiosRes: IMovieAPIRes | IMovieAPIErrorRes): axiosRes is IMovieAPIRes => {
    return (axiosRes as IMovieAPIRes).Response === 'True'
  }

  // 변화가 생길 때 핸들링 함수
  // 0. 입력이 없으면 []로 recoil변수 초기화
  // 1. 페이지를 1로 다시 초기화
  // 2. 바뀐 검색어 및 1페이지를 인자로 api 함수 호출
  // 3. 불러온 결과를 recoil 변수에 저장
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPageNum(1)
    getMovieApi({ s: e.currentTarget.value, page: pageNum }).then((res) => {
      if (isValidResponse(res.data)) {
        setMovieList(res.data.Search)
      } else {
        setMovieList([])
      }
    })
  }

  return (
    <section className={styles.searchCont}>
      <div className={styles.searchInputCont}>
        <SearchIcon className={styles.searchIcon} />
        <input type='text' className={styles.searchInput} placeholder='검색' onChange={handleOnChange} />
      </div>
    </section>
  )
}

export default Search
