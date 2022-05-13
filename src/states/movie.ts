import { atom } from 'hooks/state'
import { IMovieSearch } from 'types/movie'

export const movieListState = atom<IMovieSearch[]>({ key: '#movieListState', default: [] })
