import { useRef, useEffect, useMemo } from 'react'
import { useSetRecoilState } from 'hooks/state'
import { pageNumState } from 'states/movie'

interface Params {
  loading: boolean
}

const LoadingBar = ({ loading }: Params) => {
  const loadDataTrigger = useRef(null)
  const setPageNum = useSetRecoilState(pageNumState)
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
  }, [loadDataObserver])

  return loading && <li ref={loadDataTrigger}>...loading</li>
}

export default LoadingBar
