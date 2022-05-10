import styles from './Routes.module.scss'
import MovieSearch from './MovieSearch'
import MovieFavorite from './MovieFavorite'
import { Routes, Route } from 'react-router-dom'
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil'

const App = () => {
  return (
    <RecoilRoot>
      <div className={styles.app}>
        <Routes>
          <Route path='/' element={<MovieSearch />} />
          <Route path='/favorite' element={<MovieFavorite />} />
          <Route />
        </Routes>
      </div>
    </RecoilRoot>
  )
}

export default App
