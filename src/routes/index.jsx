import { Route, Routes } from 'react-router-dom'
import MovieFavorite from './MovieFavorite'
import MovieSearch from './MovieSearch'
import styles from './Routes.module.scss'

const App = () => {
  return (
    <div className={styles.app}>
      <section className={styles.introducePage}>
        <h2>
          Grip Company <span>Assignment</span>
          <span className={styles.name}>by 이 우 성</span>
        </h2>
      </section>
      <section className={styles.contentLayout}>
        <Routes>
          <Route path='/' element={<MovieSearch />} />
          <Route path='favorite' element={<MovieFavorite />} />
          {/* <Route path='*' element={<div>404</div>} /> */}
        </Routes>
      </section>
    </div>
  )
}

export default App
