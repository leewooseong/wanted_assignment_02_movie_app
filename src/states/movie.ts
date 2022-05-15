import { atom } from 'hooks/state'
import { IMovieSearch } from 'types/movie'

export const movieListState = atom<IMovieSearch[]>({ key: '#movieListState', default: [] })
export const searchWordState = atom<string>({ key: '#searchWordState', default: '' })
export const pageNumState = atom<number>({ key: '#pageNumState', default: 1 })
export const modalState = atom<boolean>({ key: '#modalState', default: false })
export const loadingState = atom<boolean>({ key: '#loadingState', default: false })
export const clickedMovieState = atom<IMovieSearch>({
  key: '#clickedMovieState',
  default: {
    Title: '',
    Year: '',
    imdbID: '',
    Type: '',
    Poster: '',
    isFav: false,
  },
})
