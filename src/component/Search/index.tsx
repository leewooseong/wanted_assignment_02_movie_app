import { ChangeEvent } from 'react'

import { useSetRecoilState, useRecoilState } from 'hooks/state'
import { movieListState, searchWordState, pageNumState } from '../../states/movie'

import { getMovieApi } from 'services/movie'
import { isValidResponse } from 'utils/axios'

import { SearchIcon } from 'assets/svgs/movie'
import styles from './Search.module.scss'

const Search = () => {
  const setMovieList = useSetRecoilState(movieListState)
  const [pageNum, setPageNum] = useRecoilState(pageNumState)
  const setSearchWordState = useSetRecoilState(searchWordState)

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPageNum(1)
    setMovieList([])
    setSearchWordState(e.currentTarget.value)
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
