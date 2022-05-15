import { MutableRefObject } from 'react'
import { useMount } from 'react-use'
import { useEffect, useMemo, useState } from 'hooks'
import store from 'storejs'

import { useSetRecoilState, useRecoilValue } from './state'
import { loadingState, pageNumState, movieListState } from 'states/movie'
import { getMovieApi } from 'services/movie'
import { isValidResponse } from 'utils/axios'
import { IMovieSearch } from 'types/movie'

export { useClickAway, useInterval, usePrevious, useMount, useUnmount } from 'react-use'
export { useState, useEffect, useLayoutEffect, useCallback, useContext, useMemo, useReducer, useRef } from 'react'

export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false)
  useMount(() => setMounted(true))
  return mounted
}

function filteringData(dataList: IMovieSearch[]) {
  const favoriteList = store.get('favorite')
  const filteredList = dataList
    .map((data) => {
      return { ...data, isFav: data.isFav === undefined ? false : data.isFav }
    })
    .reduce((acc: IMovieSearch[], current: IMovieSearch) => {
      if (acc.findIndex(({ imdbID }) => imdbID === current.imdbID) === -1) {
        acc.push(current)
      }
      return acc
    }, [])

  return filteredList.map((data) => {
    if (!favoriteList) {
      return data
    }
    favoriteList.forEach((favoriteData: IMovieSearch) => {
      if (Object.values(favoriteData).includes(data.imdbID)) {
        data.isFav = true
      }
    })
    return data
  })
}

export function useGetData(searchWord: string, pageNum: number) {
  const setLoading = useSetRecoilState(loadingState)
  const setMovieList = useSetRecoilState(movieListState)
  const page = useRecoilValue(pageNumState)

  useEffect(() => {
    setLoading(true)
    getMovieApi({ s: searchWord, page: pageNum }).then((res) => {
      if (isValidResponse(res.data)) {
        const searchData = res.data.Search
        setMovieList((pre) => {
          const filteredData = filteringData([...pre, ...searchData])
          console.log(filteredData)
          return filteredData
        })
      }
    })
    setLoading(true)
  }, [searchWord, page])
}

export function useLoadingMore(refValue: MutableRefObject<null>) {
  const setPageNum = useSetRecoilState(pageNumState)

  const loadDataTrigger = refValue
  const loadDataObserver = useMemo(
    () =>
      new IntersectionObserver(([{ isIntersecting }]) => {
        if (isIntersecting) {
          setPageNum((pre) => pre + 1)
        }
      }),
    [setPageNum]
  )

  useEffect(() => {
    if (loadDataTrigger.current !== null) {
      const triggerTarget = loadDataTrigger.current
      loadDataObserver.observe(triggerTarget)
      return () => loadDataObserver.unobserve(triggerTarget)
    }
    return undefined
  }, [loadDataObserver, loadDataTrigger])
}
